import { ProductInputDTO } from '@models/dto/product-input-dto'
import { Product } from '@models/product'
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
