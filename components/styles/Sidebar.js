import styled from 'styled-components'

export const SidebarContainer = styled.aside`
  width: ${props => props.width};

  @media (max-width: ${props => props.theme.sm}) {
    display: none;
  }
  .sidebar {
    background: linear-gradient(to bottom, #accbee, #e7f0fd);
    width: ${props => props.width};
    justify-content: ${props => (props.left ? '' : 'center')};
    z-index: -1;
    display: flex;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`

export const LogoStyled = styled.div`
  margin-top: 20px;
  svg {
    margin-left: ${props => (props.left ? '50px' : '')};
    width: 60px;
    height: 60px;

    @media (max-width: ${props => props.theme.sm}) {
      display: none;
    }
  }
`
