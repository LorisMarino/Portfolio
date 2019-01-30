import styled, { css } from 'styled-components'

export const InputGroupStyled = styled.div`
  display: flex;
  flex-direction: column;

  &.active {
    label {
      transform: translateY(0);
      cursor: default;
    }
  }
  label {
    cursor: text;
    transform: translateY(20px);
    transition: transform 0.2s ease-out;

    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    color: ${props => props.theme.alabaster};
    text-transform: capitalize;

    ${props =>
      props.error &&
      css`
        color: ${props.theme.cinnabar};
      `}
  }
  input {
    border-radius: 0;
    border: none;
    border-bottom: 1px solid ${props => props.theme.alabaster};
    background-color: transparent;
    padding: 5px 0;
    color: ${props => props.theme.alabaster};

    ${props =>
      props.error &&
      css`
        border-bottom: 1px solid ${props.theme.cinnabar};
      `}

    &:focus {
      outline-style: none;
    }
  }
`

export const TextGroupStyled = styled.div`
  display: flex;
  flex-direction: column;

  label {
    cursor: text;

    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    color: ${props => props.theme.alabaster};
    text-transform: capitalize;

    ${props =>
      props.error &&
      css`
        color: ${props.theme.cinnabar};
      `}
  }
  textarea {
    padding: 5px 0;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${props => props.theme.alabaster};
    background-color: transparent;
    color: ${props => props.theme.alabaster};

    ${props =>
      props.error &&
      css`
        border-bottom: 1px solid ${props.theme.cinnabar};
      `}

    &:focus {
      outline-style: none;
    }
  }
`
