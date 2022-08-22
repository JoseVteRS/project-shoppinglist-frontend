import React from 'react';
import { ApiProduct } from '../../models/product.mode';

type Props = {
	product: ApiProduct;
};

const ProductSelector = ({ product }: Props) => {
	const { _id, name } = product;
	return (
		<div className='shadow shadow-slate-600/40 bg-white rounded-md w-52 flex items-start justify-between overflow-hidden'>
			<p className='p-2 text-lg font-medium'>{name}</p>
			<button
				className='bg-yellow-500 font-bold text-lg text-white hover:bg-yellow-600 h-full p-3'
				onClick={() => console.log(_id)}
			>
				+
			</button>
		</div>
	);
};

export default ProductSelector;
