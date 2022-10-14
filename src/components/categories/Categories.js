import React from 'react'
import Category from './Category'

const Categories = () => {
  return (
      <div class="container py-16">
          <h2 class="text-3xl font-medium text-gray-800 uppercase mb-6">
              shop by categories
          </h2>

          <div class="grid grid-cols-3 gap-3">
              <Category />
              <Category />
              <Category />
              <Category />
              <Category />
              <Category />
          </div>
      </div>
  )
}

export default Categories