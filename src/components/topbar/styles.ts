import styled from 'styled-components'

export const TopbarMain = styled.div`
  width: 100%;
  height: 70px;
  background-color: white;
  color: ${(props) => props.theme.colors.primary};
  position: fixed;
  top: 0;
  z-index: 3;
  transition: all 1s ease;
  &.open {
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
  }
`
export const Wrapper = styled.div`
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Left = styled.div`
  display: flex;
  align-items: center;

  a {
    font-size: 40px;
    font-weight: 700px;
    text-decoration: none;
    color: inherit;
    margin-right: 40px;
  }
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;

  .icon {
    font-size: 18px;
    margin-right: 5px;
  }

  span {
    font-size: 15px;
    font-weight: 500;
  }
`

export const Right = styled.div``

export const Hamburguer = styled.div`
  width: 32px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  span {
    width: 100%;
    height: 3px;
    background-color: ${(props) => props.theme.colors.primary};
    transform-origin: left;
    transition: all 2s ease;
  }

  &.open {
    span {
      &:first-child {
        background-color: white;
        transform: rotate(45deg);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:last-child {
        background-color: white;
        transform: rotate(-45deg);
      }
    }
  }
`