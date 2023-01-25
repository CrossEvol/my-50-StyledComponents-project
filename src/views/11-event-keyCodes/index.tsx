import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const EventKeyCodesBody = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
  font-family: 'Muli', sans-serif;
  background-color: #383838;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
`
const KeyContainer = styled.div``

const KeyContent = styled.div`
  border: 1px solid #999999;
  background-color: #2b2b2b;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  display: inline-flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
  flex-direction: column;
  margin: 10px;
  min-width: 150px;
  color: white;
  position: relative;
`

const KeySmallContent = styled.small`
  position: absolute;
  top: -24px;
  left: 0;
  text-align: center;
  width: 100%;
  color: #c4c4c4;
  font-size: 14px;
`

interface EventKeyCodes {
  key: string
  keyCode: number
  code: string
}

export default function EventKeyCodes() {
  const [eventKeyCodes, setEventKeyCodes] = useState<EventKeyCodes>({
    key: '',
    keyCode: 0,
    code: '',
  })
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setShow(true)
      setEventKeyCodes({
        ...eventKeyCodes,
        key: event.key === ' ' ? 'Space' : event.key,
        keyCode: event.keyCode,
        code: event.code,
      })
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
        window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <EventKeyCodesBody>
      <KeyContainer>
        {!show ? (
          <KeyContent>{'Press any key to get the keyCode'}</KeyContent>
        ) : (
          <>
            <KeyContent>
              {eventKeyCodes.key}
              <KeySmallContent>event.key</KeySmallContent>
            </KeyContent>
            <KeyContent>
              {eventKeyCodes.keyCode}
              <KeySmallContent>event.keyCode</KeySmallContent>
            </KeyContent>
            <KeyContent>
              {eventKeyCodes.code}
              <KeySmallContent>event.code</KeySmallContent>
            </KeyContent>
          </>
        )}
      </KeyContainer>
    </EventKeyCodesBody>
  )
}
