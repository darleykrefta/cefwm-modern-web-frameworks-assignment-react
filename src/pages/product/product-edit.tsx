import React, { FormEvent } from 'react'
import { Button } from '@components/button'
import { Textfield } from '@components/textfield'
import { getProduct, putProduct } from '@services/products'
import { ProductInputDTO } from '@entities/dto/product-input-dto'
import { Header } from '@components/header'
import { useNavigate, useParams } from 'react-router-dom'
import { useProducts } from '@hooks/useProducts'

type ProductEditProps = {}

export const ProductEdit = ({}: ProductEditProps) => {
  const navigate = useNavigate()
  const { refetch } = useProducts()
  const { productId } = useParams()

  const [values, setValues] = React.useState<ProductInputDTO>({ name: '', price: '0' })

  React.useEffect(() => {
    if (productId) {
      getProduct(productId).then(data => setValues(data))
    }
  }, [])

  const handleChangeValue =
    (name: string) =>
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setValues({ ...values, [name]: event.target.value })
    }

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault()

    putProduct(values, productId!).then(() => {
      refetch()
      navigate('/product')
    })
  }

  return (
    <>
      <Header title="Edit product" />

      <form onSubmit={handleSubmit}>
        <Textfield type="text" placeholder="Name" value={values.name} onChange={handleChangeValue('name')}></Textfield>
        <Textfield
          type="number"
          placeholder="Price"
          value={values.price}
          onChange={handleChangeValue('price')}
        ></Textfield>
        <div style={{ display: 'flex', gap: 10 }}>
          <Button variant="secondary" onClick={() => navigate('/product')}>
            Back
          </Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </>
  )
}
