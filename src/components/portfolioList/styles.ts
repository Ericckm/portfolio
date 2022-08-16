import styled from 'styled-components'

export const ItemContainer = styled.li`
  padding: 8px;
  font-size: 16px;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  &.open {
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
  }
`
