import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  right: 40px;
  display: flex;
  height: 70px;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: ${props => props.theme.sm}) {
    position: static;
    height: auto;
    padding: 20px;
    justify-content: center;
    flex-direction: column;
  }
`

export const LogoMobile = styled.div`
  svg {
    display: none;

    @media (max-width: ${props => props.theme.sm}) {
      width: 70px;
      height: 70px;
      margin-bottom: 20px;
      display: block;
    }
  }
`

export const Nav = styled.nav`
  margin-top: 20px;
  @media (max-width: ${props => props.theme.sm}) {
    margin: 0;
  }

  li {
    a {
      text-transform: uppercase;
      color: ${props => props.theme.outerSpace};
      transition: color 0.3s ease-in-out;
      &.active,
      &:hover {
        color: ${props => props.theme.poloBlue};
      }

      &.active {
        position: relative;

        &::after {
          content: '';
          position: absolute;
          top: calc(100% + 3px);
          width: 40%;
          height: 1px;
          background-color: ${props => props.theme.poloBlue};
          left: 30%;
        }
      }
    }
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`
