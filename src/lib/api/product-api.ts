import { axiosInstance } from '../axios-instance';
import { CreateProductDto } from '../interfaces/create-product.dto';

const ENDPOINT = 'products';

export const findAllProducts = async (signal: AbortSignal) => {
	try {
		const res = await axiosInstance.get(ENDPOINT, { signal });

		let products = [];

		if (res.statusText === 'OK') products = await res.data;

		return {
			products,
			error: !(res.statusText === 'OK'),
			aborted: false
		};
	} catch (error: any) {
		const isAborted = error.name === 'AbortError';

		return {
			products: undefined,
			error: !isAborted,
			aborted: isAborted
		};
	}
};

export const createProduct = async (data: CreateProductDto) => {
	try {
		const res = await axiosInstance.post(ENDPOINT, { ...data });

		if (res.statusText === 'OK') return res;
	} catch (error: any) {
		const isAborted = error.name === 'AbortError';
		return {
			error: !isAborted,
			aborted: isAborted
		};
	}
};
