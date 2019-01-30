import styled from 'styled-components'
import { darken } from 'polished'

export default styled.button`
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  border: none;
  text-transform: uppercase;
  border-radius: 50px;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.6rem;
  background-color: ${props => (props.primary ? props.theme.poloBlue : '#fff')};
  color: ${props => (props.primary ? props.theme.alabaster : '')};
  width: ${props => (props.small ? '140px' : '170px')};
  height: ${props => (props.small ? '40px' : '50px')};
  border: ${props =>
    props.primary ? '' : `1px solid ${props.theme.poloBlue}`};

  @media (max-width: ${props => props.theme.sm}) {
    width: 140px;
    height: 40px;
  }

  &:hover {
    background-color: ${props =>
      props.primary ? darken(0.05, props.theme.poloBlue) : ''};
  }
`
