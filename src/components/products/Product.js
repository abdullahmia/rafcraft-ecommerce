import cogoToast from "cogo-toast";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addToCart } from "../../features/cart/cartSlice";
import Image from "../ui/Image";

const Product = ({product = {}}) => {
  const { name, image, price, slug } = product;
  const dispatch = useDispatch();

  // add to cart
  const addCartProduct = () => {
    cogoToast.success('Product added on cart!', { position: 'bottom-right' });
    dispatch(addToCart(product));
  }

  return (
    <div className="group rounded bg-white shadow overflow-hidden">
      {/* <!-- product image --> */}
      <div className="relative">
        <Image url={image} className="w-full h-60" alt="Product" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
          <NavLink
            to={`/${slug}`}
            className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center"
          >
            <i className="fas fa-search"></i>
          </NavLink>
          <NavLink
            to={`/${slug}`}
            className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center"
          >
            <i className="far fa-heart"></i>
          </NavLink>
        </div>
      </div>
      {/* <!-- product image end -->
                  <!-- product content --> */}
      <div className="pt-4 pb-3 px-4">
        <NavLink to={`/${slug}`}>
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
            {name.slice(0, 17)}..
          </h4>
        </NavLink>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-roboto font-semibold">
            ${price}
          </p>

        </div>
        <div className="flex items-center">
          <div className="flex gap-1 text-sm text-yellow-400">
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
          </div>
          <div className="text-xs text-gray-500 ml-3">(150)</div>
        </div>
      </div>
      {/* <!-- product content end -->
                  <!-- product button --> */}
      <button
        onClick={addCartProduct}
        className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
      >
        Add to Cart
      </button>
      {/* <!-- product button end --> */}
    </div>
  );
};

export default Product;
