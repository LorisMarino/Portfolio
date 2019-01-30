// Dependencies
import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import PropTypes from 'prop-types'
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap-grid.css'

// Config
import Meta from './Meta'

const theme = {
  outerSpace: '#2e3131',
  alabaster: '#fafafa',
  poloBlue: '#90b1d7',
  twitter: '#1da1f2',
  github: '#6e5494',
  linkedin: '#0077b5',
  apple: '#43a047',
  cinnabar: '#e53935',
  sm: '767.98px',
  md: '991.98px',
  lg: '1199.98px',
}

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    color: ${theme.black};
    font-size: 1.4rem;
    word-break: break-word;
  }

  #nprogress {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    .bar {
      height: 4px;
      background-color: ${props => props.theme.poloBlue};
    }
  }

  .title {
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    font-size: 3rem;
    text-transform: uppercase;
    margin-bottom: 30px;
  }

  *[class^="col-"] {
    margin-bottom: 20px;  
  }

  * {
    -webkit-overflow-scrolling: smooth;
  }

  ul {
    list-style: none;
    display: flex;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1, h2, h3, p, ul {
    margin: 0;
    padding: 0;
  }

  button:focus, button:active {
    outline-style: none;
  }

  img {
    user-select: none;
  }

  .page {
    padding-bottom: 30px;
    &.withSidebar {
      display: grid;
      grid-column-gap: 20px;
 
      grid-template-columns: auto 1fr;
      @media (max-width: ${props => props.theme.sm}) {
        display: block;
      }
    }
  }

  .content {
    margin-top: 100px;
    padding: 0 60px;
    @media (max-width: ${props => props.theme.sm}) {
      padding: 0 15px;
      margin-top: 40px;
    }
  }

  .resume section:not(:last-child) {
    margin-bottom: 100px;
  }
`

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <GlobalStyle />
      <Meta />
      {children}
    </div>
  </ThemeProvider>
)

Page.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Page
