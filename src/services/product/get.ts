import axios from 'axios';

export const get = async () => {
	try {
		const resp = await axios.get('http://localhost:3000/api/products');
		let products = [];

		if (!resp.data) {
			return {
				error: true,
				products: []
			};
		}
		products = await resp.data;
		return {
			products
		};
	} catch (error) {
		return {
			error: true
		};
	}
};
