import { ItemContainer } from './styles'

export const PortfolioList = ({ title, open, setSelected, id }) => {
  return (
    <ItemContainer className={open && 'open'} onClick={() => setSelected(id)}>
      {title}
    </ItemContainer>
  )
}
