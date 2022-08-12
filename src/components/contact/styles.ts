import styled from 'styled-components'

export const ContactMain = styled.div`
  background-color: white;
  display: flex;
  padding: 10px;
  width: 100%;
  justify-content: center;
  align-items: center;
`
export const Left = styled.div`
  flex: 0.4;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 60%;
    width: 70%;
  }
`

export const Right = styled.div`
  flex: 0.6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 40%;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 40px;
  }

  p {
    font-size: 15px;
    margin: 15px 0px;
  }
`

export const Social = styled.div`
  display: flex;

  a {
    color: black;
    margin: 0 15px;
  }

  .icon {
    font-size: 30px;
  }
`
