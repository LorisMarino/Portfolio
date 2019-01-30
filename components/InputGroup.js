// Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Styles
import { InputGroupStyled } from './styles/Form'

class InputGroup extends Component {
  static propTypes = {
    error: PropTypes.bool,
    name: PropTypes.string.isRequired,
    viewName: PropTypes.string.isRequired,
    fieldValue: PropTypes.func.isRequired,
  }

  static defaultProps = {
    error: false,
  }

  constructor(props) {
    super(props)

    this.state = {
      active: false,
      empty: true,
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  toggleClass = () => {
    this.setState({ active: true })
  }

  removeActive = () => {
    const { empty } = this.state
    if (empty) this.setState({ active: false })
  }

  writing = event => {
    const { fieldValue } = this.props
    if (event.target.value.length === 0) this.setState({ empty: true })
    else this.setState({ empty: false })
    fieldValue(event.target.value)
  }

  render() {
    const { name, viewName, error } = this.props
    const { active } = this.state
    return (
      <InputGroupStyled error={error} className={active ? 'active' : ''}>
        <label htmlFor={name}>{viewName}</label>
        <input
          onBlur={this.removeActive}
          onFocus={this.toggleClass}
          type="text"
          id={name}
          onChange={this.writing}
        />
      </InputGroupStyled>
    )
  }
}

export default InputGroup
