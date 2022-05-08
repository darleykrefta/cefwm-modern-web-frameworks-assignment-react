import { OrderItem } from '@entities/order-item.js'
import { Order } from '@entities/order.js'
import httpClient from './http.js'

async function postOrder(items: OrderItem[]): Promise<Order> {
  const client = httpClient()
  const newOrder = (await client.post('orders', {
    restaurant: '',
    client: ''
  })) as Order
  return client.post(`orders/${newOrder.uuid}/items`, {
    items: items.map(item => ({ product: item.product.uuid, quantity: item.quantity }))
  })
}

export { postOrder }
