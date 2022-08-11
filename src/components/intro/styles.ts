import styled from 'styled-components'

export const IntroMain = styled.div`
  background-color: white;
  display: flex;
`

export const Right = styled.div`
  flex: 0.5;
  position: relative;
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
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 60px;
    margin: 10px 0;
  }

  h2 {
    font-size: 35px;
  }

  h3 {
    font-size: 30px;
    span {
      font-size: inherit;
      color: crimson;
      display: inline-flex;
    }
  }

  a {
    position: absolute;
    bottom: 10px;
    left: 40%;

    img {
      width: 30px;
      animation: arrowBlink 2s infinite;
    }

    @keyframes arrowBlink {
      to {
        opacity: 0;
      }
    }
  }
`
