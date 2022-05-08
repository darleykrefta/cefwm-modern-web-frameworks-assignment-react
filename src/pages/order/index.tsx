import { Loading } from '@components/loading'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { OrderCreate } from './order-create'

const Order = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<Loading />}>
            <OrderCreate />
          </React.Suspense>
        }
      />
    </Routes>
  )
}

export default Order
