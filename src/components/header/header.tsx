import { Button } from '@components/button'
import { StyledContainer, StyledTitle } from './styles'

type HeaderProps = {
  title: string
  action?: () => void
  actionText?: string
}

export const Header = ({ title, action, actionText }: HeaderProps) => {
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      {!!action && <Button onClick={() => action()}>{actionText}</Button>}
    </StyledContainer>
  )
}
