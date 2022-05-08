import { OrderItem } from './order-item'

export type Order = {
  uuid: string
  name: string
  total: number
  items: OrderItem[]
}
