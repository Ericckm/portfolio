import styled from 'styled-components'

export const Project = styled.div`
  background-color: crimson;
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
`

export const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid blue;
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
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const LinkDiv = styled.div`
  display: flex;
  justify-content: space-around;

  a {
    padding: 6px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.secundary};
    color: white;
    text-decoration: none;
  }
`

export const Right = styled.div`
  flex: 8;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
