import { OrderItem } from '@entities/order-item'
import { Product } from '@entities/product'
import { removeAtIndex, replaceAtIndex } from '@helpers/array'
import { useRecoilState, useRecoilValue } from 'recoil'
import { orderItemsLength, orderState } from '../stores/order'

export const useOrder = () => {
  const [order, setOrder] = useRecoilState(orderState)
  const itemsLength = useRecoilValue(orderItemsLength)

  const addItem = (product: Product) => {
    const itemIndex = order?.items?.findIndex(itm => itm.product.uuid === product.uuid)

    if (itemIndex === -1) {
      setOrder(oldOrder => ({
        ...oldOrder,
        items: [...oldOrder.items, { product, quantity: 1, total: Number(product.price) }]
      }))
      return
    }

    const currentItem = order.items[itemIndex]
    const newItem = { product, quantity: currentItem.quantity + 1, total: currentItem.total + Number(product.price) }

    setOrder(oldOrder => ({
      ...oldOrder,
      items: replaceAtIndex(order.items, itemIndex, newItem)
    }))
  }
  const removeItem = (product: Product) => {
    const itemIndex = order?.items?.findIndex(itm => itm.product.uuid === product.uuid)

    if (itemIndex === -1) {
      return
    }

    const removableItem = order.items[itemIndex]

    if (removableItem.quantity === 1) {
      setOrder(oldOrder => ({
        ...oldOrder,
        items: removeAtIndex(order.items, itemIndex)
      }))
      return
    }

    const newItem = {
      product,
      quantity: removableItem.quantity - 1,
      total: removableItem.total - Number(product.price)
    }

    setOrder(oldOrder => ({
      ...oldOrder,
      items: replaceAtIndex(order.items, itemIndex, newItem)
    }))
  }

  const finishOrder = () => {
    setOrder({ uuid: '', name: '', items: [] as OrderItem[], total: 0 })
  }

  return {
    order,
    addItem,
    removeItem,
    finishOrder,
    itemsLength
  }
}
