import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

body {
  background: ${(props) => props.theme.colors.background};
  font: 400 16px Roboto, sans-serif;
}
`
