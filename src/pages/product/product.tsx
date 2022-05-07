import React from 'react'
import { Header } from '@components'

import { ProductModalCreate } from './product-modal-create'
import { ProductList } from './product-list'
import { ProductsProvider } from '@hooks/useProducts'

const ProductPage = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  const handleOpenModalProduct = () => {
    setIsModalOpen(true)
  }

  const handleCloseModalProduct = () => {
    setIsModalOpen(false)
  }

  return (
    <ProductsProvider>
      <Header title="Products list" action={handleOpenModalProduct} actionText="Add product" />

      <ProductList />

      <ProductModalCreate isOpen={isModalOpen} onClose={handleCloseModalProduct} />
    </ProductsProvider>
  )
}

export default ProductPage
