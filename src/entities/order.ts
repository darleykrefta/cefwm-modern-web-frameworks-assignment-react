import { Product } from './product'

export type Order = {
  uuid: string
  name: string
  total: string
  items: Product[]
}
