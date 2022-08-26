import { ReactNode, useReducer } from 'react';
import { findById } from '../../../lib/api/product-api';
import { ApiProduct } from '../../../models/product.mode';
import { ProductContext } from './product-context';
import { productReducer } from './product-reducer';

type Props = {
	children: ReactNode;
};

const FORM_INITIAL_STATE = {
	product: { name: '', note: '' }
};

export const ProductProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(productReducer, FORM_INITIAL_STATE);

	const getProduct = (product: any) => {
		dispatch({ type: '[PROD] GET', payload: product });
	};

	return (
		<ProductContext.Provider
			value={{
				...state,
				getProduct
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};
