// Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Config
import base from '../base'

// Styles
import { CardResumeStyled } from './styles/Cards'

class CardEducation extends Component {
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
    this.ref = base.syncState(`education/${id}`, {
      context: this,
      state: 'data',
    })
  }

  render() {
    const { data } = this.state

    if (!data) return ''

    return (
      <CardResumeStyled>
        <h3>{data.title}</h3>
        <strong>{data.diploma}</strong>
        <p>{data.date}</p>
      </CardResumeStyled>
    )
  }
}

export default CardEducation
