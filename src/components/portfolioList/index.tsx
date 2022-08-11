import { PortfolioLi } from './styles'

export const PortfolioList = ({ title, open, setSelected, id }) => {
  return (
    <PortfolioLi className={open && 'open'} onClick={() => setSelected(id)}>
      {title}
    </PortfolioLi>
  )
}
