import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;
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
`

export const Button = (props: React.ButtonHTMLAttributes<HTMLElement>) => {
  return <StyledButton {...props} />
}
