import { Person, Mail } from '@material-ui/icons'
import {
  Hamburguer,
  IconContainer,
  Left,
  Right,
  TopbarMain,
  Wrapper
} from './styles'

export const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <TopbarMain className={menuOpen && 'open'}>
      <Wrapper>
        <Left>
          <a href="#intro">Erick</a>
          <IconContainer>
            <Person className="icon" />
            <span>+55 (11) 96595-8307</span>
          </IconContainer>
          <IconContainer>
            <Mail className="icon" />
            <span>ericckm@outlook.com.br</span>
          </IconContainer>
        </Left>
        <Right>
          <Hamburguer
            className={menuOpen && 'open'}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </Hamburguer>
        </Right>
      </Wrapper>
    </TopbarMain>
  )
}
