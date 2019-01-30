import styled from 'styled-components'

export const ContactStyled = styled.main`
  display: flex;
  align-items: center;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  @media (max-width: ${props => props.theme.sm}) {
    position: static;
    height: auto;
    display: block;
  }
  .contactContainer {
    display: flex;
    align-items: flex-start;
    @media (max-width: ${props => props.theme.sm}) {
      flex-direction: column-reverse;
    }
  }
`

export const ContactForm = styled.form`
  width: 380px;
  margin-left: 280px;
  padding: 20px;
  border-radius: 3px;
  background-color: ${props => props.theme.outerSpace};
  @media (max-width: ${props => props.theme.lg}) {
    margin-left: 100px;
  }
  @media (max-width: ${props => props.theme.sm}) {
    margin: 0 auto;
    width: 80%;
  }

  h2 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    color: ${props => props.theme.alabaster};
    font-size: 2rem;
    margin-bottom: 25px;
  }

  .marginTop {
    margin-top: 30px;
  }

  .success {
    color: ${props => props.theme.apple};
    font-size: 1.5rem;
    margin-top: 15px;
  }

  .error {
    color: ${props => props.theme.cinnabar};
    font-size: 1.5rem;
    margin-top: 5px;
  }
`

export const SendButton = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`
