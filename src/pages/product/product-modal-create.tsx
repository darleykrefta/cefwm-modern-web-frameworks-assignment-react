import React, { FormEvent } from 'react'
import { Button, Modal, Textfield, Typography } from '@components'
import { useProducts } from '@hooks/useProducts'
import { postProduct } from '@services/products'
import { ProductInputDTO } from '@models/dto/product-input-dto'

type ProductModalCreateProps = {
  isOpen: boolean
  onClose: () => void
}

export const ProductModalCreate = ({ isOpen, onClose }: ProductModalCreateProps) => {
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
      onClose()
    })
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Typography variant="h3" text="Create product" />

      {JSON.stringify(values, null, 4)}

      <form onSubmit={handleSubmit}>
        <Textfield type="text" placeholder="Name" onChange={handleChangeValue('name')}></Textfield>
        <Textfield type="number" placeholder="Price" onChange={handleChangeValue('price')}></Textfield>
        <Button type="submit">Save</Button>
      </form>
    </Modal>
  )
}
