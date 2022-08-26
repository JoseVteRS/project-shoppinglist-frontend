import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../../components/products/context/product-context';
import { ApiProduct } from '../../../models/product.mode';
import { findAllProducts, findById } from '../../api/product-api';

interface ProductData {
	data: ApiProduct;
	error: boolean;
	loading: boolean;
}

export const useProduct = () => {
	const { product } = useContext(ProductContext);

	useEffect(() => {
		console.log({ product: product?.name });
	}, []);

	// const [product, setProduct] = useState<ProductData>({
	// 	data: {},
	// 	error: false,
	// 	loading: true
	// });

	// const setData = (newData: ApiProduct) => {
	// 	setProduct({ data: newData, error: false, loading: false });
	// };

	// const setError = () => {
	// 	setProduct({ data: {}, error: true, loading: false });
	// };

	// useEffect(() => {
	// 	const controller = new AbortController();
	// 	loadProduct(setData, setError, controller.signal, productInfo._id);

	// 	return () => controller.abort();
	// }, []);

	// return {
	// 	product: product.data,
	// 	productError: product.error,
	// 	productLoading: product.loading
	// };
};

const loadProduct = async (
	setData: (newData: ApiProduct) => void,
	setError: () => void,
	signal: AbortSignal,
	id: string
) => {
	const { product, aborted } = await findById(id, signal);

	if (aborted) return;
	if (product) setData(product);
	else setError();
};
