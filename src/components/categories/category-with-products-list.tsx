import { ApiCategory } from '../../models/category.model';
import CategoryItem from './category-item';

type Props = {
	categories: ApiCategory[];
};

const CategoryWithProductList = ({ categories }: Props) => {
	return (
		<div>
			{categories.map(({ _id, name, products }: ApiCategory) => (
				<CategoryItem key={_id} name={name} products={products} />
			))}
		</div>
	);
};

export default CategoryWithProductList;
