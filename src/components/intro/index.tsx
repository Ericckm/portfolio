import { ImageContainer, IntroMain, Left, Right } from './styles'

export const Intro = () => {
  return (
    <IntroMain id="intro">
      <Left>
        <ImageContainer>
          <img src="assets/me.png" alt="" />
        </ImageContainer>
      </Left>
      <Right></Right>
    </IntroMain>
  )
}
