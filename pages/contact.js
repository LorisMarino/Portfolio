// Dependencies
import React, { Component } from 'react'
import axios from 'axios'
import Head from 'next/head'

// Components
import Sidebar from '../components/Sidebar'
import InputGroup from '../components/InputGroup'
import TextGroup from '../components/TextGroup'
import Header from '../components/Header'

// Styles
import {
  ContactStyled,
  ContactForm,
  SendButton,
} from '../components/styles/Contact'
import Button from '../components/styles/Button'
import { CardInfosContact } from '../components/styles/Cards'

class Contact extends Component {
  constructor() {
    super()
    this.state = {
      name: null,
      email: null,
      subject: null,
      text: null,
      isSend: false,
      errorEmail: null,
      errorSend: null,
    }
    this.contactForm = React.createRef()
  }

  submitContact = () => {
    const { name, email, subject, text, errorSend } = this.state

    if (name && email && subject && text) {
      const testEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      if (!testEmail.test(email))
        this.setState({
          errorEmail: 'Veuillez entrer une adresse email valide.',
        })
      else {
        axios.post('/api/contact', this.state).then(response => {
          if (response.data === 'error') {
            this.setState({
              errorSend,
            })
          } else if (response.data === 'success') {
            this.setState({ isSend: true })
            this.setState({
              errorEmail: null,
            })
          }
        })
      }
    }
  }

  render() {
    const { isSend, errorEmail, errorSend } = this.state
    let status
    let errorEmailMessage

    if (isSend) {
      status = <p className="success">Votre message a été envoyé.</p>
      this.contactForm.current.reset()
    }

    if (errorSend) {
      status = <p className="error">Il y a une erreur.</p>
    }

    if (errorEmail) {
      errorEmailMessage = <p className="error">{errorEmail}</p>
    }
    return (
      <div>
        <Head>
          <title>Loris Marino | Contact</title>
        </Head>
        <Header />
        <div className="page withSidebar">
          <Sidebar width="400px" left />
          <ContactStyled>
            <div className="contactContainer">
              <ContactForm
                ref={this.contactForm}
                onSubmit={event => event.preventDefault()}
              >
                <h2>Laissez-moi un message</h2>
                <InputGroup
                  fieldValue={value => this.setState({ name: value })}
                  name="name"
                  viewName="Nom"
                />
                <div className="marginTop">
                  <InputGroup
                    error={!!errorEmail}
                    fieldValue={value => this.setState({ email: value })}
                    name="email"
                    viewName="Email"
                  />
                  {errorEmailMessage}
                </div>
                <div className="marginTop">
                  <InputGroup
                    fieldValue={value => this.setState({ subject: value })}
                    name="subject"
                    viewName="Sujet"
                  />
                </div>
                <div className="marginTop">
                  <TextGroup
                    fieldValue={value => this.setState({ text: value })}
                    name="text"
                    viewName="Message"
                  />
                </div>

                {status}

                <SendButton>
                  <Button
                    type="submit"
                    onClick={this.submitContact}
                    primary
                    small
                  >
                    Envoyer
                  </Button>
                </SendButton>
              </ContactForm>
              <CardInfosContact>
                <strong>Email</strong>
                <a href="mailto:contact@lorismarino.fr">
                  contact@loris-marino.fr
                </a>
                <strong>Téléphone</strong>
                <p>
                  <a href="tel:0677953511">06.77.95.35.11</a>
                </p>
              </CardInfosContact>
            </div>
          </ContactStyled>
        </div>
      </div>
    )
  }
}

export default Contact
