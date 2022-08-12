import styled from 'styled-components'

export const WorksMain = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  padding: 5px;
  align-items: center;
  gap: 50px;

  h3 {
    font-size: 50px;
    font-weight: 600;
  }

  p {
    font-size: 20px;
  }

  @media (max-width: 768px) {
  }
`

export const Stacks = styled.div`
  width: 60%;
  display: flex;
  height: 60%;
  align-items: center;
  justify-content: center;

  ul {
    width: 80%;
    height: 70%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 50px;
    align-items: center;
  }
`
