import { useDispatch, useSelector } from 'react-redux';

import { CartEmpty } from './components/CartEmpty';
import { CartList } from './components/CartList';

export const CartPage = () => {
  const cartList = useSelector((state) => state.cartState.cartList);
  return <main>{cartList.length ? <CartList /> : <CartEmpty />}</main>;
};
