import React, { useEffect, useRef, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  @keyframes scale {
    to {
        transform: translate(-50%,-50%) scale(3);
        opacity: 0;
    }
  }
`

const ButtonRippleEffectBody = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  font-family: 'Roboto', sans-serif;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
`

const RippleButton = styled.button`
  background-color: purple;
  color: #fff;
  border: 1px solid purple;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 20px 30px;
  overflow: hidden;
  margin: 10px 0;
  position: relative;

  &:focus {
    outline: none;
  }
`

const Circle = styled.span`
  position: absolute;
  background-color: #fff;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  transform: translate(-50%, -50%, scale(0));
  animation: scale 0.5s ease-out;
`

export default function ButtonRippleEffect() {
  const [flag, setFlag] = useState<boolean>(false)
  const [circleX, setCircleX] = useState<number>(0)
  const [circleY, setCircleY] = useState<number>(0)
  const circleRef = useRef<HTMLSpanElement>(null)
  let timeoutId: NodeJS.Timeout | undefined = undefined

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>,
  ) => {
    setFlag(true)
    setCircleX(e.pageX - e.currentTarget.offsetLeft - 50)
    setCircleY(e.pageY - e.currentTarget.offsetTop - 50)
  }

  useEffect(() => {
    if (flag) {
      timeoutId = setTimeout(() => {
        setFlag(false)
      }, 450)
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [flag])

  return (
    <ButtonRippleEffectBody>
      <GlobalStyle />
      <RippleButton
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)}
      >
        Click Me{' '}
        {flag && (
          <Circle
            style={{
              top: circleY + 'px',
              left: circleX + 'px',
            }}
            ref={circleRef}
          />
        )}
      </RippleButton>
    </ButtonRippleEffectBody>
  )
}
