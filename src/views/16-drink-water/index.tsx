import React, { useState } from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
  --border-color: #144fc6;
  --fill-color: #6ab3f8;
}
`

const DrinkWaterBody = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');
  font-family: 'Montserrat', sans-serif;
  background-color: #3494e4;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
  height: 100vh;
`

const Title = styled.h1`
  margin: 10px 0 0;
`

const SubTitle = styled.h3`
  font-weight: 400;
  margin: 10px 0;
`

const Text = styled.p`
  text-align: center;
  margin: 0 0 5px;
`

const Cup = styled.div`
  background-color: #fff;
  border: 4px solid var(--border-color);
  color: var(--border-color);
  border-radius: 0 0 40px 40px;
  height: 330px;
  width: 150px;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const SmallCup = styled(Cup)`
  height: 95px;
  width: 50px;
  border-radius: 0 0 15px 15px;
  background-color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 5px;
  transition: 0.3s ease;

  &.full {
    background-color: var(--fill-color);
    color: #fff;
  }
`

const Cups = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 280px;
`

const Remained = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 0;
  flex: 1;
  transition: 0.3s ease;
`

const RemainedSpan = styled.span`
  font-size: 20px;
  font-weight: bold;
`

const RemainedSmall = styled.small`
  font-size: 12px;
`

const Percentage = styled.div`
  background-color: var(--fill-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 30px;
  height: 0px;
  transition: 0.3s ease;
`

interface CupItem {
  id: number
  isFull: boolean
}

const cupItems: CupItem[] = [
  { id: 1, isFull: false },
  { id: 2, isFull: false },
  { id: 3, isFull: false },
  { id: 4, isFull: false },
  { id: 5, isFull: false },
  { id: 6, isFull: false },
  { id: 7, isFull: false },
  { id: 8, isFull: false },
]

export default function DrinkWater() {
  const [cupList, setCupList] = useState<CupItem[]>(cupItems)

  const totalCupCount = cupList.length

  const fullCupCount = cupList.filter(item => item.isFull).length

  const remainedCapacity = 2 - 0.25 * fullCupCount

  const percentageNum = (fullCupCount / totalCupCount) * 100

  const handleClickSmallCup = (cupItem: CupItem) => {
    /* 
    1. 点击一个瓶子，这个瓶子还没满，那么这个瓶子之前的以及整个瓶子都满了，之后的都没满
    2. 如果点击一个瓶子，这个瓶子的下一个瓶子满了，那么这个瓶子以后的都变为空瓶
    3. 如果点击一个瓶子，这个瓶子的下一个瓶子没有满，那么这个瓶子之前的要变为满，自身及之后的要变为空
    */
    let newCupList: CupItem[] = []
    if (!cupItem.isFull) {
      newCupList = cupList.map(item =>
        item.id <= cupItem.id
          ? { ...item, isFull: true }
          : { ...item, isFull: false },
      )
    } else {
      if (cupList.find(item => item.id === cupItem.id + 1)?.isFull) {
        newCupList = cupList.map(item =>
          item.id <= cupItem.id
            ? { ...item, isFull: true }
            : { ...item, isFull: false },
        )
      } else {
        newCupList = cupList.map(item =>
          item.id < cupItem.id
            ? { ...item, isFull: true }
            : { ...item, isFull: false },
        )
      }
    }
    setCupList(newCupList)
  }

  return (
    <DrinkWaterBody>
      <GlobalStyle />
      <Title>Drink Water</Title>
      <SubTitle>Goal: 2 Liters</SubTitle>
      <Cup>
        <Remained
          style={{
            visibility: fullCupCount === totalCupCount ? 'hidden' : 'visible',
          }}
        >
          <RemainedSpan>{remainedCapacity}L</RemainedSpan>
          <RemainedSmall>Remained</RemainedSmall>
        </Remained>
        <Percentage
          style={{
            visibility: fullCupCount > 0 ? 'visible' : 'hidden',
            height: `${(fullCupCount / totalCupCount) * 330}px`,
          }}
          tabIndex={fullCupCount}
        >
          {percentageNum}%
        </Percentage>
      </Cup>
      <Text>Select how many glasses of water that you have drank</Text>
      <Cups>
        {cupList.map(item => (
          <SmallCup
            key={item.id}
            onClick={() => handleClickSmallCup(item)}
            className={item.isFull ? 'full' : ' '}
          >
            250 ml
          </SmallCup>
        ))}
      </Cups>
    </DrinkWaterBody>
  )
}
