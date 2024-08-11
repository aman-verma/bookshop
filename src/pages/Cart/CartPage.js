import { CartEmpty } from './components/CartEmpty';
import { CartList } from './components/CartList';
export const CartPage = () => {
  const cartListLength = 2;
  return <main>{cartListLength ? <CartList /> : <CartEmpty />}</main>;
};
