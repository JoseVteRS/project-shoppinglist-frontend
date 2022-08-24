import { createContext } from 'react';
import { ApiProduct } from '../../../models/product.mode';

interface ProductContextProps {
	product: ApiProduct;

	getProduct: (product: ApiProduct) => void;
}

export const ProductContext = createContext({} as ProductContextProps);
