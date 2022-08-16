import styled from 'styled-components'

export const TopbarMain = styled.div`
  width: 100%;
  height: 70px;
  background-color: white;
  color: ${(props) => props.theme.colors.secundary};
  position: fixed;
  top: 0;
  z-index: 3;
  transition: all 1s ease;

  &.open {
    background-color: ${(props) => props.theme.colors.secundary};
    color: white;
  }
`
export const Wrapper = styled.div`
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 380px) {
    padding: 2px 2px;
  }
`

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;

  a {
    font-size: 40px;
    font-weight: 700px;
    text-decoration: none;
    color: inherit;
    margin-right: 40px;

    @media (max-width: 768px) {
      display: none;
    }
  }
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 3px;

  @media (max-width: 768px) {
    justify-content: center;
    margin-left: 0;
  }

  .icon {
    font-size: 18px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  span {
    font-size: 15px;
    font-weight: 500;
    @media (max-width: 768px) {
      font-size: 12px;
    }
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

  @media (max-width: 380px) {
    width: 15px;
    height: 15px;
  }

  span {
    width: 100%;
    height: 3px;
    background-color: ${(props) => props.theme.colors.secundary};
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
