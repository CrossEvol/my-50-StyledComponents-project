import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import yumikoImage from './yumiko.jpg'

const DragAndDropBody = styled.div`
  background-color: steelblue;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
`

const GlobalStyle = createGlobalStyle`
  @media(max-width:800px){
    ${DragAndDropBody}{
        flex-direction: column;
    }
  }
`

const EmptyBox = styled.div`
  height: 150px;
  width: 150px;
  margin: 10px;
  border: 3px solid black;
  background-color: white;

  &.hovered {
    background-color: #333;
    border-color: white;
    border-style: dashed;
  }
`

const FillBox = styled.div`
  background-image: url(${yumikoImage});
  background-repeat: round;
  /* background-image: url('https://source.unsplash.com/random/150x150'); */
  height: 145px;
  width: 145px;
  cursor: pointer;

  &.hold {
    border: 5px solid #ccc;
  }

  &.invisible {
    visibility: hidden;
  }
`

interface BoxItem {
  id: number
  hasSubFillBox: boolean
  isHeld: boolean
  isHovered: boolean
  isInvisible: boolean
}

const initialBoxItems: BoxItem[] = [
  {
    id: 1,
    hasSubFillBox: true,
    isHeld: false,
    isHovered: false,
    isInvisible: false,
  },
  {
    id: 2,
    hasSubFillBox: false,
    isHeld: false,
    isHovered: false,
    isInvisible: false,
  },
  {
    id: 3,
    hasSubFillBox: false,
    isHeld: false,
    isHovered: false,
    isInvisible: false,
  },
  {
    id: 4,
    hasSubFillBox: false,
    isHeld: false,
    isHovered: false,
    isInvisible: false,
  },
  {
    id: 5,
    hasSubFillBox: false,
    isHeld: false,
    isHovered: false,
    isInvisible: false,
  },
]

export default function DragAndDrop() {
  const [boxItems, setBoxItems] = useState<BoxItem[]>(initialBoxItems)

  const handleDragStart = (boxItemId: number) => {
    setBoxItems(
      boxItems.map(boxItem =>
        boxItem.id === boxItemId
          ? { ...boxItem, isHeld: true }
          : { ...boxItem, isHeld: false },
      ),
    )
    setTimeout(() => {
      setBoxItems(
        boxItems.map(boxItem =>
          boxItem.id === boxItemId
            ? { ...boxItem, isInvisible: true }
            : { ...boxItem, isInvisible: false },
        ),
      )
    }, 0)
  }
  const handleDragEnd = () => {
    setBoxItems(boxItems.map(boxItem => ({ ...boxItem, isHeld: false })))
  }
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }
  const handleDragEnter = (
    e: React.DragEvent<HTMLDivElement>,
    boxItemId: number,
  ) => {
    e.preventDefault()
    setBoxItems(
      boxItems.map(boxItem =>
        boxItem.id === boxItemId
          ? { ...boxItem, isHovered: true }
          : { ...boxItem, isHovered: false },
      ),
    )
  }
  const handleDragLeave = () => {
    setBoxItems(boxItems.map(boxItem => ({ ...boxItem, isHovered: false })))
  }

  const handleDrop = (boxItemId: number) => {
    setBoxItems(
      boxItems.map(boxItem =>
        boxItem.id === boxItemId
          ? { ...boxItem, hasSubFillBox: true, isHovered: false }
          : { ...boxItem, hasSubFillBox: false, isHovered: false },
      ),
    )
  }

  return (
    <DragAndDropBody>
      <GlobalStyle />
      {boxItems.map(boxItem => (
        <EmptyBox
          key={boxItem.id}
          className={boxItem.isHovered ? 'hovered' : ' '}
          onDragOver={handleDragOver}
          onDragEnter={(e: React.DragEvent<HTMLDivElement>) =>
            handleDragEnter(e, boxItem.id)
          }
          onDragLeave={handleDragLeave}
          onDrop={() => handleDrop(boxItem.id)}
        >
          {boxItem.hasSubFillBox && (
            <FillBox
              className={`${boxItem.isHeld ? 'hold' : ' '} ${
                boxItem.isInvisible ? 'invisible' : ' '
              }`}
              draggable="true"
              onDragStart={() => {
                handleDragStart(boxItem.id)
              }}
              onDragEnd={handleDragEnd}
            ></FillBox>
          )}
        </EmptyBox>
      ))}
    </DragAndDropBody>
  )
}
