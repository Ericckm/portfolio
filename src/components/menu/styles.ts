import styled from 'styled-components'

export const MenuContainer = styled.div`
  width: 300px;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.primary};
  position: fixed;
  top: 0;
  right: -300px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 1s ease;

  &.open {
    right: 0;
  }

  ul {
    font-size: 32px;
    font-weight: 300;
    color: white;
    width: 50%;
  }

  li {
    margin-bottom: 30px;
    a {
      font-size: inherit;
      color: inherit;
      text-decoration: none;
    }
    &:hover {
      font-weight: 500;
    }
  }
`
