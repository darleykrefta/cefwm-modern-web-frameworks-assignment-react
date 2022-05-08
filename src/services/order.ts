import { OrderItem } from '@entities/order-item.js'
import { Order } from '@entities/order.js'
import httpClient from './http.js'

async function postOrder(items: OrderItem[]): Promise<Order> {
  const client = httpClient()
  const newOrder = (await client.post('orders', {
    restaurant: '00b8fd02-eba0-48ed-8806-8d88176f9c42',
    client: '8a473aae-7060-409c-a0c6-39cf9c2dd12b'
  })) as Order
  return client.post(`orders/${newOrder.uuid}/items`, {
    items: items.map(item => ({ product: item.product.uuid, quantity: item.quantity }))
  })
}

export { postOrder }
