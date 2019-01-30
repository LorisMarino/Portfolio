// Dependencies
import React from 'react'
import App, { Container } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'

// Components
import Page from '../components/Page'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

class MyApp extends App {
  render() {
    const { Component } = this.props

    return (
      <Container>
        <Page>
          <Component />
        </Page>
      </Container>
    )
  }
}

export default MyApp
