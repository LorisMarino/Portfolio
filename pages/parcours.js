// Dependencies
import React, { Component } from 'react'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/pro-solid-svg-icons'
import { Container, Row, Col } from 'reactstrap'

// Config
import base from '../base'

// Components
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import CardSkills from '../components/CardSkills'
import CardEducation from '../components/CardEducation'

// Styles
import Download from '../components/styles/parcours'

class Resume extends Component {
  constructor() {
    super()
    this.state = {
      skills: null,
      education: null,
    }
  }

  componentDidMount() {
    this.ref = base.syncState('skills', {
      context: this,
      state: 'skills',
    })
    this.ref = base.syncState('education', {
      context: this,
      state: 'education',
    })
  }

  render() {
    let { skills, education } = this.state

    if (skills) skills = Object.keys(skills).reverse()
    if (education) education = Object.keys(education).reverse()

    if (!skills || !education) return ''
    return (
      <div>
        <Head>
          <title>Loris Marino | Parcours</title>
        </Head>
        <Header />
        <div className="page withSidebar resume">
          <Sidebar width="100px" />
          <main className="content">
            <section>
              <Container fluid>
                <Download>
                  <a href="https://files.lorismarino.fr/cv.pdf" target="blank">
                    Télécharger mon CV <FontAwesomeIcon icon={faDownload} />
                  </a>
                </Download>
                <h2 className="title">Experience</h2>
                <Row>
                  {skills.map(key => (
                    <Col xs="12" sm="6" lg="4" xl="3" key={key}>
                      <CardSkills id={key} />
                    </Col>
                  ))}
                </Row>
              </Container>
            </section>
            <section>
              <Container fluid>
                <h2 className="title">Education</h2>
                <Row>
                  {education.map(key => (
                    <Col xs="12" sm="6" lg="4" xl="3" key={key}>
                      <CardEducation id={key} />
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

export default Resume
