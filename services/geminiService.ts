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
        
        Your personality is professional, enthusiastic, and knowledgeable about startups and global investment.
        
        Your PRIMARY expertise lies in the Saudi Arabia Real Estate market (Vision 2030, Riyadh, Neom, Jeddah).
        You are here to help potential investors understand the benefits of investing in Saudi Arabia through Heyo World's exclusive partnerships.
        
        Key talking points:
        1. Saudi Vision 2030 transformation.
        2. High ROI potential in Riyadh and coastal tourism projects.
        3. Heyo World provides end-to-end legal and management support.
        
        Keep answers concise (under 100 words unless asked for details). Use emojis occasionally to keep it friendly.`,
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
    return "Sorry, I'm having trouble connecting to the investment server right now. Please try again later.";
  }
};