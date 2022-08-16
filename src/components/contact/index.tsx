import { GitHub, LinkedIn } from '@material-ui/icons'
import { ContactMain, Left, Right, Social, Title } from './styles'

export const Contact = () => {
  return (
    <ContactMain id="contact">
      <Left>
        <img src="assets/code.png" alt="" />
      </Left>
      <Right>
        <Title>
          <h2>Let's Build Something Together</h2>
          <p>
            Feel free to reach out if you're looking for a developer, have a
            question, or just want to connect.
          </p>
        </Title>
        <Social>
          <div>
            <a href="https://github.com/ericckm" target="blank">
              <GitHub className="icon" />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/ericckm/" target="blank">
              <LinkedIn className="icon" />
            </a>
          </div>
        </Social>
      </Right>
    </ContactMain>
  )
}
