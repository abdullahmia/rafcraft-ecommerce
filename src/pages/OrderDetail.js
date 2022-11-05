import moment from 'moment';
import { Link, useParams } from "react-router-dom";
import AccountWrapper from "../components/layouts/AccountWrapper";
import Wrapper from "../components/layouts/Wrapper";
import { useGetSingleOrderQuery } from "../features/order/orderApi";

const OrderDetail = () => {
    const { orderId } = useParams();

    // get order data
    const { data: order, isLoading } = useGetSingleOrderQuery(orderId);
  return (
    <Wrapper title="Order Details">
        <AccountWrapper>
            {
                  isLoading ? "Loading...." : <div className="col-span-9 overflow-x-auto relative shadow sm:rounded-lg">
                      <h3 className="text-sm p-5 text-gray-700 font-roboto mb-4 tracking-wide">
                          Order <span className="bg-yellow-300">#{orderId}</span> was placed on <span className="bg-yellow-300">{moment(order.createdAt).format("MMM Do YY")}</span> and is currently <span className="bg-yellow-300">{order?.orderStatus}</span>.
                      </h3>

                      <div>
                          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                              <table className="w-full text-sm text-left text-gray-500">
                                  <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white">
                                      Order Details

                                  </caption>
                                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                      <tr>
                                          <th scope="col" className="py-3 px-6">
                                              Product name
                                          </th>
                                          <th scope="col" className="py-3 px-6">
                                              Total
                                          </th>

                                      </tr>
                                  </thead>
                                  <tbody>
                                    {
                                          order?.products.map(({ product, quantity }, key) => (
                                            <tr className="bg-white border-b">
                                                <th scope="row" className="py-4 px-6 font-normal text-gray-900 whitespace-nowrap">
                                                    <Link to={`/${product._id}`} className="text-primary">
                                                          {product.name}
                                                    </Link>
                                                </th>
                                                <td className="py-4 px-6">
                                                    {product.price * quantity}
                                                </td>
                                            </tr>
                                        ))
                                    }
                                      <tr className="bg-white border-b">
                                          <th scope="row" className="py-4 px-6 font-normal text-gray-900 whitespace-nowrap ">
                                              Payment Method
                                          </th>
                                          <td className="py-4 px-6">
                                              {order.paymentType}
                                          </td>
                                      </tr>
                                      <tr className="bg-white border-b">
                                          <th scope="row" className="py-4 px-6 font-normal text-gray-900 whitespace-nowrap">
                                              Total
                                          </th>
                                          <td className="py-4 px-6">
                                              {order.amount}
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>

                              <div className="p-5">
                                <h2 className="text-gray-700 text-md">Billing address</h2>
                                <div className="mt-4 space-y-1">
                                      <p className="text-gray-500 text-sm">{order?.user?.firstName} {order?.user?.lastName} </p>
                                    <p className="text-gray-500 text-sm">{order?.shippingAddress?.address}</p>
                                    <p className="text-gray-500 text-sm">{order?.shippingAddress?.city}</p>
                                    <p className="text-gray-500 text-sm">{order?.shippingAddress?.zipCode}</p>
                                    <p className="text-gray-500 text-sm">{order?.shippingAddress?.country}</p>
                                    <p className="text-gray-500 text-sm">{order?.shippingAddress?.number}</p>
                                    <p className="text-gray-500 text-sm">{order?.shippingAddress?.email}</p>
                                </div>
                              </div>
                          </div>

                      </div>
                  </div>
            }
            
        </AccountWrapper>
    </Wrapper>
  )
}

export default OrderDetail