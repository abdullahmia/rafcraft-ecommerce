import cogoToast from 'cogo-toast';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Bredcrum from "../components/Bredcrum";
import CartEmpty from "../components/empty/CartEmpty";
import Wrapper from "../components/layouts/Wrapper";
import CheckoutLoader from '../components/loaders/CheckoutLoader';
import { useGetAddressQuery } from "../features/address/addressApi";
import { clearCart } from "../features/cart/cartSlice";
import { useAddOrderMutation } from "../features/order/orderApi";

const Checkout = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [compnay, setCompnay] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [customerNote, setCustomerNote] = useState('');
  const [paymentType, setpaymentType] = useState('Bank Transfer');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  const {products, totalPrice} = useSelector((state) => state.cart);

  const { data: userAddresses, isLoading: addressLoading } = useGetAddressQuery(user.id);

  useEffect(() => {
    if (userAddresses) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setCompnay(userAddresses.companyName);
      setCountry(userAddresses.country);
      setAddress(userAddresses.address);
      setCity(userAddresses.city);
      setZipCode(userAddresses.zipCode);
      setNumber(userAddresses.phone);
      setEmail(user.email);
    }
  }, [userAddresses, user]);


  // add order
  const [addOrder, { isLoading, isSuccess, data: orderSuccess }] = useAddOrderMutation();

  let cartProduct = [];
  products.map((product) => cartProduct.push({product: product._id, quantity: product.cartQuantity}));

  const addOrderHandler = (e) => {
    e.preventDefault();
    addOrder({ products: cartProduct, paymentType, shippingAddress: { country, address, city, zipCode, number, email }, amount: totalPrice, customerNote, _id: user.id })
  }

  useEffect(() => {
    if (isSuccess) {
      if (orderSuccess.orderd) {
        dispatch(clearCart());
        cogoToast.success(orderSuccess.message);
        navigate(`/order-complete/${orderSuccess.order.orderId}`)
      }
    }
  }, [isSuccess, orderSuccess, dispatch, navigate]);

  
  return (
    <Wrapper title="Checkout | RAFCRAFT">
      
      <Bredcrum name="Checkout" />
      {
        products?.length === 0 ? <CartEmpty /> : (
          <>
            {
              addressLoading ? <CheckoutLoader /> : <div className="container lg:grid grid-cols-12 gap-6 items-start pt-4 pb-16">
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
                        <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} className="input-box" required />
                      </div>
                      <div>
                        <label className="text-gray-600 mb-2 block">
                          last Name <span className="text-primary">*</span>
                        </label>
                        <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} className="input-box" required />
                      </div>
                    </div>
                    <div>
                      <label className="text-gray-600 mb-2 block">
                        Company Name
                      </label>
                      <input type="text" value={compnay} onChange={e => setCompnay(e.target.value)} className="input-box" />
                    </div>
                    <div>
                      <label className="text-gray-600 mb-2 block">
                        County/Region <span className="text-primary">*</span>
                      </label>
                      <input type="text" value={country} onChange={e => setCountry(e.target.value)} className="input-box" required />
                    </div>
                    <div>
                      <label className="text-gray-600 mb-2 block">
                        Street Address <span className="text-primary">*</span>
                      </label>
                      <input type="text" value={address} onChange={e => setAddress(e.target.value)} className="input-box" required />
                    </div>
                    <div>
                      <label className="text-gray-600 mb-2 block">
                        Town/City <span className="text-primary">*</span>
                      </label>
                      <input type="text" value={city} onChange={e => setCity(e.target.value)} className="input-box" required />
                    </div>
                    <div>
                      <label className="text-gray-600 mb-2 block">
                        Zip Code <span className="text-primary">*</span>
                      </label>
                      <input type="text" value={zipCode} onChange={e => setZipCode(e.target.value)} className="input-box" required />
                    </div>
                    <div>
                      <label className="text-gray-600 mb-2 block">
                        Phone Number <span className="text-primary">*</span>
                      </label>
                      <input type="text" value={number} onChange={e => setNumber(e.target.value)} className="input-box" required />
                    </div>
                    <div>
                      <label className="text-gray-600 mb-2 block">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="input-box" required />
                    </div>
                    <div>
                      <label className="text-gray-600 mb-2 block">
                        Note <span className="text-primary"></span>
                      </label>
                      <textarea type="email" value={customerNote} onChange={e => setCustomerNote(e.target.value)} className="input-box" />
                    </div>
                  </div>
                </div>

                {/* <!-- Sidbar --> */}
                <div className="lg:col-span-4 border border-gray-200 p-4 rounded">
                  <h1 className="text-gray-800 text-lg mb-4 font-medium uppercase">
                    order summary
                  </h1>
                  <div className="space-y-2 divide-y">
                    {
                      products.map((product, key) => (
                        <div key={key} className="flex justify-between py-1">
                          <div>
                            <h5 className="text-gray-700 font-medium">
                              {product.name}
                            </h5>
                            {/* <p className="text-sm text-gray-600">Size: M</p> */}
                          </div>
                          <p className="text-gray-700">x {product.cartQuantity}</p>
                          <p className="text-gray-700">$ {product.price * product.cartQuantity}</p>
                        </div>
                      ))
                    }

                  </div>

                  <div className="flex justify-between border-b border-gray-200 text-gray-700 font-medium py-3 uppercase">
                    <p>Subtoal</p>
                    <p>${totalPrice}</p>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 text-gray-700 font-medium py-3 uppercase">
                    <p>Shipping</p>
                    <p>FREE</p>
                  </div>
                  <div className="flex justify-between border-gray-200 text-gray-800 font-medium py-3 uppercase">
                    <p className="font-semibold">Total</p>
                    <p>$ {totalPrice}</p>
                  </div>

                  <div>
                    <label className="text-gray-600 mb-2 block">
                      Payment method <span className="text-primary"></span>
                    </label>
                    <select value={paymentType} onChange={e => setpaymentType(e.target.value)} className="input-box">
                      <option value="Bank Transfer">Bank Transfer</option>
                      <option value="Debit Card">Debit Card</option>
                      <option value="Cash on delivery">Cash on delivery</option>
                    </select>
                  </div>

                  <button onClick={addOrderHandler} disabled={isLoading} className="mt-2 block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-medium font-roboto">
                    place order
                  </button>
                </div>
              </div>
            }
          </>
        )
      }
    </Wrapper>
  );
};

export default Checkout;
