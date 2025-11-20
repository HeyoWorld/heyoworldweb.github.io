
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

let chatSession: Chat | null = null;

export const initializeChat = () => {
  try {
    if (!process.env.API_KEY) {
      console.warn("API Key not found, chat functionality will be limited.");
      return;
    }
    
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `You are "HeyoBot", the smart assistant for "Heyo World Studio". 
        
        Your personality is professional, enthusiastic, and knowledgeable about Global Mobility and Investment.
        
        You have two main areas of expertise:
        1. **Global Services (Agency)**:
           - Visa Services: UK, US, Canada, Schengen.
           - Study Abroad: UK, US, Australia, New Zealand, Asia.
           - Immigration: Citizenship by Investment (CBI), Golden Visas, Asset Allocation.
           
        2. **Saudi Arabia Real Estate (Investment Wing)**:
           - Focus on Vision 2030, Riyadh, Neom.
           - High ROI potential and Golden Visa opportunities in Saudi.

        When a user asks about a specific topic, guide them to the right email contact:
        - Study: studyabroad@heyoworld.com
        - Visa: visa@heyoworld.com
        - Immigration: immigration@heyoworld.com
        - Investment: invest@heyoworld.com
        
        Keep answers concise (under 100 words). Use emojis to be friendly.`,
      },
    });
  } catch (error) {
    console.error("Failed to initialize Gemini Chat:", error);
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    initializeChat();
    if (!chatSession) return "Thinking... (Please ensure API Key is set)";
  }

  try {
    const result: GenerateContentResponse = await chatSession!.sendMessage({ message });
    return result.text || "I'm processing that information...";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to the server right now. Please try again later.";
  }
};
