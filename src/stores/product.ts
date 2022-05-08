import { atom, selector } from 'recoil'

import { getAllProducts } from '@services/products'

export const productsSelector = selector({
  key: 'productsSelector',
  get: () => getAllProducts()
})

export const productsState = atom({
  key: 'products',
  default: productsSelector
})
