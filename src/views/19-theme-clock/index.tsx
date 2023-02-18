import React, { useEffect, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
  --primary-color: #000;
  --secondary-color: #fff;
  --red-color: #e74c3c;
  }

  html {
    transition: all .5s ease-in;
  }

  html.dark {
    --primary-color: #fff;
    --secondary-color:#333;
  }

  html.dark {
    background-color: #111;
    color: var(--primary-color);
  }

`

const ThemeClockBody = styled.div`
  font-family: 'Heebo', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
`

const ToggleButton = styled.button`
  cursor: pointer;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border: 0;
  border-radius: 4px;
  padding: 8px 12px;
  position: absolute;
  top: 100px;

  &:focus {
    outline: none;
  }
`

const ClockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Clock = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`

const Needle = styled.div`
  background-color: var(--primary-color);
  position: absolute;
  top: 50%;
  left: 50%;
  height: 65px;
  width: 3px;
  transform-origin: bottom center;
  transition: all 0.5s ease-in;
`

const HourNeedle = styled(Needle)`
  transform: translate(-50%, -100%) rotate(0deg);
`

const MinuteNeedle = styled(Needle)`
  transform: translate(-50%, -100%) rotate(0deg);
  height: 100px;
`

const SecondNeedle = styled(Needle)`
  transform: translate(-50%, -100%) rotate(0deg);
  height: 100px;
  background-color: var(--red-color);
`

const CenterPoint = styled.div`
  background-color: var(--red-color);
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;

  &::after {
    content: '';
    background-color: var(--primary-color);
    width: 5px;
    height: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
`

const TimeText = styled.div`
  font-size: 60px;
`

const DateText = styled.div`
  color: #aaa;
  font-size: 14px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
`

const Circle = styled.span`
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border-radius: 50%;
  height: 18px;
  width: 18px;
  display: inline-block;
  align-items: center;
  justify-content: center;
  line-height: 18px;
  transition: all 0.5s ease-in;
  font-size: 12px;
`

const days: string[] = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
const months: string[] = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const scale = (
  num: number,
  stepMin: number,
  stepMax: number,
  lenMin: number,
  lenMax: number,
) => {
  return ((num - stepMin) * (lenMax - lenMin)) / (stepMax - stepMin) + lenMin
}

export default function ThemeClock() {
  const [time, setTime] = useState<Date>(new Date())
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  let clockIntervalId: NodeJS.Timer | undefined = undefined

  const month = time.getMonth()
  const day = time.getDay()
  const date = time.getDate()
  const hours = time.getHours()
  const formatedHours = hours >= 13 ? hours % 12 : hours
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  const handleClickToggleButton = () => {
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    const changeHtmlMode = () => {
      const html = document.querySelector('html')
      if (html?.classList.contains('dark')) {
        html.classList.remove('dark')
      } else if (isDarkMode) {
        html?.classList.add('dark')
      }
    }
    changeHtmlMode()
    return () => {}
  }, [isDarkMode])

  useEffect(() => {
    clockIntervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(clockIntervalId)
    }
  }, [])

  return (
    <ThemeClockBody>
      <GlobalStyle />
      <ToggleButton onClick={handleClickToggleButton}>
        {`${isDarkMode ? 'Dark' : 'Light'} Mode`}
      </ToggleButton>
      <ClockContainer>
        <Clock>
          <HourNeedle
            style={{
              transform: `translate(-50%, -100%) rotate(${scale(
                formatedHours % 12,
                0,
                12,
                0,
                360,
              )}deg)`,
            }}
          />
          <MinuteNeedle
            style={{
              transform: `translate(-50%, -100%) rotate(${scale(
                minutes,
                0,
                60,
                0,
                360,
              )}deg)`,
            }}
          />
          <SecondNeedle
            style={{
              transform: `translate(-50%, -100%) rotate(${scale(
                seconds,
                0,
                60,
                0,
                360,
              )}deg)`,
            }}
          />
          <CenterPoint />
        </Clock>
      </ClockContainer>
      <TimeText>{`${formatedHours < 10 ? `0${formatedHours}` : formatedHours}:${
        minutes < 10 ? '0' + minutes : minutes
      } ${hours >= 12 ? 'PM' : 'AM'}`}</TimeText>
      <DateText>
        {`${days[day]}, ${months[month]}`}
        <Circle>{date}</Circle>
      </DateText>
    </ThemeClockBody>
  )
}
