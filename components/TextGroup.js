// Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Styles
import { TextGroupStyled } from './styles/Form'

class TextGroup extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    viewName: PropTypes.string.isRequired,
    fieldValue: PropTypes.func.isRequired,
  }

  writing = event => {
    const { fieldValue } = this.props
    fieldValue(event.target.value)
  }

  render() {
    const { name, viewName } = this.props
    return (
      <TextGroupStyled onBlur={this.removeActive} onClick={this.toggleClass}>
        <label htmlFor={name}>{viewName}</label>
        <textarea onChange={this.writing} type="text" rows="5" id={name} />
      </TextGroupStyled>
    )
  }
}

export default TextGroup
