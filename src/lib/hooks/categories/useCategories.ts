import { useEffect, useState } from 'react';
import { ApiCategory } from '../../../models/category.model';
import { findAllCategories } from '../../api/category-api';

interface ProductData {
	data: ApiCategory[];
	error: boolean;
	loading: boolean;
}

export const useCategory = (filters?: any) => {
	const [categories, setCategory] = useState<ProductData>({
		data: [],
		error: false,
		loading: true
	});

	const setData = (newData: ApiCategory[]) => {
		setCategory({ data: newData, error: false, loading: false });
	};

	const setError = () => {
		setCategory({ data: [], error: true, loading: false });
	};

	useEffect(() => {
		const controller = new AbortController();
		loadCategory(setData, setError, controller.signal);

		return () => controller.abort();
	}, []);

	return {
		categories: categories.data,
		categoriesError: categories.error,
		categoriesLoading: categories.loading
	};
};

const loadCategory = async (
	setData: (newData: ApiProduct[]) => void,
	setError: () => void,
	signal: AbortSignal
) => {
	const { categories, aborted } = await findAllCategories(signal);

	if (aborted) return;
	if (categories) setData(categories);
	else setError();
};
