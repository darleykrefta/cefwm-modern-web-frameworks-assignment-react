import * as React from 'react'
import { getAllProducts } from '@services/products'
import { Product } from '@models/product'

type ProductContextType = {
  products: Product[]
  refetch: () => void
}

type ProductsProviderProps = {
  children: React.ReactNode
}

const ProductContext = React.createContext<ProductContextType>({} as ProductContextType)

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = React.useState<Product[]>([])

  const refetch = () => {
    getAllProducts().then(data => setProducts(data))
  }

  React.useEffect(() => {
    refetch()
  }, [])

  return (
    <ProductContext.Provider
      value={{
        products,
        refetch
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProducts = () => {
  const context = React.useContext(ProductContext)
  return context
}
