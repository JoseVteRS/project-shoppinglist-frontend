import { createContext } from 'react';
import { ApiProduct } from '../../../models/product.mode';

interface ProductContextProps {
	product: any;

	getProduct: (product: any) => void;
}

export const ProductContext = createContext({} as ProductContextProps);
