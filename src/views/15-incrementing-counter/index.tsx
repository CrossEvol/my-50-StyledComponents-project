import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BirdIcon from './svg/BirdIcon'
import VideoIcon from './svg/VideoIcon'
import FacebookIcon from './svg/FaceBook'

const IncrementingCounterBody = styled.div`
  @media (max-width: 580px) {
    flex-direction: column;
  }

  background-color: #8e44ad;
  color: #fff;
  font-family: 'Roboto Mono', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
`

const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 30px 50px;
`

const Counter = styled.div`
  font-size: 60px;
  margin-top: 10px;
`

interface Item {
  id: number
  title: string
  dataTarget: number
  svgIcon: JSX.Element
}

const items: Item[] = [
  {
    id: 1,
    title: 'Twitter Followers',
    dataTarget: 12000,
    svgIcon: <BirdIcon />,
  },
  {
    id: 2,
    title: 'YouTube Subscribers',
    dataTarget: 5000,
    svgIcon: <VideoIcon />,
  },
  {
    id: 3,
    title: 'Facebook Fans',
    dataTarget: 7500,
    svgIcon: <FacebookIcon />,
  },
]

export default function IncrementingCounter() {
  const [countList, setCountList] = useState<number[]>([0, 0, 0])

  useEffect(() => {
    const dataTargetList = items.map(item => item.dataTarget)

    const newCountList = countList
    const updateCounter = (current: number, target: number, index: number) => {
      const increment = target / 200
      if (current < target) {
        const next = Math.ceil(current + increment)
        newCountList[index] = next
        console.log(newCountList)
        setCountList({ ...newCountList })
        setTimeout(() => updateCounter(next, target, index), 1)
      } else {
        newCountList[index] = target
        setCountList({ ...newCountList })
      }
    }

    countList.forEach((count, index) => {
      updateCounter(count, dataTargetList[index], index)
    })

    return () => {}
  }, [])

  return (
    <IncrementingCounterBody>
      {items.map(item => {
        return (
          <CounterContainer key={item.id}>
            {item.svgIcon}
            <Counter>{countList[item.id - 1]}</Counter>
            <span>{item.title}</span>
          </CounterContainer>
        )
      })}
    </IncrementingCounterBody>
  )
}
