import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const RandomChoicePickerBody = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
  background-color: #2b88f0;
  font-family: 'Muli', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
`

const RandomChoicePickerContainer = styled.div`
  width: 500px;
`

const Title = styled.h3`
  color: #fff;
  margin: 10px 0 20px;
  text-align: center;
`

const TextField = styled.textarea`
  border: none;
  display: block;
  width: 100%;
  height: 100px;
  font-family: inherit;
  padding: 10px;
  margin: 0 0 20px;
  font-size: 16px;

  &:focus {
    border: 3px solid #000000;
    outline: none;
  }
`

const Tag = styled.span`
  background-color: #f0932b;
  color: #fff;
  border-radius: 50px;
  padding: 10px 20px;
  margin: 0 5px 10px 0;
  font-size: 14px;
  display: inline-block;

  &.highlight {
    background-color: #273c75;
  }
`

export default function RandomChoicePicker() {
  const TextFieldRef = useRef<HTMLTextAreaElement | null>(null)
  const tagsRef = useRef<Map<string, HTMLSpanElement> | null>(null)
  const [choicesStr, setChoicesStr] = useState('')

  const handleChoiceStrChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setChoicesStr(e.target.value)
  }

  const handleClickTag = (tagIdx: string) => {
    const map = getMap()
    const tag = map.get(tagIdx)
    if (tag?.classList.contains('highlight')) {
      tag.classList.remove('highlight')
    } else {
      tag?.classList.add('highlight')
    }
  }

  function getMap() {
    if (!tagsRef.current) {
      tagsRef.current = new Map()
    }
    return tagsRef.current
  }

  useEffect(() => {
    TextFieldRef.current?.focus()

    return () => {}
  }, [])

  return (
    <RandomChoicePickerBody>
      <RandomChoicePickerContainer>
        <Title>
          Enter all of the choices divided by a comma (','). <br /> Press enter
          when you're done
        </Title>
        <TextField
          ref={TextFieldRef}
          value={choicesStr}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            handleChoiceStrChange(e)
          }
          placeholder={'Enter choices here...'}
        ></TextField>
        <div id="tags">
          {choicesStr &&
            choicesStr
              .split(',')
              .filter(item => item.trim() !== '')
              .map((item, index) => (
                <Tag
                  ref={node => {
                    const map = getMap()
                    if (node) {
                      map.set(String(index), node)
                    } else {
                      map.delete(String(index) + '')
                    }
                  }}
                  key={index}
                  onClick={() => handleClickTag(String(index))}
                >
                  {item}
                </Tag>
              ))}
        </div>
      </RandomChoicePickerContainer>
    </RandomChoicePickerBody>
  )
}
