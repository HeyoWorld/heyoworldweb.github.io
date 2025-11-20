export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  SAUDI_INVEST = 'saudi-invest',
  CONTACT = 'contact'
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  colSpan?: string;
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