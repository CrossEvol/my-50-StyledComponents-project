import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import xboxImage from './images/xbox.jpg'
import psImage from './images/ps.jpg'

const GlobalStyle = createGlobalStyle`
  :root {
    --left-bg-color: rgba(87, 84, 236, 0.7);
    --right-bg-color: rgba(43, 43, 43, 0.8);
    --left-btn-hover-color: rgba(87, 84, 236, 1);
    --right-btn-hover-color: rgba(28, 122, 28, 1);
    --hover-width: 75%;
    --other-width: 25%;
    --speed: 1000ms;
  }

  @media(max-width: 800px){
    h1 {
        font-size: 2rem;
        top: 30%;
    }

    a {
        padding: 1.2rem;
        width: 12rem;
    }
  }
`

const SplitLandingPageBody = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  font-family: 'Roboto', sans-serif;
  height: 100vh;
  overflow: hidden;
  margin: 0;
`

const SplitLandingPageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #333;
`

const Split = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  overflow: hidden;
  background-image: url(${props => props.title});
  transition: all var(--speed) ease-in-out;
  background-repeat: no-repeat;
  background-size: cover;
`

const SplitLeft = styled(Split)`
  left: 0;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--left-bg-color);
  }

  .hover-left & {
    width: var(--hover-width);
  }

  .hover-right & {
    width: var(--other-width);
  }
`

const SplitRight = styled(Split)`
  right: 0;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--right-bg-color);
  }

  .hover-left & {
    width: var(--other-width);
  }

  .hover-right & {
    width: var(--hover-width);
  }
`

const Title = styled.h1`
  font-size: 4rem;
  color: #fff;
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translateX(-50%);
  white-space: nowrap;
`

const Button = styled.a`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  left: 50%;
  top: 40%;
  transform: translateX(-50%);
  cursor: pointer;
  color: #fff;
  border: #fff solid 0.2rem;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  width: 15rem;
  padding: 1.5rem;
`
const LeftButton = styled(Button)`
  &:hover {
    background-color: var(--left-btn-hover-color);
    border-color: var(--left-btn-hover-color);
  }
`

const RightButton = styled(Button)`
  &:hover {
    background-color: var(--right-btn-hover-color);
    border-color: var(--right-btn-hover-color);
  }
`

enum Direction {
  Left = 'left',
  Right = 'right',
}

export default function SplitLandingPage() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const handleMouseEnter = (flag: Direction) => {
    if (flag == Direction.Left) {
      containerRef.current?.classList.add('hover-left')
    }
    if (flag == Direction.Right) {
      containerRef.current?.classList.add('hover-right')
    }
  }

  const handleMouseLeave = (flag: Direction) => {
    if (flag == Direction.Left) {
      containerRef.current?.classList.remove('hover-left')
    }
    if (flag == Direction.Right) {
      containerRef.current?.classList.remove('hover-right')
    }
  }

  return (
    <SplitLandingPageBody>
      <GlobalStyle />
      <SplitLandingPageContainer ref={containerRef}>
        <SplitLeft
          onMouseEnter={() => handleMouseEnter(Direction.Left)}
          onMouseLeave={() => handleMouseLeave(Direction.Left)}
          title={psImage}
        >
          <Title>Playstation 5</Title>
          <LeftButton href="https://www.bilibili.com/">Buy Now</LeftButton>
        </SplitLeft>
        <SplitRight
          onMouseEnter={() => handleMouseEnter(Direction.Right)}
          onMouseLeave={() => handleMouseLeave(Direction.Right)}
          title={xboxImage}
        >
          <Title>XBox Series X</Title>
          <RightButton href="https://www.zhihu.com/">Buy Now</RightButton>
        </SplitRight>
      </SplitLandingPageContainer>
    </SplitLandingPageBody>
  )
}
