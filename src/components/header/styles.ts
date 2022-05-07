import styled from 'styled-components'

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledTitle = styled.h3`
  color: var(--text-title);
  font-size: 1.5rem;
`

const StyledButton = styled.button`
  padding: 0.75rem;
  background-color: var(--blue);
  color: white;
  border-radius: 0.25rem;
  border: 0;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    filter: brightness(0.9);
  }
`

export { StyledWrapper, StyledTitle, StyledButton }
