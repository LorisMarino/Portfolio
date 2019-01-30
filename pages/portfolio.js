// Dependencies
import React, { Component } from 'react'
import Head from 'next/head'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'reactstrap'

// Config
import base from '../base'

// Components
import Sidebar from '../components/Sidebar'
import CardPortfolio from '../components/CardPortfolio'
import CardLab from '../components/CardLab'
import ItemPortfolio from '../components/ItemPortfolio'
import Header from '../components/Header'

class Portfolio extends Component {
  static propTypes = {
    router: PropTypes.shape({}).isRequired,
  }

  constructor() {
    super()
    this.state = {
      itemsPortfolio: null,
    }
  }

  componentDidMount() {
    this.ref = base.syncState('portfolio', {
      context: this,
      state: 'itemsPortfolio',
    })

    this.ref = base.syncState('lab', {
      context: this,
      state: 'lab',
    })
  }

  render() {
    let { itemsPortfolio, lab } = this.state
    const { router } = this.props
    if (itemsPortfolio) itemsPortfolio = Object.keys(itemsPortfolio).reverse()
    if (lab) lab = Object.keys(lab).reverse()

    if (router.query.id) {
      return (
        <div className="page">
          <main>
            <ItemPortfolio id={router.query.id} />
          </main>
        </div>
      )
    }
    if (!itemsPortfolio || !lab) return ''
    return (
      <div>
        <Head>
          <title>Loris Marino | Portfolio</title>
        </Head>
        <Header />
        <div className="page withSidebar">
          <Sidebar width="100px" />
          <main className="content">
            <section>
              <Container fluid>
                <div className="title">Projets</div>
                <Row>
                  {itemsPortfolio.map(key => (
                    <Col xs="12" sm="4" md="6" lg="4" xl="3" key={key}>
                      <CardPortfolio id={key} />
                    </Col>
                  ))}
                </Row>
                <div className="title">Lab</div>
                <Row>
                  {lab.map(key => (
                    <Col xs="12" sm="4" md="6" lg="4" xl="2" key={key}>
                      <CardLab id={key} />
                    </Col>
                  ))}
                </Row>
              </Container>
            </section>
          </main>
        </div>
      </div>
    )
  }
}

export default withRouter(Portfolio)
