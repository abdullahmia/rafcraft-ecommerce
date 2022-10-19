import React from 'react';
import { useGetAllCategoriesQuery } from '../../features/category/categoryApi';
import Category from './Category';

const Categories = () => {
    const {data: categories, isLoading} = useGetAllCategoriesQuery();

  return (
      <div class="container py-16">
          <h2 class="text-3xl font-medium text-gray-800 uppercase mb-6">
              shop by categories
          </h2>

          {
              !isLoading && <div class="grid grid-cols-3 gap-3">
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