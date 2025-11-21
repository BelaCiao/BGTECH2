export enum DeviceType {
  PC = 'PC Gamer / Desktop',
  NOTEBOOK = 'Notebook',
  TV = 'Smart TV',
  MICROONDAS = 'Microondas',
  AUDIO = 'Áudio / Home Theater',
  OUTROS = 'Outros Eletrônicos'
}

export interface WizardData {
  deviceType: DeviceType | null;
  brand: string;
  defect: string;
  clientName: string;
  clientPhone: string;
  details: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface ReviewStats {
  stars: number;
  percentage: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}