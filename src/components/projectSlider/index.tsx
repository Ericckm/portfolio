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

import { projectData } from '../../data/projectData'
import { useState } from 'react'

export const ProjectSlider = () => {
  const data = projectData

  const [currentSlide, setCurrentSlide] = useState(0)

  const handleClick = (direction) => {
    direction === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
  }

  return (
    <Project id="project">
      <SliderDiv style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data?.map((d) => (
          <Container key={d.id}>
            <Item>
              <Left>
                <LeftContainer>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <LinkDiv>
                    {d.github && (
                      <a href={d.github} target="_blank">
                        Github
                      </a>
                    )}
                    {d.deploy && (
                      <a href={d.deploy} target="_blank">
                        Project
                      </a>
                    )}
                  </LinkDiv>
                </LeftContainer>
              </Left>
              <Right>
                <img src={d.img} alt="" />
              </Right>
            </Item>
          </Container>
        ))}
      </SliderDiv>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick('left')}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick('')}
      />
    </Project>
  )
}
