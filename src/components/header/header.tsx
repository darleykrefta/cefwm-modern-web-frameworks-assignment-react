import { StyledButton, StyledTitle, StyledWrapper } from './styles'

type HeaderProps = {
  title: string
  action: () => void
  actionText: string
}

export const Header = ({ title, action, actionText }: HeaderProps) => {
  return (
    <StyledWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledButton onClick={() => action()}>{actionText}</StyledButton>
    </StyledWrapper>
  )
}
