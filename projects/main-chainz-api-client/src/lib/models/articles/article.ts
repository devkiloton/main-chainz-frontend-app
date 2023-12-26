import { Category } from './enum/category';
import { Language } from './enum/language';
import { Sector } from './enum/sector';

export type Article = {
  id: string;
  title: string;
  language: Language;
  base64: string;
  sector: Sector;
  category: Category;
  views: number;
  updatedAt: Date;
};
