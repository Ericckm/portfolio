import styled from 'styled-components'

export const ItemList = styled.li`
  display: flex;
  font-size: 16px;
  min-width: 80px;
  min-height: 40px;
  font-weight: 500;
  padding: 8px;
  border-radius: 10px;
  transition: all 0.5s ease;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  i {
    display: flex;
    align-items: center;
    font-size: 40px;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
  }
`
