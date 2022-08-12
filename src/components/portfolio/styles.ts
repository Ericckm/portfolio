import styled from 'styled-components'

export const PortfolioMain = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 50px;
    margin-top: 15px;
  }

  ul {
    margin: 10px;
    padding: 0;
    list-style: none;
    display: flex;
  }
`

export const Wrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export const Items = styled.div`
  width: 220px;
  height: 150px;
  border: 1px solid rgb(240, 239, 239);
  border-radius: 20px;
  margin: 24px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  transition: all 0.5s ease;
  cursor: pointer;

  h3 {
    position: absolute;
    font-size: 20px;
    text-align: center;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    overflow-y: hidden;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    img {
      opacity: 0.2;
      z-index: 0;
    }
  }
`
