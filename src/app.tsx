import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { RecoilRoot } from 'recoil'

import { Layout } from '@components/layout'

import Home from '@pages/home'
import Product from '@pages/product'
import Order from '@pages/order'

import { menuRoutes } from './constants/routes'

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout menus={menuRoutes} />}>
            <Route index element={<Home />} />
            <Route path="product/*" element={<Product />} />
            <Route path="order/*" element={<Order />} />
          </Route>
          <Route path="*" element={<div>route not found</div>} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
