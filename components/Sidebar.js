// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Styles
import { SidebarContainer, LogoStyled } from './styles/Sidebar'

// Assets
import Logo from '../static/logo.svg'

const Sidebar = ({ width, left }) => (
  <SidebarContainer width={width} left={left}>
    <div className="sidebar">
      <LogoStyled left={left}>
        <Logo />
      </LogoStyled>
    </div>
  </SidebarContainer>
)

Sidebar.propTypes = {
  width: PropTypes.string,
  left: PropTypes.bool,
}

Sidebar.defaultProps = {
  width: 'auto',
  left: false,
}

export default Sidebar
