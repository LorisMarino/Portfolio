import styled from 'styled-components'
import { rgba } from 'polished'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Home = styled.main`
  display: flex;
  align-items: center;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  @media (max-width: ${props => props.theme.md}) {
    height: auto;
    top: 100px;
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: ${props => props.theme.sm}) {
    position: static;
    height: auto;
    flex-direction: column;
    justify-content: center;
  }
`

export const Picture = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 280px;
  @media (max-width: ${props => props.theme.lg}) {
    margin-left: 50px;
  }
  @media (max-width: ${props => props.theme.md}) {
    margin-left: 280px;
  }
  @media (max-width: ${props => props.theme.sm}) {
    margin-left: 0;
  }

  .box {
    position: absolute;
    top: 0;
    left: 0;
    width: 380px;
    height: 500px;
    border-radius: 2px;
    box-shadow: 0 0 10px 2px ${props => rgba(props.theme.outerSpace, 0.1)};

    @media (max-width: ${props => props.theme.sm}) {
      margin-left: 0;
      width: 300px;
      height: 420px;
      margin-bottom: 15px;
    }
  }

  img {
    width: 380px;
    height: 500px;
    object-fit: cover;
    margin-top: 30px;
    margin-left: 30px;
    border-radius: 2px;
    box-shadow: 0 0 30px ${props => rgba(props.theme.outerSpace, 0.6)};

    @media (max-width: ${props => props.theme.sm}) {
      width: 300px;
      margin-top: 15px;
      margin-left: 15px;
      height: 420px;
    }
  }

  .social {
    margin-top: 20px;
    display: flex;
    margin-left: 150px;
    font-size: 2.8rem;
    @media (max-width: ${props => props.theme.sm}) {
      margin-left: 0;
      margin-top: 10px;
      justify-content: center;
    }

    a {
      &:not(:last-child) {
        margin-right: 25px;
      }
    }

    svg {
      cursor: pointer;
      transition: color 0.2s ease;
    }
  }
`

export const Infos = styled.div`
  margin-left: 80px;
  height: 500px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: ${props => props.theme.md}) {
    margin-left: 280px;
  }
  @media (max-width: ${props => props.theme.sm}) {
    margin-left: 0;
    height: auto;
    margin: 0;
  }

  .top {
    h1 {
      font-family: 'Open Sans', sans-serif;
      text-transform: uppercase;
      font-size: 3rem;
      font-weight: 400;
      @media (max-width: ${props => props.theme.sm}) {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 15px;
      }

      .lastName {
        margin-top: 10px;
        position: relative;
        color: ${props => props.theme.poloBlue};
        @media (max-width: ${props => props.theme.sm}) {
          margin: 0;
          margin-left: 10px;
        }

        &::before {
          content: '';
          position: absolute;
          height: 4px;
          top: calc(50% - 2px);
          right: calc(100% + 10px);
          border-radius: 4px;

          background-color: ${props => props.theme.poloBlue};
          width: 60px;
          @media (max-width: ${props => props.theme.md}) {
            display: none;
          }
        }
      }
    }

    h2 {
      font-weight: 700;
      font-size: 1.6rem;
      margin-top: 30px;
      @media (max-width: ${props => props.theme.sm}) {
        width: 90%;
        margin: 0 auto;
        margin-top: 15px;
      }
    }
  }

  p {
    width: 390px;
    line-height: 20px;
    @media (max-width: ${props => props.theme.sm}) {
      width: 90%;
      margin: 0 auto;
      margin-top: 15px;
    }
  }

  .buttons {
    display: flex;
    justify-content: space-around;
    @media (max-width: ${props => props.theme.sm}) {
      margin-top: 20px;
    }
  }
`

export const FaIcon = styled(FontAwesomeIcon)`
  &:hover {
    color: ${props => props.theme[props.social]};
  }
`
