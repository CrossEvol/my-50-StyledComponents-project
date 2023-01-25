import React, { useState } from 'react'
import styled from 'styled-components'
import DownIcon from './svg/DownIcon'
import ErrorIcon from './svg/ErrorIcon'

const FaqCollapseBody = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
  font-family: 'Muli', sans-serif;
  background-color: #f0f0f0;
`

const Title = styled.h1`
  margin: 50px 0 30px;
  text-align: center;
`

const FaqContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const Faq = styled.div`
  background-color: transparent;
  border: 1px solid #9fa4a8;
  border-radius: 10px;
  margin: 20px 0;
  padding: 30px;
  position: relative;
  overflow: hidden;
  transition: 0.3s ease;

  &.active {
    background-color: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);

    &::before {
      content: '\f075';
      font-family: 'Font Awesome 5 Free';
      color: #3498db;
      top: -10px;
      left: -30px;
      font-size: 7rem;
      position: absolute;
      opacity: 0.2;
      z-index: 0;
      transform: rotateY(180deg);
    }

    &::after {
      content: '\f075';
      font-family: 'Font Awesome 5 Free';
      color: #2ecc71;
      top: 20px;
      left: 20px;
      font-size: 7rem;
      position: absolute;
      opacity: 0.2;
      z-index: 0;
    }
  }
`

const FaqTitle = styled.h3`
  margin: 0 35px 0 0;
`

const FaqText = styled.p`
  display: none;
  margin: 30px 0 0;
`

const FaqActiveText = styled(FaqText)`
  display: block;
`

const FaqToggle = styled.button`
  background-color: transparent;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  padding: 0;
  position: absolute;
  top: 30px;
  right: 30px;
  height: 30px;
  width: 30px;

  &:focus {
    outline: 0;
  }
`

interface QAPair {
  id: number
  question: string
  answer: string
  collapsed: boolean
}

const InitQAPairs: QAPair[] = [
  {
    id: 1,
    question: "Why shouldn't we trust atoms?",
    answer: 'They make up everything',
    collapsed: false,
  },
  {
    id: 2,
    question: 'What do you call someone with no body and no nose?',
    answer: 'Nobody knows.',
    collapsed: true,
  },
  {
    id: 3,
    question: "What's the object-oriented way to become wealthy?",
    answer: 'Inheritance.',
    collapsed: true,
  },
  {
    id: 4,
    question: 'How many tickles does it take to tickle an octopus?',
    answer: 'Ten-tickles!',
    collapsed: true,
  },
  {
    id: 5,
    question: 'What is: 1 + 1?',
    answer: 'Depends on who are you asking.',
    collapsed: true,
  },
]

export default function FaqCollapse() {
  const [QAPairs, setQAPairs] = useState(InitQAPairs)

  const handleToggle = (itemId: number) => {
    setQAPairs(
      QAPairs.map(item =>
        item.id !== itemId ? item : { ...item, collapsed: !item.collapsed },
      ),
    )
  }

  return (
    <FaqCollapseBody>
      <Title>Frequently Asked Questions</Title>
      <FaqContainer>
        {QAPairs.map(item => {
          return (
            <Faq key={item.id} className={item.collapsed ? '' : 'active'}>
              <FaqTitle>{item.question}</FaqTitle>
              {item.collapsed ? (
                <FaqText>{item.answer}</FaqText>
              ) : (
                <FaqActiveText>{item.answer}</FaqActiveText>
              )}
              <FaqToggle onClick={() => handleToggle(item.id)}>
                {item.collapsed ? <DownIcon /> : <ErrorIcon />}
              </FaqToggle>
            </Faq>
          )
        })}
      </FaqContainer>
    </FaqCollapseBody>
  )
}
