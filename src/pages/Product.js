import cogoToast from "cogo-toast";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import productImg from "../assets/images/products/product1.jpg";
import Bredcrum from "../components/Bredcrum";
import Wrapper from "../components/layouts/Wrapper";
import ProductPageLoader from "../components/loaders/ProductPageLoader";
import Products from "../components/products/Products";
import Image from "../components/ui/Image";
import { addToCart } from "../features/cart/cartSlice";
import { useGetSingleProductQuery } from "../features/product/productApi";

const Product = () => {
  const {slug} = useParams();
  const navigate = useNavigate();

  const { data: product, isError, isLoading } = useGetSingleProductQuery(slug);
  
  if (isError) {
    navigate('/404');
  }

  const dispatch = useDispatch();

  // add to cart
  const addCartProduct = () => {
    cogoToast.success('Product added on cart!', { position: 'bottom-right'});
    dispatch(addToCart(product));
  }

  return (
    <Wrapper title="Product Page">
      {
        isLoading ? (<>
          <ProductPageLoader />
        </>) : (
          <>
              <Bredcrum name={"Shop"} name2="Product Name" />
              <div className="container pt-4 pb-6 grid lg:grid-cols-2 gap-6">
                <div>
                  <div>
                    <Image
                      id="main-img"
                      url={product?.image}
                      className="w-full h-[500px] object-contain"
                      alt="Product"
                    />
                  </div>
                  <div className="grid grid-cols-5 gap-4 mt-4">
                    <div>
                      <img
                        src={productImg}
                        className="single-img w-full cursor-pointer border border-primary"
                        alt="Product"
                      />
                    </div>
                    <div>
                      <img
                        src={productImg}
                        className="single-img w-full cursor-pointer border"
                        alt="Product"
                      />
                    </div>
                    <div>
                      <img
                        src={productImg}
                        className="single-img w-full cursor-pointer border"
                        alt="Product"
                      />
                    </div>
                    <div>
                      <img
                        src={productImg}
                        className="single-img w-full cursor-pointer border"
                        alt="Product"
                      />
                    </div>
                    <div>
                      <img
                        src={productImg}
                        className="single-img w-full cursor-pointer border"
                        alt="Product"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="md:text-3xl text-2xl font-medium uppercase mb-2">
                    Italian L Shape Sofa
                  </h2>
                  <div className="flex items-center mb-4">
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
                    <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div> 
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-800 font-semibold space-x-2">
                      <span>Availability: </span>
                      {
                        product.availability > 0 ? <span className="text-green-600">In Stock</span> : <span className="text-red-600">Out of Stock</span>
                      }
                    </p>
                    <p className="space-x-2">
                      <span className="text-gray-800 font-semibold">Brand: </span>
                      <span className="text-gray-600">{product.brand}</span>
                    </p>
                    <p className="space-x-2">
                      <span className="text-gray-800 font-semibold">Category: </span>
                      <span className="text-gray-600">{product.category.name}</span>
                    </p>
                    <p className="space-x-2">
                      <span className="text-gray-800 font-semibold">SKU: </span>
                      <span className="text-gray-600">{product.sku}</span>
                    </p>
                  </div>
                  <div className="mt-4 flex items-baseline gap-3">
                    <span className="text-primary font-semibold text-xl">${product.price}</span>
                  </div>
                  <p className="mt-4 text-gray-600">
                    {product.shortDescription}
                  </p>
                  <div className="mt-4">
                    <h3 className="text-base text-gray-800 mb-1">Size</h3>
                    <div className="flex items-center gap-2">
                      {/* <!-- single size --> */}
                      <div className="size-selector">
                        <input
                          type="radio"
                          name="size"
                          className="hidden"
                          id="size-xs"
                        />
                        <label
                          for="size-xs"
                          className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                        >
                          XS
                        </label>
                      </div>

                      <div className="size-selector">
                        <input
                          type="radio"
                          name="size"
                          className="hidden"
                          id="size-s"
                        />
                        <label
                          for="size-s"
                          className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                        >
                          S
                        </label>
                      </div>

                      <div className="size-selector">
                        <input
                          type="radio"
                          name="size"
                          className="hidden"
                          id="size-m"
                          checked
                        />
                        <label
                          for="size-m"
                          className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                        >
                          M
                        </label>
                      </div>

                      <div className="size-selector">
                        <input
                          type="radio"
                          name="size"
                          className="hidden"
                          id="size-l"
                        />
                        <label
                          for="size-l"
                          className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                        >
                          L
                        </label>
                      </div>

                      <div className="size-selector">
                        <input
                          type="radio"
                          name="size"
                          className="hidden"
                          id="size-xl"
                        />
                        <label
                          for="size-xl"
                          className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                        >
                          XL
                        </label>
                      </div>
                      {/* <!-- single size end --> */}
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-base text-gray-800 mb-1">Color</h3>
                    <div className="flex items-center gap-2">
                      <div className="color-selector">
                        <input
                          type="radio"
                          name="color"
                          className="hidden"
                          id="color-red"
                          checked
                        />
                        <label
                          for="color-red"
                          style={{ backgroundColor: "#fc3d57" }}
                          className="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm"
                        ></label>
                      </div>

                      <div className="color-selector">
                        <input
                          type="radio"
                          name="color"
                          className="hidden"
                          id="color-white"
                        />
                        <label
                          for="color-white"
                          style={{ backgroundColor: "#fff" }}
                          className="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm"
                        ></label>
                      </div>

                      <div className="color-selector">
                        <input
                          type="radio"
                          name="color"
                          className="hidden"
                          id="color-black"
                        />
                        <label
                          for="color-black"
                          style={{ backgroundColor: "#000" }}
                          className="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm"
                        ></label>
                      </div>
                      {/* <!-- single color end --> */}
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-base text-gray-800 mb-1">Quantity</h3>
                    <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                      <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                        -
                      </div>
                      <div className="h-8 w-10 flex items-center justify-center">4</div>
                      <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                        +
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 border-b border-gray-200 pb-5 mt-6">
                    <button
                      onClick={addCartProduct}
                      className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase 
                    hover:bg-transparent hover:text-primary transition text-sm flex items-center"
                    >
                      <span className="mr-2">
                        <i className="fas fa-shopping-bag"></i>
                      </span>{" "}
                      Add to cart
                    </button>
                    <a
                      href="#"
                      className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase 
                    hover:bg-transparent hover:text-primary transition text-sm"
                    >
                      <span className="mr-2">
                        <i className="far fa-heart"></i>
                      </span>{" "}
                      Wishlist
                    </a>
                  </div>

                  <div className="flex space-x-3 mt-4">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                  {/* <!-- product share icons end --> */}
                </div>
              </div>
              <div className="container pb-16">
                {/* <!-- detail buttons --> */}
                <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
                  Product Details
                </h3>
                {/* <!-- details button end --> */}

                {/* <!-- details content --> */}
                <div className="lg:w-4/5 xl:w-3/5 pt-6">
                  <div dangerouslySetInnerHTML={{ __html: product?.description }}>
                  </div>
                </div>
                {/* <!-- details content end --> */}
              </div>
              <div>
                <Products title="Related products" />
              </div>
          </>
        )
      }
      
    </Wrapper>
  );
};

export default Product;
