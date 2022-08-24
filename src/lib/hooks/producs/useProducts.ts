import { useEffect, useState } from 'react';
import { ApiProduct } from '../../../models/product.mode';
import { findAllProducts } from '../../api/product-api';

interface ProductData {
	data: ApiProduct[];
	error: boolean;
	loading: boolean;
}

export const useProducts = (filters?: any) => {
	const [products, setProducts] = useState<ProductData>({
		data: [],
		error: false,
		loading: true
	});

	const setData = (newData: ApiProduct[]) => {
		setProducts({ data: newData, error: false, loading: false });
	};

	const setError = () => {
		setProducts({ data: [], error: true, loading: false });
	};

	useEffect(() => {
		const controller = new AbortController();
		loadProducts(setData, setError, controller.signal);

		return () => controller.abort();
	}, []);

	return {
		products: products.data,
		productsError: products.error,
		productsLoading: products.loading
	};
};

const loadProducts = async (
	setData: (newData: ApiProduct[]) => void,
	setError: () => void,
	signal: AbortSignal
) => {
	const { products, aborted } = await findAllProducts(signal);

	if (aborted) return;
	if (products) setData(products);
	else setError();
};
