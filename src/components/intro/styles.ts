import styled from 'styled-components'

export const IntroMain = styled.div`
  background-color: white;
  display: flex;
`

export const Right = styled.div`
  flex: 0.5;
`

export const Left = styled.div`
  flex: 0.5;
  overflow: hidden;
`

export const ImageContainer = styled.div`
  width: 750px;
  height: 750px;
  background-color: crimson;
  border-radius: 50%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  float: right;

  img {
    height: 70%;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`
