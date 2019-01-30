import React from 'react'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/pro-solid-svg-icons'

import {
  Content404,
  Message,
  Title,
  Word404,
  Return,
} from '../components/styles/404'

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const index = () => (
  <div>
    <Header />
    <div className="page withSidebar">
      <Sidebar width="100px" left />
      <main className="content">
        <Content404>
          <Message>
            <Word404>
              <FontAwesomeIcon icon={faExclamationTriangle} />
            </Word404>
            <Title>Il semblerait que vous vous soyez égaré.</Title>
          </Message>
          <Return>
            <Link href="/">
              <a>Retournez à l&apos;accueil</a>
            </Link>
          </Return>
        </Content404>
      </main>
    </div>
  </div>
)

export default index
