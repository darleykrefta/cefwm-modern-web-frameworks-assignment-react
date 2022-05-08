import React, { FormEvent } from 'react'
import { Button } from '@components/button'
import { Textfield } from '@components/textfield'
import { Typography } from '@components/typography'
import { useProducts } from '@hooks/useProducts'
import { postProduct } from '@services/products'
import { ProductInputDTO } from '@entities/dto/product-input-dto'
import { Header } from '@components/header'
import { useNavigate } from 'react-router-dom'

type ProductCreateProps = {}

export const ProductCreate = ({}: ProductCreateProps) => {
  const navigate = useNavigate()
  const { refetch } = useProducts()

  const [values, setValues] = React.useState<ProductInputDTO>({
    name: '',
    price: '0',
    restaurant_uuid: '00b8fd02-eba0-48ed-8806-8d88176f9c42'
  })

  const handleChangeValue =
    (name: string) =>
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setValues({ ...values, [name]: event.target.value })
    }

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault()

    postProduct(values).then(() => {
      refetch()
      navigate('/product')
    })
  }

  return (
    <>
      <Header title="Create product" />

      <form onSubmit={handleSubmit}>
        <Textfield type="text" placeholder="Name" onChange={handleChangeValue('name')}></Textfield>
        <Textfield type="number" placeholder="Price" onChange={handleChangeValue('price')}></Textfield>
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
