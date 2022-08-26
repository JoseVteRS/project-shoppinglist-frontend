export type ProductCategory = {
	_id: string;
	name: string;
};

export interface ApiProduct {
	_id: string;
	name: string;
	note: string;
	categories: ProductCategory[];
}

export interface Product {
	_id: string;
	name: string;
	categories: Category[];
	createdAt: string;
	updatedAt: string;
	note?: string;
}

export interface Category {
	_id: string;
	name: string;
}
