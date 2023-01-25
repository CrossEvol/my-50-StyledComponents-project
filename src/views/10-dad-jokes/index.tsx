import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const DadJokesBody = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  background-color: #686de0;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 20px;
`

const DadJokesContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  padding: 50px 20px;
  text-align: center;
  max-width: 100%;
  width: 800px;
`

const DadJokesTitle = styled.h3`
  margin: 0;
  opacity: 0.5;
  letter-spacing: 2px;
`

const DadJokesContent = styled.div`
  font-size: 30px;
  letter-spacing: 1px;
  line-height: 40px;
  margin: 50px auto;
  max-width: 600px;
`

const Button = styled.button`
  background-color: #9f68e0;
  color: #fff;
  border: 0;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  padding: 14px 40px;
  font-size: 16px;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: 0;
  }
`

interface JokeResponse {
  id: string
  joke: string
  status: number
}

export default function DadJokes() {
  const [content, setContent] = useState('// Joke goes here')

  const generateJoke = React.useCallback(async () => {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)

    const data: JokeResponse = await res.json()
    setContent(data.joke)
  }, [fetch])

  useEffect(() => {
    generateJoke()
  }, [])

  return (
    <DadJokesBody>
      <DadJokesContainer>
        <DadJokesTitle>Don't Laugh Challenge</DadJokesTitle>
        <DadJokesContent>{content}</DadJokesContent>
        <Button onClick={generateJoke}>Get Another Joke</Button>
      </DadJokesContainer>
    </DadJokesBody>
  )
}
