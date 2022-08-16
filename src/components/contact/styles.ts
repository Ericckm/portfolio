import styled from 'styled-components'

export const ContactMain = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`
export const Left = styled.div`
  flex: 2;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 60%;
    width: 60%;
  }
`

export const Right = styled.div`
  flex: 3;
  display: flex;
  height: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin: 0 15px;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  h2 {
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  p {
    font-size: 15px;

    @media (max-width: 768px) {
      font-size: 16px;
    }
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

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`
