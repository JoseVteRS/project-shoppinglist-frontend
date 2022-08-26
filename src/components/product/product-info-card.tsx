import { useContext, useEffect, useState } from 'react';
import { findById } from '../../lib/api/product-api';
import { useProduct } from '../../lib/hooks/producs/useProduct';
import { ApiCategory } from '../../models/category.model';
import { ApiProduct } from '../../models/product.mode';
import { ProductContext } from '../products/context/product-context';

type Props = {
	product: ApiProduct;
};

const ProductInfoCard = ({ product }: Props) => {
	return (
		<div className='bg-white p-5 my-12 rounded-md shadow-md shadow-sl-blue'>
			<h3 className='font-bold mb-3'>{product?.name}</h3>
			<h4 className='mb-6'>{product?.note}</h4>
			<p>
				{product?.categories.map(item => (
					<span
						key={item._id}
						className='block bg-sl-blue text-white px-3 py-1 rounded-md w-min text-xs'
					>
						{item.name}
					</span>
				))}
			</p>
		</div>
	);
};

export default ProductInfoCard;
