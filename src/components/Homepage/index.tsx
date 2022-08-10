import { useState } from 'react'
import { Contact } from '../contact'
import { Intro } from '../intro'
import { Menu } from '../menu'
import { Portfolio } from '../portfolio'
import { Topbar } from '../topbar'
import { Works } from '../works'
import { HomepageMain, Sections } from './styles'

const Homepage = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  return (
    <HomepageMain>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Sections>
        <Intro />
        <Portfolio />
        <Works />
        <Contact />
      </Sections>
    </HomepageMain>
  )
}

export default Homepage
