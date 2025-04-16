export interface Card {
  id: number;
  created_at: Date;
  title: string;
  description: string;
  icon: string;
  color?: string;
  link?: string;
}
