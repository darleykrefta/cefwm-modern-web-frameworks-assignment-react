import { Button } from '@components/button'
import { useProducts } from '@hooks/useProducts'
import { Header } from '@components/header'
import { useNavigate } from 'react-router-dom'
import { Table } from '@components/table'
import { formatMoney } from '@helpers/format'
import { postOrder } from '@services/order'
import { GrFormAdd, GrFormSubtract } from 'react-icons/gr'
import { useOrder } from '@hooks/useOrder'

type OrderCreateProps = {}

export const OrderCreate = ({}: OrderCreateProps) => {
  const navigate = useNavigate()
  const { refetch, products } = useProducts()
  const { order, addItem, removeItem, finishOrder } = useOrder()

  const handleSubmit = () => {
    postOrder(order.items).then(() => {
      refetch()
      finishOrder()
      navigate('/product')
    })
  }

  return (
    <>
      <Header title="Create order" />

      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ width: '60%' }}>
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
                    <GrFormAdd size={24} onClick={() => addItem(item)} />
                    <GrFormSubtract size={24} onClick={() => removeItem(item)} />
                  </Table.Td>
                </tr>
              ))}
            </tbody>
          </Table.Table>
        </div>
        <div style={{ width: '40%' }}>
          <Table.Table>
            <thead>
              <tr>
                <Table.Th>Name</Table.Th>
                <Table.Th>Quantity</Table.Th>
                <Table.Th isMoney>Price</Table.Th>
              </tr>
            </thead>
            <tbody>
              {order?.items?.map(item => (
                <tr key={item.product.uuid}>
                  <Table.Td>{item.product.name}</Table.Td>
                  <Table.Td>{item.quantity}</Table.Td>
                  <Table.Td isMoney>{formatMoney(Number(item.total))}</Table.Td>
                </tr>
              ))}
            </tbody>
          </Table.Table>
          <div style={{ display: 'flex', gap: 10 }}>
            <Button variant="secondary">Clear</Button>
            <Button onClick={() => handleSubmit()}>Save</Button>
          </div>
        </div>
      </div>
    </>
  )
}
