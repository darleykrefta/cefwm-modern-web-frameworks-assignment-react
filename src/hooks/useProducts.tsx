import { useRecoilRefresher_UNSTABLE, useRecoilValue } from 'recoil'
import { productsState } from '../stores/product'

export const useProducts = () => {
  const products = useRecoilValue(productsState)
  const refetch = useRecoilRefresher_UNSTABLE(productsState)
  return {
    products,
    refetch
  }
}
