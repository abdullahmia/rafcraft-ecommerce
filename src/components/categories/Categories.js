import React from 'react';
import { useGetAllCategoriesQuery } from '../../features/category/categoryApi';
import CategoryLoaders from '../loaders/CategoryLoaders';
import Category from './Category';

const Categories = () => {
    const {data: categories, isLoading} = useGetAllCategoriesQuery();

  return (
      <div className="container py-16">
        {
              isLoading ? <CategoryLoaders /> : (<>
                  <h2 className="text-3xl font-medium text-gray-800 uppercase mb-6">
                      shop by categories
                  </h2>

                  {
                      !isLoading && <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
                          {
                              categories?.map((category, key) => (
                                  <Category key={key} category={category} />
                              ))
                          }
                      </div>
                  }
              </>)
        }

      </div>
  )
}

export default Categories;