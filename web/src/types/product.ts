import { Category } from './category';

export interface IProduct {
  id: string;
  name: string;
  image_url: string;
  price_in_cents: number;
  category: Category;
}
