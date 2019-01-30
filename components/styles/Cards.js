import styled from 'styled-components'
import { rgba } from 'polished'

export const CardResumeStyled = styled.div`
  box-shadow: 2px 10px 35px ${props => rgba(props.theme.outerSpace, 0.15)};
  background-color: #fff;
  width: 100%;
  font-weight: 700;
  padding: 15px;
  border-radius: 5px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-size: 1.8rem;
    text-transform: uppercase;
    color: ${props => props.theme.poloBlue};
  }

  strong {
    display: block;
    margin-top: 10px;
  }

  p {
    font-weight: 300;
    margin-top: 10px;
  }
`

export const CardPortfolioStyled = styled.div`
  border-radius: 5px;
  box-shadow: 5px 5px 25px ${props => rgba(props.theme.outerSpace, 0.5)};
  background-color: #fff;
  height: 100%;
  padding-bottom: 60px;
  position: relative;
  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 100%;
    height: 200px;
    object-fit: cover;
    filter: grayscale(0.7);
    cursor: pointer;
    transition: filter 0.3s ease-out;
    &:hover {
      filter: grayscale(0);
    }
  }

  .cardContent {
    width: 85%;
    margin: 0 auto;
    position: relative;
  }

  h2 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    margin-top: 20px;
  }

  p {
    margin-top: 20px;
    line-height: 18px;
    text-align: justify;
  }

  .description {
    font-size: 1.5rem;
  }
  .tags {
    margin-top: 15px;
    strong {
      &:not(:first-child) {
        margin-left: 10px;
      }
      font-family: 'Open Sans', sans-serif;
      font-weight: 700;
      font-size: 1.3rem;
    }
  }
  .demo {
    left: 7.5%;
    position: absolute;
    bottom: 10px;
    display: inline-block;
    font-size: 1.6rem;
    &::before {
      transition: width 0.5s cubic-bezier(0.02, 0.65, 0.38, 0.86);
      position: absolute;
      content: '';
      bottom: 0;
      left: 0;
      background-color: ${props => rgba(props.theme.poloBlue, 0.5)};
      width: 50%;
      height: 8px;
    }
    &:hover {
      &::before {
        width: 100%;
      }
    }
  }
`

export const CardLabStyled = styled.div`
  border-radius: 5px;
  box-shadow: 5px 5px 25px ${props => rgba(props.theme.outerSpace, 0.5)};
  background-color: #fff;
  height: 100%;
  padding-bottom: ${props => (props.demogithub ? '120px' : '60px')};
  position: relative;
  .image {
    padding-top: 100%;
    position: relative;
  }
  img {
    width: 100%;
    vertical-align: top;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }

  .cardContent {
    width: 85%;
    margin: 0 auto;
    position: relative;
  }

  h2 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    margin-top: 20px;
  }

  p {
    margin-top: 20px;
    line-height: 18px;
    text-align: justify;
  }

  .description {
    font-size: 1.5rem;
  }
  .tags {
    margin-top: 15px;
    strong {
      &:not(:first-child) {
        margin-left: 10px;
      }
      font-family: 'Open Sans', sans-serif;
      font-weight: 700;
      font-size: 1.3rem;
    }
  }

  .links {
    position: absolute;
    bottom: 10px;
    left: 7.5%;
  }

  .demo {
    position: relative;
    display: block;
    font-size: 1.6rem;
    &:not(:first-child) {
      margin-top: 10px;
    }
    &::before {
      transition: width 0.5s cubic-bezier(0.02, 0.65, 0.38, 0.86);
      position: absolute;
      content: '';
      bottom: 0;
      left: 0;
      background-color: ${props => rgba(props.theme.poloBlue, 0.5)};
      width: 50%;
      height: 8px;
    }
    &:hover {
      &::before {
        width: 100%;
      }
    }
  }
`
export const CardInfosContact = styled.div`
  box-shadow: 2px 10px 35px ${props => rgba(props.theme.outerSpace, 0.15)};
  background-color: #fff;
  margin-top: 50px;
  margin-left: 25px;
  align-self: flex-start;
  padding: 25px;
  width: 400px;
  border-radius: 5px;
  font-size: 1.5rem;

  @media (max-width: ${props => props.theme.lg}) {
    width: 330px;
  }

  @media (max-width: ${props => props.theme.md}) {
    width: 230px;
  }

  @media (max-width: ${props => props.theme.sm}) {
    margin: 0 auto;
    width: 80%;
    margin-bottom: 30px;
  }

  strong:not(:first-child) {
    margin-top: 20px;
    display: inline-block;
  }

  a {
    display: block;
    margin-top: 5px;
  }
`
