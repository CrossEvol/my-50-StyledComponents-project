import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @keyframes rotateA {
    0%,
    25% {
        transform: rotate(0deg);
    }

    50%,
    75% {
        transform: rotate(180deg);
    }

    
    100% {
        transform: rotate(360deg);
    }
  }

  @keyframes rotateB {
    0%,
    25% {
        transform: rotate(90deg);
    }

    50%,
    75% {
        transform: rotate(270deg);
    }

    
    100% {
        transform: rotate(450deg);
    }
  }
`

const KineticLoaderBody = styled.div`
  background-color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
`

const Kinetic = styled.div`
  position: relative;
  width: 80px;
  height: 80px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-bottom-color: #fff;
    animation: rotateA 2s linear infinite 0.5s;
  }

  &::before {
    transform: rotate(90deg);
    animation: rotateB 2s linear infinite;
  }
`

export default function KineticLoader() {
  return (
    <KineticLoaderBody>
      <GlobalStyle />
      <Kinetic />
    </KineticLoaderBody>
  )
}
