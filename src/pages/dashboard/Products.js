import { Link } from 'react-router-dom';
import productImg from '../../assets/images/products/product1.jpg';
import DashboardWrapper from "../../components/layouts/DashboardWrapper";
import DashboardProductFilter from '../../components/shop/DashboardProductFilter';

const Products = () => {
  return (
    <DashboardWrapper title="Products | Dashboard">
          <div className='mt-5 mx-5'>
              <div className='flex items-center gap-5 mb-7'>
                  <h3 className='text-xl font-semibold'>Product</h3>
                  <Link className="submit-btn" to="/dashboard/product/new">Add Product</Link>
              </div>

              {/* Product filter */}
              <DashboardProductFilter />

              <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                          <tr>
                              <th scope="col" className="py-3 px-6">
                                  Image
                              </th>
                              <th scope="col" className="py-3 px-6">
                                  Product
                              </th>
                              <th scope="col" className="py-3 px-6">
                                  Qty
                              </th>
                              <th scope="col" className="py-3 px-6">
                                  Price
                              </th>
                              <th scope="col" className="py-3 px-6">
                                  Action
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
                                  Apple Watch
                              </td>

                              <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                  $599
                              </td>
                              <td className="py-4 px-6">
                                  <Link to="" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</Link>
                              </td>
                          </tr>
                          <tr className="bg-white border-b hover:bg-gray-50">
                              <td className="p-4 w-32">
                                  <img src={productImg} className="w-28 h-[70px]" alt="Apple Watch" />
                              </td>
                              <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                  Apple Watch
                              </td>
                              <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                  Apple Watch
                              </td>

                              <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                  $599
                              </td>
                              <td className="py-4 px-6">
                                  <Link to="" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</Link>
                              </td>
                          </tr>
                          <tr className="bg-white border-b hover:bg-gray-50">
                              <td className="p-4 w-32">
                                  <img src={productImg} className="w-28 h-[70px]" alt="Apple Watch" />
                              </td>
                              <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                  Apple Watch
                              </td>
                              <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                  Apple Watch
                              </td>

                              <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                  $599
                              </td>
                              <td className="py-4 px-6">
                                  <Link to="" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</Link>
                              </td>
                          </tr>
                          <tr className="bg-white border-b hover:bg-gray-50">
                              <td className="p-4 w-32">
                                  <img src={productImg} className="w-28 h-[70px]" alt="Apple Watch" />
                              </td>
                              <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                  Apple Watch
                              </td>
                              <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                  Apple Watch
                              </td>

                              <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                  $599
                              </td>
                              <td className="py-4 px-6">
                                  <Link to="" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</Link>
                              </td>
                          </tr>

                          <tr className="bg-white border-b hover:bg-gray-50">
                              <td className="p-4 w-32">
                                  <img src={productImg} className="w-28 h-[70px]" alt="Apple Watch" />
                              </td>
                              <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                  Apple Watch
                              </td>
                              <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                  Apple Watch
                              </td>

                              <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                  $599
                              </td>
                              <td className="py-4 px-6">
                                  <Link to="" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</Link>
                              </td>
                          </tr>

                          <tr className="bg-white border-b hover:bg-gray-50">
                              <td className="p-4 w-32">
                                  <img src={productImg} className="w-28 h-[70px]" alt="Apple Watch" />
                              </td>
                              <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                  Apple Watch
                              </td>
                              <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                  Apple Watch
                              </td>

                              <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                  $599
                              </td>
                              <td className="py-4 px-6">
                                  <Link to="" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</Link>
                              </td>
                          </tr>

                      </tbody>
                  </table>


                  <div className='py-10 text-right mr-5'>
                      <button href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                          Previous
                      </button>

                      <button className="inline-flex items-center py-2 px-4 ml-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                          Next
                      </button>
                  </div>

              </div>
          </div>
          

    </DashboardWrapper>
  )
}

export default Products;