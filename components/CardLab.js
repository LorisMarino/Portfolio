// Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Config
import base from '../base'

// Styles
import { CardLabStyled } from './styles/Cards'

class CardLab extends Component {
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
    this.ref = base.syncState(`lab/${id}`, {
      context: this,
      state: 'data',
    })
  }

  render() {
    const { data } = this.state
    let github
    let demo
    let tags

    if (data) {
      if (data.github) {
        github = (
          <a href={data.github} target="blank" className="demo">
            View on github
          </a>
        )
      }

      if (data.demo) {
        demo = (
          <a href={data.demo} target="blank" className="demo">
            View the demo
          </a>
        )
      }

      tags = data.tags.split(',')
    }

    if (!data) return ''

    return (
      <CardLabStyled demogithub={demo && github}>
        <div className="image">
          <img src={data.image} alt={data.name} />
        </div>
        <div className="cardContent">
          <h2>{data.name}</h2>
          <p>{data.description}</p>
          <div className="tags">
            {tags.map(tag => (
              <strong key={tag}>#{tag}</strong>
            ))}
          </div>
        </div>
        <div className="links">
          {demo}
          {github}
        </div>
      </CardLabStyled>
    )
  }
}

export default CardLab
