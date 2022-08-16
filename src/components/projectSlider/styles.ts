import styled from 'styled-components'

export const Project = styled.div`
  background-color: ${(props) => props.theme.colors.crimson};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .arrow {
    height: 50px;
    position: absolute;
    cursor: pointer;
  }
  .left {
    left: 100px;
    transform: rotate(-180deg);
  }

  .right {
    right: 100px;
  }
`

export const SliderDiv = styled.div`
  height: 400px;
  display: flex;
  position: absolute;
  left: 0;
  transition: all 1s ease-out;
`

export const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Item = styled.div`
  width: 600px;
  height: 100%;
  background-color: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Left = styled.div`
  flex: 4;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export const LeftContainer = styled.div`
  height: 100%;
  margin: 0 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h2 {
    font-weight: 600;
    color: ${(props) => props.theme.colors.black};
  }
  p {
    font-weight: 300;
    color: ${(props) => props.theme.colors.black};
  }
`

export const LinkDiv = styled.div`
  display: flex;
  justify-content: space-around;

  a {
    padding: 6px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.crimson};
    color: white;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      background-color: white;
      color: crimson;
    }
  }
`

export const Right = styled.div`
  flex: 8;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: lightgray;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`