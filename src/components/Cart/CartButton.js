import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';
const CartButton = props => {
	const dispatch = useDispatch();
	const showCartHandler = () => {
		dispatch(uiActions.showCart());
	};
	const totalQuantity = useSelector(state => state.cart.totalQuantity);
	return (
		<button className={classes.button} onClick={showCartHandler}>
			<span>My Cart</span>
			<span className={classes.badge}>{totalQuantity}</span>
		</button>
	);
};

export default CartButton;
