import styled from 'styled-components'

export const WorksMain = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 50px;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 36px;
    }
  }

  p {
    font-size: 20px;
    font-weight: 300;
    width: 70%;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`

export const Stacks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 3;

  ul {
    width: 60%;
    height: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
`
