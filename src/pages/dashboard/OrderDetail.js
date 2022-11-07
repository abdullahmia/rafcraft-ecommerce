import cogoToast from 'cogo-toast';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DashboardWrapper from "../../components/layouts/DashboardWrapper";
import Image from '../../components/ui/Image';
import { Cancelled, Confirmed, Delivered, NotProcessed } from '../../constant/orderStatus';
import { useGetSingleOrderQuery, useUpdateOrderMutation } from '../../features/order/orderApi';

const OrderDetail = () => {
    const [orderStatus, setOrderStatus] = useState('');
    const [orderNote, setOrderNote] = useState('');


    const { orderId } = useParams();

    const { data: order, isLoading, isSuccess } = useGetSingleOrderQuery(orderId);

    useEffect(() => {
        if (isSuccess) {
            setOrderStatus(order.orderStatus);
            setOrderNote(order.orderNote);
        }
    }, [order, isSuccess]);



    // update the order
    const [updateOrder, {isLoading: updateLoading, data, isError}] = useUpdateOrderMutation();
    const updateOrderHandler = (e) => {
        e.preventDefault();
        cogoToast.info("Order has been updated!", { position: 'top-right'});
        updateOrder({ body: { orderStatus, orderNote }, id: order._id, orderId });
    }

    useEffect(() => {
        console.log(data);
    }, [data]);

  return (
    <DashboardWrapper title="Edit Order">
         {
            isLoading ? <>Loadddingg</> : (
                  <div className="p-5">
                      <h3 className='text-xl uppercase font-semibold text-gray-700'>order</h3>
                      <div className='grid grid-cols-12 gap-5 mt-8'>
                          <div className='lg:col-span-7 col-span-12'>
                              <div className="bg-white p-4">
                                  <h2 className="text-xl text-gray-700 font-semibold">Order #{order?.orderId} Details</h2>

                                  <div className="grid lg:grid-cols-2 grid-cols-1 mt-5">
                                      <div className="space-y-2">
                                          <h3 className="text-lg font-semibold">General</h3>
                                          <p className="text-gray-600">Date Created: <span>{moment(order?.createdAt).format('LL')}</span></p>
                                          <p className="text-gray-600">Status: <span className="font-semibold">{order?.orderStatus}</span></p>
                                          <p className="text-gray-600">Customer: <span className="font-semibold">{order?.user.firstName} {order?.user.lastName}</span></p>
                                      </div>
                                      <div className="space-y-2">
                                          <h3 className="text-lg font-semibold">Billing</h3>
                                          <p className="text-gray-600">{order?.user.firstName} {order?.user.lastName}</p>
                                          <p className="text-gray-600">{order?.shippingAddress.address}</p>
                                          <p className="text-gray-600 flex flex-col">
                                              <span>Email: </span>
                                              <span className="text-blue-600 underline">{order?.shippingAddress.email}</span>
                                          </p>
                                          <p className="text-gray-600 flex flex-col">
                                              <span>Phone: </span>
                                              <span className="text-blue-600 underline">{order?.shippingAddress.number}</span>
                                          </p>
                                      </div>
                                  </div>

                              </div>
                              <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                                  <h2 className="pl-4 text-lg font-font-semibold mb-5 mt-3">Items: </h2>
                                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                          <tr>
                                              <th scope="col" className="py-3 px-6">
                                                  Image
                                              </th>
                                              <th scope="col" className="py-3 px-6">
                                                  Name
                                              </th>
                                              <th scope="col" className="py-3 px-6">
                                                  Price
                                              </th>
                                              <th scope="col" className="py-3 px-6">
                                                  Qty
                                              </th>

                                          </tr>
                                      </thead>
                                      <tbody>
                                          {
                                              order?.products?.map(({ product, quantity }, key) => (
                                                  <tr className="bg-white border-b hover:bg-gray-50">
                                                      <td className="p-4 w-32">
                                                          <Image url={product.image} className="w-28 h-[70px]" alt="Apple Watch" />
                                                      </td>
                                                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                                          {product.name}
                                                      </td>
                                                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                                          ${product.price * quantity}
                                                      </td>

                                                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                                          {quantity}
                                                      </td>
                                                  </tr>
                                              ))
                                          }


                                      </tbody>
                                  </table>
                              </div>
                          </div>

                          <div className='lg:col-span-5 col-span-12'>
                              <form onSubmit={updateOrderHandler} className="flex flex-col gap-6 shadow p-4 rounded bg-white">
                                  <h2 className='font-semibold text-gray-700'>Order Acton</h2>
                                  <div className="">
                                      <label className='text-sm text-gray-700 block mb-2'>Status <span className="text-primary">*</span></label>
                                      <select className="input-box" value={orderStatus} onChange={e => setOrderStatus(e.target.value)}>
                                          <option value={NotProcessed}>{NotProcessed}</option>
                                          <option value={Confirmed}>{Confirmed}</option>
                                          <option value={Delivered}>{Delivered}</option>
                                          <option value={Cancelled}>{Cancelled}</option>
                                      </select>
                                  </div>
                                  <div>
                                      <label className='text-sm text-gray-700 block mb-2'>Note <span className="text-primary">*</span></label>
                                      <textarea value={orderNote} onChange={e => setOrderNote(e.target.value)} className="input-box" cols="30" rows="2"></textarea>
                                  </div>
                                  <button className="submit-btn">Update Order</button>
                              </form>
                          </div>
                      </div>
                  </div>
            )
         }
        
    </DashboardWrapper>
  )
}

export default OrderDetail