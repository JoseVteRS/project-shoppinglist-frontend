import { axiosInstance } from '../axios-instance';

const ENDPOINT = 'categories';

export const findAllCategories = async (signal: AbortSignal) => {
	try {
		const res = await axiosInstance.get(ENDPOINT, { signal });

		let categories = [];

		if (res.statusText === 'OK') categories = await res.data;

		return {
			categories,
			error: !(res.statusText === 'OK'),
			aborted: false
		};
	} catch (error: any) {
		const isAborted = error.name === 'AbortError';

		return {
			categories: undefined,
			error: !isAborted,
			aborted: isAborted
		};
	}
};
