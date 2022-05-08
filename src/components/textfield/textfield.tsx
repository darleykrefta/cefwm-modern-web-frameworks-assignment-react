import React from 'react'
import styled from 'styled-components'

const StyledTextfield = styled.input`
  width: 100%;
  padding: 0 1.5rem;
  height: 2rem;
  border-radius: 0.25rem;
  border: 1px solid #d7d7d7;
  background-color: #e7e9ee;

  font-weight: 400;
  font-size: 1rem;

  &::placeholder {
    color: var(--text-body);
  }

  & + input {
    margin-top: 1rem;
  }
`

export const Textfield = (props: React.InputHTMLAttributes<HTMLElement>) => {
  return <StyledTextfield {...props} />
}
