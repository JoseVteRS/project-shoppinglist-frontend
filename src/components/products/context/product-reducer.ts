import { ApiProduct } from '../../../models/product.mode';

export interface ProductState {
	product: any;
}

type ProductActionType = { type: '[PROD] GET'; payload: ApiProduct };

export const productReducer = (
	state: ProductState,
	action: ProductActionType
) => {
	switch (action.type) {
		case '[PROD] GET':
			return {
				...state,
				product: action.payload
			};

		default:
			return state;
	}
};
