import styled from 'styled-components'

export const IntroMain = styled.div`
  background-color: white;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Right = styled.div`
  flex: 0.5;
  width: 100%;
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
  @media (max-width: 768px) {
    height: 600px;
    width: 600px;
  }

  img {
    height: 70%;
  }

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 50px;
    @media (max-width: 320px) {
      font-size: 36px;
    }
  }

  h2 {
    font-size: 28px;
  }

  h3 {
    font-size: 28px;

    @media (max-width: 340px) {
      font-size: 18px;
    }

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

    @media (max-width: 768px) {
      left: 50%;
    }

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
