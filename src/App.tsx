import Text from './components/atoms/text';
import CategoryWithProductList from './components/categories/category-with-products-list';
import ProductInfoCard from './components/product/product-info-card';
import { ProductProvider } from './components/products/context/product-provider';
import CreateProductForm from './components/ui/forms/create-product.form';
import MainLayout from './layouts/main-layout';
import SidebarLayout from './layouts/sidebar-layout';
import { useCategory } from './lib/hooks/categories/useCategories';
import { useProduct } from './lib/hooks/producs/useProduct';
import { useProducts } from './lib/hooks/producs/useProducts';
import { ApiProduct } from './models/product.mode';

function App() {
	const { categories, categoriesError, categoriesLoading } = useCategory();

	const product = useProduct();

	if (categoriesLoading) return <p>Loading categories...</p>;

	return (
		<ProductProvider>
			<main className='flex'>
				<section className='w-9/12'>
					<MainLayout>
						<CategoryWithProductList categories={categories} />
					</MainLayout>
				</section>
				<section className='w-3/12'>
					<SidebarLayout kind='primary'>
						<CreateProductForm />
						{/* <ProductInfoCard product={product} /> */}
					</SidebarLayout>
				</section>
			</main>
		</ProductProvider>
	);
}

export default App;
