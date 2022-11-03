import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity, removeItem } from "../features/cart/cartSlice";
import Image from "./ui/Image";

const CartProduct = ({product = {}}) => {
  const { image, price, cartQuantity, name, _id } = product;

  const dispatch = useDispatch();
  // increment quantity
  const incrementCart = () => {
    dispatch(incrementQuantity({_id}))
  }

  // decrement quantity
  const decrementCart = () => {
    dispatch(decrementQuantity({_id}));
  }

  // remvoe product from cart
  const remvoeProductCart = () => {
    dispatch(removeItem({_id}));
  }

  return (
    <div className="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
      {/* <!-- cart image --> */}
      <div className="w-32 flex-shrink-0">
        <Image url={image} alt="product" className="w-full" />
        {/* <img src={productImg}  /> */}
      </div>
      {/* <!-- cart image end -->
                          <!-- cart content --> */}
      <div className="md:w-1/3 w-full">
        <h2 className="text-gray-800 mb-3 xl:text-xl textl-lg font-medium uppercase">
          {name}
        </h2>
        <p className="text-primary font-semibold">$ {price}</p>
        {/* <p className="text-gray-500">Size: M</p> */}
      </div>
      {/* <!-- cart content end -->
                          <!-- cart quantity --> */}
      <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300">
        <button onClick={decrementCart} disabled={cartQuantity === 0 ? true : false} className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
          -
        </button>
        <div className="h-8 w-10 flex items-center justify-center">{cartQuantity}</div>
        <div onClick={incrementCart} className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
          +
        </div>
      </div>
      {/* <!-- cart quantity end --> */}
      <div className="ml-auto md:ml-0">
        <p className="text-primary text-lg font-semibold">$ {cartQuantity * price}</p>
      </div>
      <div onClick={remvoeProductCart} className="text-gray-600 hover:text-primary cursor-pointer">
        <i className="fas fa-trash"></i>
      </div>
    </div>
  );
};

export default CartProduct;
