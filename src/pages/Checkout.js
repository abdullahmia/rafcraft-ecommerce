import Bredcrum from "../components/Bredcrum";
import Wrapper from "../components/layouts/Wrapper";

const Checkout = () => {
  return (
    <Wrapper title="Checkout | RAFCRAFT">
      <Bredcrum name="Checkout" />
      <div className="container lg:grid grid-cols-12 gap-6 items-start pt-4 pb-16">
        {/* <!-- checkout form --> */}
        <div className="lg:col-span-8 border p-4 rounded">
          <h3 className="text-lg font-medium capitalize mb-4 text-gray-800">
            Checkout
          </h3>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-gray-600 mb-2 block">
                  First Name <span className="text-primary">*</span>
                </label>
                <input type="text" className="input-box" />
              </div>
              <div>
                <label className="text-gray-600 mb-2 block">
                  last Name <span className="text-primary">*</span>
                </label>
                <input type="text" className="input-box" />
              </div>
            </div>
            <div>
              <label className="text-gray-600 mb-2 block">
                Company Name <span className="text-primary">*</span>
              </label>
              <input type="text" className="input-box" />
            </div>
            <div>
              <label className="text-gray-600 mb-2 block">
                County/Region <span className="text-primary">*</span>
              </label>
              <input type="text" className="input-box" />
            </div>
            <div>
              <label className="text-gray-600 mb-2 block">
                Street Address <span className="text-primary">*</span>
              </label>
              <input type="text" className="input-box" />
            </div>
            <div>
              <label className="text-gray-600 mb-2 block">
                Town/City <span className="text-primary">*</span>
              </label>
              <input type="text" className="input-box" />
            </div>
            <div>
              <label className="text-gray-600 mb-2 block">
                Zip Code <span className="text-primary">*</span>
              </label>
              <input type="text" className="input-box" />
            </div>
            <div>
              <label className="text-gray-600 mb-2 block">
                Phone Number <span className="text-primary">*</span>
              </label>
              <input type="text" className="input-box" />
            </div>
            <div>
              <label className="text-gray-600 mb-2 block">
                Email Address <span className="text-primary">*</span>
              </label>
              <input type="email" className="input-box" />
            </div>
          </div>
        </div>

        {/* <!-- Sidbar --> */}
        <div className="lg:col-span-4 border border-gray-200 p-4 rounded">
          <h1 className="text-gray-800 text-lg mb-4 font-medium uppercase">
            order summary
          </h1>
          <div className="space-y-2">
            <div className="flex justify-between">
              <div>
                <h5 className="text-gray-700 font-medium">
                  Italian Shape sofa
                </h5>
                <p className="text-sm text-gray-600">Size: M</p>
              </div>
              <p className="text-gray-700">x3</p>
              <p className="text-gray-700">$451</p>
            </div>
            <div className="flex justify-between">
              <div>
                <h5 className="text-gray-700 font-medium">
                  Italian Shape sofa
                </h5>
                <p className="text-sm text-gray-600">Size: M</p>
              </div>
              <p className="text-gray-700">x3</p>
              <p className="text-gray-700">$451</p>
            </div>
            <div className="flex justify-between">
              <div>
                <h5 className="text-gray-700 font-medium">
                  Italian Shape sofa
                </h5>
                <p className="text-sm text-gray-600">Size: M</p>
              </div>
              <p className="text-gray-700">x3</p>
              <p className="text-gray-700">$451</p>
            </div>
            <div className="flex justify-between">
              <div>
                <h5 className="text-gray-700 font-medium">
                  Italian Shape sofa
                </h5>
                <p className="text-sm text-gray-600">Size: M</p>
              </div>
              <p className="text-gray-700">x3</p>
              <p className="text-gray-700">$451</p>
            </div>
            <div className="flex justify-between">
              <div>
                <h5 className="text-gray-700 font-medium">
                  Italian Shape sofa
                </h5>
                <p className="text-sm text-gray-600">Size: M</p>
              </div>
              <p className="text-gray-700">x3</p>
              <p className="text-gray-700">$451</p>
            </div>
          </div>

          <div className="flex justify-between border-b border-gray-200 text-gray-700 font-medium py-3 uppercase">
            <p>Subtoal</p>
            <p>$1561</p>
          </div>
          <div className="flex justify-between border-b border-gray-200 text-gray-700 font-medium py-3 uppercase">
            <p>Shipping</p>
            <p>FREE</p>
          </div>
          <div className="flex justify-between border-gray-200 text-gray-800 font-medium py-3 uppercase">
            <p className="font-semibold">Total</p>
            <p>$1561</p>
          </div>

          <button className="mt-2 block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-medium font-roboto">
            place order
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Checkout;
