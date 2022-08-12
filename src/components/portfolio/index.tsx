import { useEffect, useState } from 'react'
import { PortfolioList } from '../portfolioList'
import { Items, PortfolioMain, Wrapper } from './styles'
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio
} from '../../dummyData/data'

export const Portfolio = () => {
  const [selected, setSelected] = useState('featured')
  const [data, setData] = useState([])

  const list = [
    {
      id: 'featured',
      title: 'Featured'
    },
    {
      id: 'web',
      title: 'Front-end'
    },
    {
      id: 'mobile',
      title: 'Back-end'
    }
  ]

  useEffect(() => {
    switch (selected) {
      case 'featured':
        setData(featuredPortfolio)
        break
      case 'web':
        setData(webPortfolio)
        break
      case 'mobile':
        setData(mobilePortfolio)
        break
      case 'design':
        setData(designPortfolio)
        break
    }
  }, [selected])

  return (
    <PortfolioMain id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list?.map((i) => (
          <PortfolioList
            title={i.title}
            open={selected === i.id}
            setSelected={setSelected}
            id={i.id}
            key={i.id}
          />
        ))}
      </ul>
      <Wrapper>
        {data?.map((d) => (
          <Items>
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </Items>
        ))}
      </Wrapper>
    </PortfolioMain>
  )
}
