export const formatMoney = (value: number) => {
  const formattedValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
  return formattedValue
}
