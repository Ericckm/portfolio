import styled from 'styled-components'

export const Li = styled.li`
  display: flex;
  font-size: 20px;
  font-weight: 500;
  padding: 8px;
  border-radius: 10px;
  transition: all 0.5s ease;
  margin: 0px 20px;
  cursor: pointer;

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
