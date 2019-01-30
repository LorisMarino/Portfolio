import styled, { keyframes } from 'styled-components'
import { rgba } from 'polished'

const animateSlide = keyframes`
  from {
    transform: translateX(0);
  }
  50% {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`

export const MainImage = styled.section`
  position: relative;
  overflow: hidden;
  height: 300px;
  .return {
    position: absolute;
    top: 40px;
    left: 40px;
    z-index: 2;
    font-size: 3rem;
    color: ${props => props.theme.outerSpace};
  }
`

export const MainImageBg = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  filter: blur(10px);
  width: calc(100% + 20px);
  position: absolute;
  top: 0;
  left: -10px;
  height: 100%;
  background-position: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    bottom: 0;
    right: 0;
    background-color: ${props => rgba(props.theme.outerSpace, 0.5)};
  }
`

export const Slider = styled.section`
  position: relative;

  .title {
    text-align: center;
    margin-top: 50px;
  }

  .sliderContainer {
    background-color: ${props => rgba(props.theme.outerSpace, 0.02)};
    cursor: ${props => (props.cursor ? 'move' : null)};
    height: 270px;
    position: relative;
    overflow: hidden;
  }

  .animateSlide {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 30px;

    svg {
      width: 1.2rem;
      height: 1.2rem;
      animation: ${animateSlide} 2s cubic-bezier(0.2, 0.85, 0.21, 0.94) infinite;
    }
  }

  .slider {
    position: absolute;
    transition: left cubic-bezier(0.3, 0.8, 0.8, 1) 0.7s;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: grid;
    align-items: center;
    left: ${props => props.left};
    grid-template-columns: repeat(${props => props.number}, ${100 / 3}%);
    @media (max-width: ${props => props.theme.sm}) {
      grid-template-columns: repeat(${props => props.number}, 100%);
    }

    .image {
      text-align: center;
      img {
        width: 70%;
        height: 210px;
        object-fit: cover;
      }
    }
  }
`

export const Description = styled.section`
  margin-top: 50px;

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
    margin-top: 25px;
    position: relative;
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
