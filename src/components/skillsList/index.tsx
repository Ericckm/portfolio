import { useState } from 'react'
import { Li } from './styles'

export const SkillsList = ({ title, icon }) => {
  const [shown, setShown] = useState(false)

  const handleEnter = (e) => {
    setShown(true)
  }

  const handleLeave = (e) => {
    setShown(false)
  }

  return (
    <Li onMouseOver={handleEnter} onMouseLeave={handleLeave}>
      {shown ? title : <i className={icon}></i>}
    </Li>
  )
}
