import styled from 'styled-components'

export const HomepageMain = styled.div`
  height: 100vh;
`

export const Sections = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  position: relative;
  top: 70px;
  scroll-behavior: smooth;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  > * {
    width: 100vw;
    height: calc(100vh - 70px);
  }
`
