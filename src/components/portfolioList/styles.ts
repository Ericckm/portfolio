import styled from 'styled-components'

export const PortfolioLi = styled.li`
  font-size: 14px;
  margin-right: 50px;
  padding: 7px;
  border-radius: 10px;
  cursor: pointer;

  &.open {
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
  }
`
