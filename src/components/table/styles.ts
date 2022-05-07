import styled from 'styled-components'

const Table = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;
`

const Th = styled.th<{ isMoney?: boolean }>`
  color: var(--text-body);
  font-weight: 400;
  padding: 1rem 2rem;
  line-height: 1.5rem;
  text-align: ${props => (props.isMoney ? 'right' : 'left')};
`

const Td = styled.td<{ isMoney?: boolean }>`
  padding: 1rem 2rem;
  border: 0;
  background-color: var(--shape);
  color: var(--text-body);
  border-radius: 0.25rem;
  text-align: ${props => (props.isMoney ? 'right' : 'left')};
`

export { Table, Th, Td }
