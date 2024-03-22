import { addCart, removeCart } from "@src/reducer/cartSlice";
import { AppDispatch, RootState } from "@src/store";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch: AppDispatch = useDispatch();
  const carts = useSelector((state: RootState) => state.cart.carts);

  const handleAddCart = () => {
    dispatch(addCart({ id: Math.random(), cartName: "New cart" }));
  };

  const handleRemoveCart = (id: number) => {
    dispatch(removeCart(id));
  };
  return (
    <div>
      <h2 className="text-3xl text-red-600 font-bold mb-8">Manage Cart</h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddCart}
      >
        Add cart
      </button>
      <ul className="w-[300px]">
        {carts.map((cart) => (
          <li
            key={cart.id}
            className="flex justify-between items-center mt-8 mx-8"
          >
            <p className="text-2xl text-pink-400">{cart.cartName}</p>

            <div>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded"
                onClick={() => handleRemoveCart(cart.id)}
              >
                Remove cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
