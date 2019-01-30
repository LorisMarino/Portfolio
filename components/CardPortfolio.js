// Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

// Config
import base from '../base'

// Styles
import { CardPortfolioStyled } from './styles/Cards'

class CardPortfolio extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  }

  constructor() {
    super()
    this.state = {
      data: null,
    }
  }

  componentDidMount() {
    const { id } = this.props
    this.ref = base.syncState(`portfolio/${id}`, {
      context: this,
      state: 'data',
    })
  }

  render() {
    const { data } = this.state
    const { id } = this.props

    if (!data) return ''

    const tags = data.tags.split(',')

    return (
      <CardPortfolioStyled>
        <Link href={`/portfolio/${id}`}>
          <img src={data.mainImage} alt={data.name} />
        </Link>
        <div className="cardContent">
          <h2>{data.name}</h2>
          <p>{data.description}</p>
          <div className="tags">
            {tags.map(tag => (
              <strong key={tag}>#{tag}</strong>
            ))}
          </div>
        </div>
        <a href={data.demo} target="blank" className="demo">
          View the demo
        </a>
      </CardPortfolioStyled>
    )
  }
}

export default CardPortfolio
