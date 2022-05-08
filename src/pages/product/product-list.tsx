import { Header } from '@components/header'
import { Table } from '@components/table'
import { formatMoney } from '@helpers/format'
import { useProducts } from '@hooks/useProducts'
import { Link, useNavigate } from 'react-router-dom'
import { GrFormEdit } from 'react-icons/gr'

export const ProductList = () => {
  const navigate = useNavigate()
  const { products = [] } = useProducts()

  return (
    <>
      <Header title="Products" action={() => navigate('/product/new')} actionText="Create" />
      <Table.Table>
        <thead>
          <tr>
            <Table.Th>Name</Table.Th>
            <Table.Th isMoney>Price</Table.Th>
            <Table.Th>Actions</Table.Th>
          </tr>
        </thead>
        <tbody>
          {products.map(item => (
            <tr key={item.uuid}>
              <Table.Td>{item.name}</Table.Td>
              <Table.Td isMoney>{formatMoney(Number(item.price))}</Table.Td>
              <Table.Td>
                <Link to={`/product/${item.uuid}`}>
                  <GrFormEdit size={24} />
                </Link>
              </Table.Td>
            </tr>
          ))}
        </tbody>
      </Table.Table>
    </>
  )
}
