
export enum SectionId {
  HOME = 'home',
  SERVICES = 'services', // Covers Visa, Study, Immigration
  SAUDI_INVEST = 'saudi-invest',
  CONTACT = 'contact'
}

export interface RealEstateProject {
  id: string;
  title: string;
  location: string;
  roi: string;
  price: string;
  image: string;
  tags: string[];
}

export type ContactTopic = 'visa' | 'study' | 'immigration' | 'invest' | 'other';

export const CONTACT_EMAILS: Record<ContactTopic, string> = {
  visa: 'visa@heyoworld.com',
  study: 'studyabroad@heyoworld.com',
  immigration: 'immigration@heyoworld.com',
  invest: 'invest@heyoworld.com',
  other: 'hello@heyoworld.com'
};
