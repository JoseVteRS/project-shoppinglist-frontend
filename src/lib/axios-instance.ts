import axios from 'axios';

export const axiosInstance = axios.create({
	baseURL: 'http://localhost:5000/api/',
	timeout: 3000,
	headers: {
		Shoppinglist: 'shopping-list'
	}
});
