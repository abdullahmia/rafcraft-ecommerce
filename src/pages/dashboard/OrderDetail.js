import productImg from '../../assets/images/products/product11.jpg';
import DashboardWrapper from "../../components/layouts/DashboardWrapper";

const OrderDetail = () => {
    // const { orderId } = useParams();
    
  return (
    <DashboardWrapper title="Edit Order">
        <div className="p-5">
            <h3 className='text-xl uppercase font-semibold text-gray-700'>order</h3>
              <div className='grid grid-cols-12 gap-5 mt-8'>
                  <div className='lg:col-span-7 col-span-12'>
                        <div className="bg-white p-4">
                            <h2 className="text-xl text-gray-700 font-semibold">Order #3432 Details</h2>

                            <div className="grid lg:grid-cols-2 grid-cols-1 mt-5">
                                <div className="space-y-2">
                                    <h3 className="text-lg font-semibold">General</h3>
                                    <p className="text-gray-600">Date Created: <span>2022-02-30</span></p>
                                    <p className="text-gray-600">Status: <span className="font-semibold">Completed</span></p>
                                     <p className="text-gray-600">Customer: <span className="font-semibold">Salman Mia</span></p>
                                </div>
                              <div className="space-y-2">
                                  <h3 className="text-lg font-semibold">Billing</h3>
                                  <p className="text-gray-600">Salman Mia</p>
                                  <p className="text-gray-600">Dhanmondi 32, Dhaka 1209 Bangladesh</p>
                                  <p className="text-gray-600 flex flex-col">
                                    <span>Email: </span>
                                    <span className="text-blue-600 underline">salman@gmail.com</span>
                                  </p>
                                  <p className="text-gray-600 flex flex-col">
                                      <span>Phone: </span>
                                      <span className="text-blue-600 underline">+8801775748710</span>
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
                                  <tr className="bg-white border-b hover:bg-gray-50">
                                      <td className="p-4 w-32">
                                          <img src={productImg} className="w-28 h-[70px]" alt="Apple Watch" />
                                      </td>
                                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                          Apple Watch
                                      </td>
                                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                          $89
                                      </td>

                                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                          3
                                      </td>
                                  </tr>

                              </tbody>
                          </table>
                      </div>
                  </div>

                  <div className='lg:col-span-5 col-span-12'>
                      <div className="flex flex-col gap-6 shadow p-4 rounded bg-white">
                        <h2 className='font-semibold text-gray-700'>Order Acton</h2>
                        <div className="">
                            <label className='text-sm text-gray-700 block mb-2'>Status <span className="text-primary">*</span></label>
                             <select className="input-box">
                                <option value="in-progress">In progress</option>
                                <option value="cancele">Cancele</option>
                                <option value="Complete">complete</option>
                             </select>
                        </div>
                        <div>
                            <label className='text-sm text-gray-700 block mb-2'>Note <span className="text-primary">*</span></label>
                             <textarea className="input-box" cols="30" rows="2"></textarea>
                        </div>
                        <button className="submit-btn">Update Order</button>
                    </div>
                  </div>
              </div>
        </div>
    </DashboardWrapper>
  )
}

export default OrderDetail