// Dependencies
import React from 'react'
import Link from 'next/link'
import {
  faTwitter,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'

// Components
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

// Styles
import { Home, Picture, Infos, FaIcon } from '../components/styles/Home'
import Button from '../components/styles/Button'

const index = () => (
  <div>
    <Header />
    <div className="page withSidebar">
      <Sidebar width="400px" left />
      <Home>
        <Picture>
          <div className="box" />
          <img src="/static/profil.jpg" alt="" />
          <div className="social">
            <a href="https://twitter.com/MarinoLoris" target="blank">
              <FaIcon social="twitter" icon={faTwitter} />
            </a>
            <a href="https://github.com/LorisMarino" target="blank">
              <FaIcon social="github" icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/lorismarino/" target="blank">
              <FaIcon social="linkedin" icon={faLinkedinIn} />
            </a>
          </div>
        </Picture>
        <Infos>
          <div className="top">
            <h1>
              <div className="firstName">Loris</div>
              <div className="lastName">Marino</div>
            </h1>
            <h2>Développeur front basé à Paris</h2>
          </div>
          <p>
            Passionné par la technologie, j&apos;ai découvert le monde du web et
            je n&apos;ai depuis jamais arrêté d&apos;apprendre et
            d&apos;entreprendre.
            <br />
            <br />
            Au fil du temps, je me suis orienté vers le javascript que
            j&apos;apprécie beaucoup. Ce qui m&apos;a poussé à m&apos;intérésser
            aux frameworks js ainsi qu&apos;au NodeJs.
            <br />
            <br />
            <b>
              <i>
                Je suis actuellement à la recherche d&apos;un stage de 5 mois en
                tant que développeur ReactJs / VueJs / NodeJs.
              </i>
            </b>
          </p>
          <div className="buttons">
            <Button primary>
              <Link href="/portfolio">
                <a>Portfolio</a>
              </Link>
            </Button>
            <Button>
              <Link href="/parcours">
                <a>Parcours</a>
              </Link>
            </Button>
          </div>
        </Infos>
      </Home>
    </div>
  </div>
)

export default index
