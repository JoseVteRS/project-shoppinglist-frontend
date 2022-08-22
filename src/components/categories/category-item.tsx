import { ApiProduct } from '../../models/product.mode';
import ProductSelector from '../products/product-selector';

type Props = {
	name: string;
	products: ApiProduct[];
};

const CategoryItem = ({ name, products }: Props) => {
	return (
		<>
			<div className='mb-12'>
				<h2 className='font-bold text-xl mb-4 text-gray-700'>{name}</h2>

				<div className='flex flex-wrap w-full gap-5'>
					{products?.map((product: ApiProduct) => (
						<ProductSelector key={product._id} product={product} />
					))}
				</div>
			</div>
		</>
	);
};

export default CategoryItem;
