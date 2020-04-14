import { ProductOption } from './product-option.model';

export interface Product {
  id: number;
  title: string;
  image_url: string;
  price: number;
  amount: number;
  subtotal: number;
  product_options: ProductOption[];
}
