import React from 'react'

import ProductCart from './ProductCart'
import Pagination from './Pagination'

const ProductContainer = () => {
  return (
    <div className='p-4 md:p-6 lg:p-8'>
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </div>
      <Pagination />
    </div>
  )
}

export default ProductContainer