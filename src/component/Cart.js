import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-6 p-4">
      <h1 className="text-4xl font-bold">Cart</h1>

      <div className="w-6/12 m-auto">
        <button
          className="bg-black text-white p-2 m-2 rounded-md"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && <h1>Cart is empty.Add items to cart</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
