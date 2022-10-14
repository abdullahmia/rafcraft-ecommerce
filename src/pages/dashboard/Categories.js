
import productImg from '../../assets/images/products/product2.jpg';
import AddCategoryForm from '../../components/forms/AddCategoryForm';
import DashboardWrapper from '../../components/layouts/DashboardWrapper';

const Categories = () => {
  return (
    <DashboardWrapper title="Categories | Dashboard">
        <div className="p-5">
            <h3 className='text-xl uppercase font-semibold text-gray-700'>categories</h3>

            <div className='grid grid-cols-12 gap-5 mt-8'>
                <div className='lg:col-span-7 col-span-12'>
                      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
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
                                          Update
                                      </th>
                                      <th scope="col" className="py-3 px-6">
                                          Delete
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
                                          <button className='submit-btn'>Update</button>
                                      </td>

                                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                          <button className='submit-danger-btn'>Delete</button>
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
                                          <button className='submit-btn'>Update</button>
                                      </td>

                                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                          <button className='submit-danger-btn'>delete</button>
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
                                          <button className='submit-btn'>Update</button>
                                      </td>

                                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                          <button className='submit-danger-btn'>delete</button>
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
                                          <button className='submit-btn'>Update</button>
                                      </td>

                                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                          <button className='submit-danger-btn'>delete</button>
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
                                          <button className='submit-btn'>Update</button>
                                      </td>

                                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                          <button className='submit-danger-btn'>delete</button>
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
                                          <button className='submit-btn'>Update</button>
                                      </td>

                                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                          <button className='submit-danger-btn'>delete</button>
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

                <div className='lg:col-span-5 col-span-12'>
                    <AddCategoryForm />
                </div>
            </div>
        </div>
    </DashboardWrapper>
  )
}

export default Categories