import Text from './components/atoms/text';
import CategoryWithProductList from './components/categories/category-with-products-list';
import MainLayout from './layouts/main-layout';
import SidebarLayout from './layouts/sidebar-layout';
import { useCategory } from './lib/hooks/categories/useCategories';
import { useProducts } from './lib/hooks/producs/useProducts';
import { ApiProduct } from './models/product.mode';

function App() {
	const { products, productsError, productsLoading } = useProducts();
	const { categories, categoriesError, categoriesLoading } = useCategory();

	if (productsLoading) return <p>Loading products...</p>;
	if (categoriesLoading) return <p>Loading categories...</p>;

	return (
		<main className='flex'>
			<section className='w-9/12'>
				<MainLayout>
					<CategoryWithProductList categories={categories} />
				</MainLayout>
			</section>
			<section className='w-3/12'>
				<SidebarLayout kind='primary'>HOLA</SidebarLayout>
			</section>
		</main>
	);
}

export default App;
