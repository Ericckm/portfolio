import { useState } from 'react'
import { ItemList } from './styles'

export const SkillsList = ({ title, icon }) => {
  const [shown, setShown] = useState(false)

  const handleEnter = (e) => {
    setShown(true)
  }

  const handleLeave = (e) => {
    setShown(false)
  }

  return (
    <ItemList onMouseOver={handleEnter} onMouseLeave={handleLeave}>
      {shown ? title : <i className={icon}></i>}
    </ItemList>
  )
}
