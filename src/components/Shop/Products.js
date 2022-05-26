import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_DATA = [
	{
		id: 'p01',
		title: 'First Book',
		description: 'My first book',
		price: 50,
	},
	{ id: 'p02', title: 'Second Book', description: 'My second book', price: 80 },
];
const Products = props => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{DUMMY_DATA.map(data => {
					return (
						<ProductItem
							key={data.id}
							id={data.id}
							title={data.title}
							price={data.price}
							description={data.description}
						/>
					);
				})}
			</ul>
		</section>
	);
};

export default Products;
