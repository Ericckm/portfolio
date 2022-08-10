import { ImageContainer, IntroMain, Left, Right, Wrapper } from './styles'

export const Intro = () => {
  return (
    <IntroMain id="intro">
      <Left>
        <ImageContainer>
          <img src="assets/work.png" alt="" />
        </ImageContainer>
      </Left>
      <Right>
        <Wrapper>
          <h2>Hi there, I'm</h2>
          <h1>Erick Baptista</h1>
          <h3>
            Software Engineer <span></span>
          </h3>
          <a href=""></a>
        </Wrapper>
      </Right>
    </IntroMain>
  )
}
