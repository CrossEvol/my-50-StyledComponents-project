import React, { useState } from 'react'
import styled from 'styled-components'
import LeftArrowIcon from './svg/LeftArrowIcon'
import RightArrowIcon from './svg/RightArrowIcon'

const BackgroundSliderBody = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  background-position: center center;
  background-size: cover;
  transition: 0.4s;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }
`

const SlideContainer = styled.div`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  height: 70vh;
  width: 70vw;
  position: relative;
  overflow: hidden;
`

const Slide = styled.div`
  opacity: 0;
  height: 100vh;
  width: 100vw;
  background-position: center center;
  background-size: cover;
  position: absolute;
  top: -15vh;
  left: -15vw;
  transition: 0.4s ease;
  z-index: 10;

  &.active {
    opacity: 1;
  }
`

const Arrow = styled.button`
  position: fixed;
  background-color: transparent;
  color: #fff;
  padding: 20px;
  font-size: 30px;
  border: 2px solid orange;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 9;

  &:focus {
    outline: 0;
  }
`

const LeftArrow = styled(Arrow)`
  left: calc(15vw - 65px);
`

const RightArrow = styled(Arrow)`
  right: calc(15vw - 65px);
`
interface BackImage {
  id: number
  imgUrl: string
  order: number
}

const backImages: BackImage[] = [
  {
    id: 1,
    imgUrl:
      'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    order: 1,
  },
  {
    id: 2,
    imgUrl:
      'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
    order: 2,
  },
  {
    id: 3,
    imgUrl:
      'https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    order: 3,
  },
  {
    id: 4,
    imgUrl:
      'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',
    order: 4,
  },
  {
    id: 5,
    imgUrl:
      'https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    order: 5,
  },
]

export default function BackgroundSlider() {
  const [activeNum, setActiveNum] = useState<number>(1)

  const handleClickLeftArrow = () => {
    if (activeNum === 1) {
      setActiveNum(backImages.length)
    } else {
      setActiveNum(activeNum - 1)
    }
  }

  const handleClickRightArrow = () => {
    if (activeNum === backImages.length) {
      setActiveNum(1)
    } else {
      setActiveNum(activeNum + 1)
    }
  }

  return (
    <BackgroundSliderBody
      style={{
        backgroundImage: `url(${
          backImages.find(item => item.order === activeNum)?.imgUrl
        })`,
      }}
    >
      <SlideContainer>
        {backImages.map(item => (
          <Slide
            className={item.order === activeNum ? 'active' : ' '}
            style={{ backgroundImage: `url(${item.imgUrl})` }}
            key={item.id}
          ></Slide>
        ))}
        <LeftArrow onClick={handleClickLeftArrow}>
          <LeftArrowIcon />
        </LeftArrow>
        <RightArrow onClick={handleClickRightArrow}>
          <RightArrowIcon />
        </RightArrow>
      </SlideContainer>
    </BackgroundSliderBody>
  )
}
