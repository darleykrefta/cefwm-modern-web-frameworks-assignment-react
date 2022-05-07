import { ProductInputDTO } from '@entities/dto/product-input-dto'
import { Product } from '@entities/product'
import httpClient from './http.js'

async function getAllProducts(): Promise<Product[]> {
  const client = httpClient()
  return client.get('products')
}

async function postProduct(product: ProductInputDTO): Promise<Product> {
  const client = httpClient()
  return client.post('products', product)
}

export { getAllProducts, postProduct }
