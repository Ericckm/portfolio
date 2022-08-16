import { useState } from 'react'
import { Contact } from '../contact'
import { Intro } from '../intro'
import { Menu } from '../menu'
import { Portfolio } from '../portfolio'
import { Topbar } from '../topbar'
import { Skills } from '../skills'
import { HomepageMain, Sections } from './styles'
import { ProjectSlider } from '../projectSlider'

const Homepage = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  return (
    <HomepageMain>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Sections>
        <Intro />
        <ProjectSlider />
        <Portfolio />
        <Skills />
        <Contact />
      </Sections>
    </HomepageMain>
  )
}

export default Homepage
