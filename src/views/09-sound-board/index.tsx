import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import applauseSound from './sounds/applause.mp3'
import booSound from './sounds/boo.mp3'
import gaspSound from './sounds/gasp.mp3'
import tadaSound from './sounds/tada.mp3'
import victorySound from './sounds/victory.mp3'
import wrongSound from './sounds/wrong.mp3'

const SoundBoardBody = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap');
  background-color: rgb(161, 100, 223);
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
`

const Button = styled.button`
  background-color: rebeccapurple;
  border-radius: 5px;
  border: none;
  color: #fff;
  margin: 1rem;
  padding: 1.5rem 3rem;
  font-size: 1.2rem;
  font-family: inherit;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:focus {
    outline: none;
  }
`

interface Sound {
  id: number
  name: string
  url: string
}

const sounds: Sound[] = [
  { id: 1, name: 'applause', url: applauseSound },
  { id: 2, name: 'boo', url: booSound },
  { id: 3, name: 'gasp', url: gaspSound },
  { id: 4, name: 'tada', url: tadaSound },
  { id: 5, name: 'victory', url: victorySound },
  { id: 6, name: 'wrong', url: wrongSound },
]

export default function SoundBoard() {
  const soundsRef = useRef<Map<string, HTMLAudioElement> | null>(null)

  const handleClickButton = (soundId: string) => {
    const map = getMap()
    map.forEach(song => {
      song.pause()
      song.currentTime = 0
    })
    const node = map.get(soundId)
    node?.play()
  }

  function getMap() {
    if (!soundsRef.current) {
      soundsRef.current = new Map()
    }
    return soundsRef.current
  }

  return (
    <SoundBoardBody>
      {sounds.map(sound => {
        return (
          <audio
            key={sound.id}
            ref={node => {
              const map = getMap()
              if (node) {
                map.set(sound.name, node)
              } else {
                map.delete(sound.name)
              }
            }}
            src={sound.url}
          />
        )
      })}
      <div id="buttons">
        {sounds.map(sound => {
          return (
            <Button
              key={sound.id}
              onClick={() => handleClickButton(sound.name)}
            >
              {sound.name}
            </Button>
          )
        })}
      </div>
    </SoundBoardBody>
  )
}
