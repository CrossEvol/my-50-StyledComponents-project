import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const DrawingAppBody = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  background-color: #f5f5f5;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
`

const Canvas = styled.canvas`
  border: 2px solid steelblue;
  width: 800px;
  height: 700px;
`

const Toolbox = styled.div`
  background-color: steelblue;
  border: 1px solid stateblue;
  display: flex;
  width: 804px;
  padding: 1rem;

  & > * {
    background-color: #fff;
    border: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    height: 50px;
    width: 50px;
    margin: 0.25rem;
    padding: 0.25rem;
    cursor: pointer;
  }

  & > *:last-child {
    margin-left: auto;
  }
`

const DecreaseButton = styled.button``

const IncreaseButton = styled.button``

const ColorSelect = styled.input``

const ClearButton = styled.button``

const SizeSpan = styled.span``

interface Position {
  x: number | undefined
  y: number | undefined
}

const drawCircle = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  color: string,
) => {
  ctx.beginPath()
  ctx.arc(x, y, size / 4, 0, Math.PI * 2)
  ctx.fillStyle = color
  ctx.fill()
}

const drawLine = (
  ctx: CanvasRenderingContext2D,
  p1: Position,
  p2: Position,
  color: string,
  size: number,
) => {
  ctx.beginPath()
  ctx.moveTo(p1.x as number, p1.y as number)
  ctx.lineTo(p2.x as number, p2.y as number)
  ctx.strokeStyle = color
  ctx.lineWidth = size / 2
  ctx.stroke()
}

export default function DrawingApp() {
  const [position, setPosition] = useState<Position>({
    x: 0,
    y: 0,
  })
  const [isPressed, setIsPressed] = useState<boolean>(false)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null)
  const [size, setSize] = useState<number>(10)
  const [color, setColor] = useState<string>('#000000')

  const handleInputColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value)
  }

  const handleClickIncreaseButton = () => {
    setSize(size + 5 > 50 ? 50 : size + 5)
  }

  const handleClickDecreaseButton = () => {
    setSize(size - 5 < 5 ? 5 : size - 5)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const offsetX = e.nativeEvent.offsetX
    const offsetY = e.nativeEvent.offsetY
    if (isPressed) {
      const x2 = offsetX
      const y2 = offsetY
      drawCircle(ctx as CanvasRenderingContext2D, x2, y2, size, color)
      drawLine(
        ctx as CanvasRenderingContext2D,
        position,
        { x: x2, y: y2 },
        color,
        size,
      )

      setPosition({ x: x2, y: y2 })
    }
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    console.log(`x:${e.nativeEvent.offsetX},y:${e.nativeEvent.offsetY}`)
    const offsetX = e.nativeEvent.offsetX
    const offsetY = e.nativeEvent.offsetY
    setIsPressed(true)
    setPosition({ x: undefined, y: undefined })
  }

  const handleClickClearButton = () => {
    ctx?.clearRect(
      0,
      0,
      canvasRef.current?.width as number,
      canvasRef.current?.height as number,
    )
  }

  useEffect(() => {
    if (!canvasRef.current) {
      return
    }
    setCtx(canvasRef.current?.getContext('2d') as CanvasRenderingContext2D)
    const handleDocumentMouseUp = (e: MouseEvent) => {
      setIsPressed(false)
      setPosition({ x: 0, y: 0 })
    }
    document.addEventListener('mouseup', handleDocumentMouseUp)

    return () => {
      document.removeEventListener('mouseup', handleDocumentMouseUp)
    }
  }, [])

  return (
    <DrawingAppBody>
      <Canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
      ></Canvas>
      <Toolbox>
        <DecreaseButton onClick={handleClickDecreaseButton}>-</DecreaseButton>
        <SizeSpan>{size}</SizeSpan>
        <IncreaseButton onClick={handleClickIncreaseButton}>+</IncreaseButton>
        <ColorSelect
          value={color}
          onChange={handleInputColorChange}
          type="color"
        />
        <ClearButton onClick={handleClickClearButton}>X</ClearButton>
      </Toolbox>
    </DrawingAppBody>
  )
}
