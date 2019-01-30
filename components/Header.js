// Dependencies
import React, { Component } from 'react'
import Link from 'next/link'

// Styles
import { HeaderContainer, LogoMobile, Nav } from './styles/Header'

// Assets
import Logo from '../static/logo.svg'

class Header extends Component {
  constructor() {
    super()
    this.state = {
      page: null,
    }
  }

  componentDidMount = () => {
    this.setState({ page: window.location.pathname })
  }

  render() {
    const { page } = this.state
    return (
      <HeaderContainer>
        <LogoMobile>
          <Link href="/">
            <Logo />
          </Link>
        </LogoMobile>
        <Nav>
          <ul>
            <li>
              <Link href="/">
                <a className={page === '/' ? 'active' : null}>Accueil</a>
              </Link>
            </li>
            <li>
              <Link href="/parcours">
                <a className={page === '/parcours' ? 'active' : null}>
                  Parcours
                </a>
              </Link>
            </li>
            <li>
              <Link href="/portfolio">
                <a className={page === '/portfolio' ? 'active' : null}>
                  Portfolio
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className={page === '/contact' ? 'active' : null}>Contact</a>
              </Link>
            </li>
          </ul>
        </Nav>
      </HeaderContainer>
    )
  }
}

export default Header
