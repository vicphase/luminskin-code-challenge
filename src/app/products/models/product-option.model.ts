import { ProductOptionValue } from './product-option-value.model';

export interface ProductOption {
  title: string;
  prefix: string;
  suffix: string;
  options: ProductOptionValue[];
}
