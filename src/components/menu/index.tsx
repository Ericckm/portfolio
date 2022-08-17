import { MenuList } from '../menuList'
import { MenuContainer } from './styles'

export const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <MenuContainer className={menuOpen && 'open'}>
      <ul>
        <MenuList href="#intro" title="Home" setMenuOpen={setMenuOpen} />
        <MenuList href="#project" title="Projects" setMenuOpen={setMenuOpen} />
        <MenuList href="#skills" title="Skills" setMenuOpen={setMenuOpen} />
        <MenuList href="#contact" title="Contact" setMenuOpen={setMenuOpen} />
      </ul>
    </MenuContainer>
  )
}
