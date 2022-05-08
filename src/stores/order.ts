import { atom, selector } from 'recoil'

import { Order } from '@entities/order'
import { OrderItem } from '@entities/order-item'

export const orderState = atom<Order>({
  key: 'order',
  default: { uuid: '', name: '', items: [] as OrderItem[], total: 0 } as Order
})

export const orderItemsLength = selector({
  key: 'orderItemslength',
  get: ({ get }) => {
    const items = get(orderState)?.items
    return Array.isArray(items) && items.length
  }
})
