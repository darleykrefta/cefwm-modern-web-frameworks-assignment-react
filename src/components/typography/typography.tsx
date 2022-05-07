import styled from 'styled-components'

type TypographyProps = {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p'
  text: string
}

const StyledTypography = styled.span`
  color: var(--text-title);
  margin-bottom: 2rem;
`

export const Typography = ({ variant, text }: TypographyProps) => (
  <StyledTypography as={variant}>{text}</StyledTypography>
)
