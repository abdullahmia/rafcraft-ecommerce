import { Link } from "react-router-dom";
import productImg from "../../assets/images/products/product1.jpg";

const Product = () => {
  return (
    <div className="group rounded bg-white shadow overflow-hidden">
      {/* <!-- product image --> */}
      <div className="relative">
        <img src={productImg} className="w-full" alt="Product" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
          <Link
            to="/product-page"
            className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center"
          >
            <i className="fas fa-search"></i>
          </Link>
          <Link
            to="/product-page"
            className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center"
          >
            <i className="far fa-heart"></i>
          </Link>
        </div>
      </div>
      {/* <!-- product image end -->
                  <!-- product content --> */}
      <div className="pt-4 pb-3 px-4">
        <Link to="/product-page">
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
            Guyer chair
          </h4>
        </Link>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-roboto font-semibold">
            $45.00
          </p>
          <p className="text-sm text-gray-400 font-roboto line-through">
            $55.00
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
      <a
        href="#"
        className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
      >
        Add to Cart
      </a>
      {/* <!-- product button end --> */}
    </div>
  );
};

export default Product;
