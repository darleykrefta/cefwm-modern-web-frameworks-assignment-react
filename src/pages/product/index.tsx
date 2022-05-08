import { Loading } from '@components/loading'
import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProductCreate } from './product-create'
import { ProductEdit } from './product-edit'
import { ProductList } from './product-list'

const Product = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<Loading />}>
            <ProductList />
          </React.Suspense>
        }
      />
      <Route path="new" element={<ProductCreate />} />
      <Route
        path=":productId"
        element={
          <React.Suspense fallback={<Loading />}>
            <ProductEdit />
          </React.Suspense>
        }
      />
    </Routes>
  )
}

export default Product
