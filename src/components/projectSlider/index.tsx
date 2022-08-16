import {
  Item,
  Left,
  Project,
  Right,
  SliderDiv,
  Container,
  LeftContainer,
  LinkDiv
} from './styles'

export const ProjectSlider = () => {
  return (
    <Project>
      <SliderDiv>
        <Container>
          <Item>
            <Left>
              <LeftContainer>
                <h2>title</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  maiores reiciendis reprehenderit quae quam? Ipsam dolore rerum
                  atque similique, saepe odio aut aperiam odit nobis culpa dicta
                </p>
                <LinkDiv>
                  <a href="">project link</a>
                  <a href="">deployed</a>
                </LinkDiv>
              </LeftContainer>
            </Left>
            <Right>
              <img src="assets/q9Test.png" alt="" />
            </Right>
          </Item>
        </Container>
      </SliderDiv>
      <img src="assets/arrow.png" className="arrow left" alt="" />
      <img src="assets/arrow.png" className="arrow right" alt="" />
    </Project>
  )
}
