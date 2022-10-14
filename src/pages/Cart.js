import Bredcrum from "../components/Bredcrum";
import CartProduct from "../components/CartProduct";
import Wrapper from "../components/layouts/Wrapper";

const Cart = () => {
  return (
    <Wrapper title="Cart | RAFCRAFT">
      <Bredcrum name="Cart" />
      <div className="container lg:grid grid-cols-12 gap-6 items-start pb-16 pt-4">
        {/* !-- product cart --> */}
        <div className="xl:col-span-9 lg:col-span-8">
          {/* <!-- cart title --> */}
          <div className="bg-gray-200 py-2 pl-12 pr-20 xl:pr-28 mb-4 hidden md:flex">
            <p className="text-gray-600 text-center">Product</p>
            <p className="text-gray-600 text-center ml-auto mr-16 xl:mr-24">
              Quantity
            </p>
            <p className="text-gray-600 text-center">Total</p>
          </div>
          {/* <!-- cart title end --> */}

          {/* <!-- shipping carts --> */}
          <div className="space-y-4">
            {/* <!-- single cart --> */}
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
          </div>
          {/* <!-- shipping carts end --> */}
        </div>

        <div className="xl:col-span-3 lg:col-span-4 border border-gray-200 px-4 py-4 rounded mt-6 lg:mt-0">
          <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
            ORDER SUMMARY
          </h4>
          <div className="space-y-1 text-gray-600 pb-3 border-b border-gray-200">
            <div className="flex justify-between font-medium">
              <p>Subtotal</p>
              <p>$320</p>
            </div>
            <div className="flex justify-between">
              <p>Delivery</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between">
              <p>Tax</p>
              <p>Free</p>
            </div>
          </div>
          <div className="flex justify-between my-3 text-gray-800 font-semibold uppercase">
            <h4>Total</h4>
            <h4>$320</h4>
          </div>

          {/* <!-- searchbar --> */}
          <div className="flex mb-5">
            <input
              type="text"
              className="pl-4 w-full border border-r-0 border-primary py-2 px-3 rounded-l-md focus:ring-primary focus:border-primary text-sm"
              placeholder="Coupon"
            />
            <button
              type="submit"
              className="bg-primary border border-primary text-white px-5 font-medium rounded-r-md hover:bg-transparent hover:text-primary transition text-sm font-roboto"
            >
              Apply
            </button>
          </div>
          {/* <!-- searchbar end --> */}

          {/* <!-- checkout --> */}
          <a
            href="checkout.html"
            className="bg-primary border border-primary text-white px-4 py-3 font-medium rounded-md uppercase hover:bg-transparent
             hover:text-primary transition text-sm w-full block text-center"
          >
            Process to checkout
          </a>
          {/* <!-- checkout end --> */}
        </div>
      </div>
    </Wrapper>
  );
};

export default Cart;
