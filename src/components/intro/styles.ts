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
  width: 700px;
  height: 700px;

  background-color: crimson;
  border-radius: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  float: right;
  img {
    height: 100%;
  }
`
