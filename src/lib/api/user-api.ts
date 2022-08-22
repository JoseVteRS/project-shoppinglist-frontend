import { axiosInstance } from '../axios-instance';

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
