import React, { useEffect, useRef, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import './index.css'

const GlobalStyle = createGlobalStyle`
  :root {
  --line-border-fill: #3498db;
  --line-border-empty: #383838;
}
`

const ProgressStepsBody = styled.div`
  background-color: #1f1f1f;
  font-family: 'Muli', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
`

const Container = styled.div`
  text-align: center;
`

const ProgressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 30px;
  max-width: 100%;
  width: 350px;

  &::before {
    content: '';
    background-color: var(--line-border-empty);
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 4px;
    width: 100%;
    z-index: -1;
  }
`

const Progress = styled.div`
  background-color: var(--line-border-fill);
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: 0;
  z-index: -1;
  transition: 0.4s ease;
`

const Circle = styled.div`
  background-color: #1f1f1f;
  color: #e2e2e2;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid
    ${props =>
      props.className?.includes('active')
        ? 'var(--line-border-fill)'
        : 'var(--line-border-empty)'};
  transition: 0.4s ease;
`

const Button = styled.button`
  background-color: ${props =>
    props.disabled ? 'var(--line-border-empty)' : 'var(--line-border-fill)'};
  color: #fff;
  border: 0;
  border-radius: 6px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  font-family: inherit;
  padding: 8px 30px;
  margin: 5px;
  font-size: 14px;
  transform: scale(${props => props.className?.includes('active') && 0.98});
`

interface CircleItem {
  id: number
  active: boolean
  content: string
}

const circleList: CircleItem[] = [
  { id: 1, active: true, content: '1' },
  { id: 2, active: false, content: '2' },
  { id: 3, active: false, content: '3' },
  { id: 4, active: false, content: '4' },
]

export default function ProgressSteps() {
  const [circles, setCircles] = useState<CircleItem[]>(circleList)
  const progressRef = useRef()

  function handlePrevClick() {
    // TODO:ts中缺少一些方法，比如findLastIndex，而lastIndexOf需要严格匹配
    circles.reverse()
    const targetIndex = circles.findIndex(item => item.active)
    setCircles(
      circles
        .map((circle, index) =>
          index === targetIndex ? { ...circle, active: false } : circle,
        )
        .reverse(),
    )
  }

  function handleNextClick() {
    const targetIndex = circles.findIndex(item => !item.active)
    setCircles(
      circles.map((circle, index) =>
        index === targetIndex ? { ...circle, active: true } : circle,
      ),
    )
  }

  const activeCircleLength = circles.filter(item => item.active).length

  return (
    <ProgressStepsBody>
      <Container>
        <GlobalStyle />
        <ProgressContainer>
          <Progress
            style={{
              width:
                ((activeCircleLength - 1) / (circles.length - 1)) * 100 + '%',
            }}
            id="progress"
          />
          {circles.map(circle => {
            return (
              <Circle key={circle.id} className={circle.active ? 'active' : ''}>
                {circle.content}
              </Circle>
            )
          })}
        </ProgressContainer>
        <Button
          onClick={handlePrevClick}
          disabled={activeCircleLength === 1 ? true : false}
        >
          Prev
        </Button>
        <Button
          onClick={handleNextClick}
          disabled={activeCircleLength === 4 ? true : false}
        >
          Next
        </Button>
      </Container>
    </ProgressStepsBody>
  )
}
