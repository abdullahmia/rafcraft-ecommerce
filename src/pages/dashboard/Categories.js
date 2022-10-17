
import cogoToast from 'cogo-toast';
import { useState } from 'react';
import { BiEdit, BiTrash } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import AddCategoryForm from '../../components/forms/AddCategoryForm';
import DashboardWrapper from '../../components/layouts/DashboardWrapper';
import Image from '../../components/ui/Image';
import { useDeleteCategoryMutation, useGetAllCategoriesQuery } from '../../features/category/categoryApi';
import { addOnEdit } from '../../features/category/CategorySlice';

const Categories = () => {
    const [updateCategory, setUpdateCategory] = useState(null);
    const {isLoading, data: categories } = useGetAllCategoriesQuery();

    const dispatch = useDispatch();

    const [deleteCategory] = useDeleteCategoryMutation();

    // delete category handler
    const deleteHandler = (id) => {
        cogoToast.success("Category Has been deleted");
        deleteCategory(id);
    }

  return (
    <DashboardWrapper title="Categories | Dashboard">
        <div className="p-5">
            {
                isLoading ? (<>Loading...</>) : <>
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
                                          {
                                              categories?.map((category, key) => (
                                                  <tr key={key} className="bg-white border-b hover:bg-gray-50">
                                                      <td className="p-4 w-32">
                                                          <Image url={category.image} className="w-28 h-[70px]" alt="Apple Watch" />
                                                          {/* <img src={productImg} className="w-28 h-[70px]" alt="Apple Watch" /> */}
                                                      </td>
                                                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                                          {category.name}
                                                      </td>
                                                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                                          <button onClick={() => dispatch(addOnEdit(category))} className='submit-btn'>
                                                            <BiEdit />
                                                          </button>
                                                      </td>

                                                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                                          <button onClick={() => deleteHandler(category._id)} className='submit-danger-btn'>
                                                              <BiTrash />
                                                            </button>
                                                      </td>
                                                  </tr>
                                              ))
                                          }
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
                              <AddCategoryForm updateCategory={updateCategory} isEdit={updateCategory && true} />
                          </div>
                      </div>
                </>
            }
            
        </div>
    </DashboardWrapper>
  )
}

export default Categories