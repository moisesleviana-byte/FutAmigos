
export enum Position {
  GOLEIRO = 'Goleiro',
  DEFESA = 'Defesa',
  MEIA = 'Meio-Campo',
  ATAQUE = 'Ataque',
}

export enum PlayerStatus {
  MENSALISTA = 'Mensalista',
  CONVIDADO = 'Convidado',
  LESIONADO = 'Lesionado',
}

export interface Athlete {
  id: string;
  name: string;
  cpf: string;
  birthDate: string;
  phone: string;
  email: string;
  position: Position;
  number: number;
  status: PlayerStatus;
  avatar: string;
  skillLevel: number; // 1 to 5
}

export interface PaymentRecord {
  month: string;
  year: number;
  amount: number;
  status: 'Pendente' | 'Pago';
  dueDate: string;
  paidDate?: string;
}

export type ViewType = 'registration' | 'financial' | 'evaluation' | 'draw' | 'presence' | 'tactics';
