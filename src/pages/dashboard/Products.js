import { BiEdit, BiTrash } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import DashboardWrapper from "../../components/layouts/DashboardWrapper";
import DashboardProductFilter from '../../components/shop/DashboardProductFilter';
import Image from '../../components/ui/Image';
import { useDeleteProductMutation, useGetAllProductsQuery } from '../../features/product/productApi';

const Products = () => {
    const { data: products } = useGetAllProductsQuery();

    // delete products
    const [deleteProduct] = useDeleteProductMutation();

    const deleteProductHandler = (slug) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Deleted!', "Prouct has been deleted!", 'success');
                deleteProduct(slug)
            }
        })
        
    }

  return (
    <DashboardWrapper title="Products | Dashboard">
          <div className='mt-5 mx-5'>
              <div className='flex items-center gap-5 mb-7'>
                  <h3 className='text-xl font-semibold'>Product</h3>
                  <Link className="submit-btn" to="/admin/product/new">Add Product</Link>
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
                                  Category
                              </th>
                              <th scope="col" className="py-3 px-6">
                                  SKU
                              </th>
                              <th scope="col" className="py-3 px-6">
                                  Brand
                              </th>
                              <th scope="col" className="py-3 px-6">
                                  Price
                              </th>
                              <th scope="col" className="py-3 px-6">
                                  Status
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
                            products?.map((product, key) => (
                                <tr key={key} className="bg-white border-b hover:bg-gray-50">
                                    <td className="p-4 w-32">
                                        <Image url={product.image} className="w-28 h-[70px]" alt="Apple Watch" />
                                    </td>
                                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                        {product.name}
                                    </td>
                                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                        {product.category.name}
                                    </td>

                                    <td className="py-4 px-6 font-semibold text-gray-900 uppercase">
                                        {product.sku}
                                    </td>
                                    <td className="py-4 px-6 font-semibold text-gray-900 uppercase">
                                        {product.brand}
                                    </td>
                                    <td className="py-4 px-6 font-semibold text-gray-900 uppercase">
                                        $ {product.price}
                                    </td>
                                    <td className="py-4 px-6 font-semibold text-gray-900 uppercase">
                                        {product.status ? 'Published' : 'Draft'}
                                    </td>
                                    <td className="py-4 px-6 font-semibold text-gray-900 uppercase">
                                        <Link className="font-medium hover:underline" to={`/admin/product/${product.slug}`}><BiEdit className='text-green-500 text-lg' /></Link>
                                    </td>
                                    <td className="py-4 px-6">
                                        <button onClick={() => deleteProductHandler(product.slug)} className="font-medium hover:underline">
                                            <BiTrash className='text-red-500 text-lg' />
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
          

    </DashboardWrapper>
  )
}

export default Products;