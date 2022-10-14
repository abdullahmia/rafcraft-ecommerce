import productImg from "../assets/images/products/product1.jpg";

const WishListProduct = () => {
  return (
    <div className="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
      {/* <!-- cart image --> */}
      <div className="w-28 flex-shrink-0">
        <img src={productImg} alt="product" className="w-full" />
      </div>

      <div className="md:w-1/3 w-full">
        <h2 className="text-gray-800 mb-1 xl:text-xl textl-lg font-medium uppercase">
          Italian L Shape Sofa
        </h2>
        <p className="text-gray-500 text-sm">
          Availability: <span className="text-green-600">In Stock</span>
        </p>
      </div>
      {/* <!-- cart content end --> */}
      <div className="">
        <p className="text-primary text-lg font-semibold">$320.00</p>
      </div>
      <button
        href="#"
        className="ml-auto md:ml-0 block px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
      >
        Add to cart
      </button>
      <div className="text-gray-600 hover:text-primary cursor-pointer">
        <i className="fas fa-trash"></i>
      </div>
    </div>
  );
};

export default WishListProduct;
