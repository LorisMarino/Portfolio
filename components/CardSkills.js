// Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Config
import base from '../base'

// Styles
import { CardResumeStyled } from './styles/Cards'

class CardSkills extends Component {
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
    this.ref = base.syncState(`skills/${id}`, {
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
        <strong>{data.job}</strong>
        <p>{data.date}</p>
      </CardResumeStyled>
    )
  }
}

export default CardSkills
