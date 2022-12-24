import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const BlurryLoadingContainer = styled.div`
  font-family: 'Ubuntu', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
`

const BGSection = styled.section`
  background: url(${props => props.title};) no-repeat center center/cover;
  position: absolute;
  top: -30px;
  left: -30px;
  width: calc(100vw + 60px);
  height: calc(100vh + 60px);
  z-index: -1;
  filter: ${props => props['aria-keyshortcuts']};
`

const LoadingText = styled.div`
  font-size: 50px;
  color: #fff;
  opacity: ${props => props['aria-level']}; ;
`

const bgUrl =
  'https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80'

const scale = (
  num: number,
  in_min: number,
  in_max: number,
  out_min: number,
  out_max: number,
) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

export default function BlurryLoading() {
  let intervalId: NodeJS.Timer
  const [load, setLoad] = useState<number>(0)

  useEffect(() => {
    intervalId = setInterval(() => {
      if (load < 100) {
        setLoad(load + 1)
      }
    }, 30)
    return () => {
      clearInterval(intervalId)
    }
  }, [load])

  return (
    <BlurryLoadingContainer>
      <BGSection
        aria-keyshortcuts={`blur(${scale(load, 0, 100, 30, 0)}px)`}
        title={bgUrl}
      ></BGSection>
      <LoadingText aria-level={scale(load, 0, 100, 1, 0)}>{load}%</LoadingText>
    </BlurryLoadingContainer>
  )
}
