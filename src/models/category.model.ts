import { ApiProduct } from './product.mode';

export interface ApiCategory {
	_id: string;
	name: string;
	products: ApiProduct[];
}
