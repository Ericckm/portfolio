import { Stacks, Title, WorksMain } from './styles'
import { skillsData } from '../../data/skills'
import { SkillsList } from '../skillsList'

export const Skills = () => {
  return (
    <WorksMain id="skills">
      <Title>
        <h3>My skills</h3>
        <p>
          Through my studies, I've gained a solid understanding of computer
          science and web development, and have dedicated a lot of my free time
          practicing all these concepts to get Developer ready and apply all
          this knowledge in real-world scenarios and applications.
        </p>
      </Title>
      <Stacks>
        <ul>
          {skillsData?.map((i) => (
            <SkillsList key={i.id} title={i.title} icon={i.icon} />
          ))}
        </ul>
      </Stacks>
    </WorksMain>
  )
}
