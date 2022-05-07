import { Table } from '@components'
import { formatMoney } from '@helpers/format'
import { useProducts } from '@hooks/useProducts'

export const ProductList = () => {
  const { products } = useProducts()

  return (
    <Table.Table>
      <thead>
        <tr>
          <Table.Th>Name</Table.Th>
          <Table.Th isMoney>Price</Table.Th>
        </tr>
      </thead>
      <tbody>
        {products.map(item => (
          <tr key={item.uuid}>
            <Table.Td>{item.name}</Table.Td>
            <Table.Td isMoney>{formatMoney(Number(item.price))}</Table.Td>
          </tr>
        ))}
      </tbody>
    </Table.Table>
  )
}
