import React from 'react';
import { useGetAllCategoriesQuery } from '../../features/category/categoryApi';
import Category from './Category';

const Categories = () => {
    const {data: categories, isLoading} = useGetAllCategoriesQuery();

  return (
      <div className="container py-16">
          <h2 className="text-3xl font-medium text-gray-800 uppercase mb-6">
              shop by categories
          </h2>

          {
              !isLoading && <div className="grid grid-cols-3 gap-3">
                  {
                      categories.map((category, key) => (
                          <Category key={key} category={category} />
                      ))
                  }
              </div>
          }

          
      </div>
  )
}

export default Categories;