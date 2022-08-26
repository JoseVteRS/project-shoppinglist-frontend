import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { createProduct } from '../../../lib/api/product-api';
import { useCategory } from '../../../lib/hooks/categories/useCategories';
import { CreateProductDto } from '../../../lib/interfaces/create-product.dto';
import { ApiCategory } from '../../../models/category.model';
import Button from '../../atoms/button';

enum InputName {
	name = 'name',
	note = 'note',
	categories = 'categories'
}

type Inputs = {
	name: string;
	note: string;
	categories: string[];
};

const CreateProductForm = () => {
	const { register, handleSubmit, formState, reset } = useForm();
	const { errors } = formState;
	const { categories, categoriesError, categoriesLoading } = useCategory();

	const onSubmit: SubmitHandler<Inputs> = async data => console.log(data);
	// await createProduct(data);

	return (
		<form className='w-full' onSubmit={handleSubmit(onSubmit)}>
			<label className='mb-5 block' htmlFor={InputName.name}>
				<p className='font-medium'>Name</p>
				<input
					className='rounded-md p-3 shadow-sm shadow-gray-400/60 w-full focus'
					type='text'
					{...register(InputName.name)}
					id={InputName.name}
				/>
			</label>
			<label className='mb-5 block' htmlFor={InputName.note}>
				<p className='font-medium'>Note</p>
				<input
					className='rounded-md p-3 shadow-sm shadow-gray-400/60 w-full focus'
					type='text'
					{...register(InputName.note)}
					id={InputName.note}
				/>
			</label>
			<label className='mb-5 block' htmlFor={InputName.categories}>
				<p className='font-medium'>Category</p>
				<select
					className='rounded-md p-3 shadow-sm shadow-gray-400/60 w-full focus'
					{...register(InputName.categories)}
					id={InputName.note}
				>
					{!categoriesLoading &&
						categories &&
						categories.map((category: ApiCategory) => (
							<option key={category._id} value={category._id}>
								{category.name}
							</option>
						))}
				</select>
			</label>
			<div className='flex items-center mt-10'>
				<Button
					type='button'
					onClick={() => {
						reset(
							{
								name: '',
								note: '',
								categories: '1'
							},
							{
								keepErrors: true,
								keepDirty: true,
								keepIsSubmitted: false,
								keepTouched: false,
								keepIsValid: false,
								keepSubmitCount: false
							}
						);
					}}
					kind='tertiary'
				>
					Cancel
				</Button>
				<Button kind='primary'>Save</Button>
			</div>
		</form>
	);
};

export default CreateProductForm;
