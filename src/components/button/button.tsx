import React from 'react'
import styled from 'styled-components'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
  variant?: 'primary' | 'secondary'
}

const StyledButton = styled.button<ButtonProps>`
  padding: 0 1.5rem;
  height: 2rem;
  background: var(--blue);
  color: white;
  border-radius: 0.25rem;
  border: 0;
  font-size: 1rem;
  margin-top: 1.5rem;
  font-weight: 600;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  ${props =>
    props.variant === 'secondary' &&
    `
    border: 2px solid var(--blue);
    background-color: white;
    color: var(--blue);
  `}
`

export const Button = ({ variant = 'primary', ...props }: ButtonProps) => {
  return <StyledButton {...props} variant={variant} />
}
