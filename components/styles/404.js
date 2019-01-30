import styled from 'styled-components'
import { rgba } from 'polished'

export const Content404 = styled.section`
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Message = styled.div`
  position: relative;
`

export const Title = styled.h2`
  font-size: 3rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  text-align: center;
`

export const Word404 = styled.div`
  font-size: 8rem;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;

  color: ${props => rgba(props.theme.outerSpace, 0.2)};
`

export const Return = styled.p`
  margin-top: 5rem;
  font-size: 1.5rem;
`
