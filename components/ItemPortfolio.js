// Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrows } from '@fortawesome/pro-solid-svg-icons'
import { Container, Row, Col } from 'reactstrap'
import Link from 'next/link'
import Head from 'next/head'

// Config
import base from '../base'

// Styles
import {
  MainImage,
  MainImageBg,
  Slider,
  Description,
} from './styles/ItemPortfolio'

class ItemPortfolio extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  }

  constructor() {
    super()
    this.state = {
      startMove: 0,
      endMove: 0,
      actual: 1,
    }
  }

  componentDidMount() {
    const { id } = this.props
    this.ref = base.syncState(`portfolio/${id}`, {
      context: this,
      state: 'data',
    })
  }

  sliderScroll = () => {
    const { startMove, endMove, actual, data } = this.state
    if (startMove < endMove && actual > 1) {
      this.setState({ actual: actual - 1 })
    } else if (startMove > endMove && actual < data.images.length - 2) {
      this.setState({ actual: actual + 1 })
    }
  }

  render() {
    const { actual, data } = this.state

    let animateSlide

    if (data && Object.keys(data.images).length > 2) {
      animateSlide = (
        <div className="animateSlide">
          <FontAwesomeIcon icon={faArrows} className="animateSlide" />
        </div>
      )
    }

    if (!data) return ''
    const tags = data.tags.split(',')
    return (
      <div className="itemPortolio">
        <Head>
          <title>Loris Marino | {data.name}</title>
        </Head>
        <MainImage>
          <MainImageBg url={data.mainImage} />
          <Link href="/portfolio">
            <a>
              <FontAwesomeIcon icon={faArrowLeft} className="return" />
            </a>
          </Link>
        </MainImage>

        <Slider
          cursor={Object.keys(data.images).length > 2 ? 1 : 0}
          left={`-${(100 / 3) * (actual - 1)}%`}
          number={Object.keys(data.images).length + 1}
          onMouseDown={event => this.setState({ startMove: event.pageX })}
          onMouseUp={event =>
            this.setState({ endMove: event.pageX }, this.sliderScroll)
          }
        >
          <div className="title">{data.name}</div>
          <div className="sliderContainer">
            {animateSlide}

            <div className="slider">
              <div className="image">
                <img draggable="false" src={data.mainImage} alt={data.name} />
              </div>
              {Object.keys(data.images).map(key => (
                <div className="image" key={key}>
                  <img draggable="false" src={data.images[key]} alt="" />
                </div>
              ))}
            </div>
          </div>
        </Slider>
        <Description>
          <Container>
            <Row>
              <Col xs="12" md="5">
                <p>{data.description}</p>
                <div className="tags">
                  {tags.map(tag => (
                    <strong key={tag}>#{tag}</strong>
                  ))}
                </div>
                <a href={data.demo} target="blank" className="demo">
                  View the demo
                </a>
              </Col>
            </Row>
          </Container>
        </Description>
      </div>
    )
  }
}

export default ItemPortfolio
