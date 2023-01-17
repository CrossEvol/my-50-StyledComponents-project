import React, { useRef } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Block = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${props =>
    props.className?.match('active') ? 'red' : 'blue'};
`

const Button = styled.button`
  width: 140px;
  height: 40px;
  background-color: #b8a9ec;
`

const Content = styled.div`
  height: 200px;
  background-color: #8a8a8a;
  width: 500px;
  margin: 0 auto;
  overflow: scroll;
`

const ContentMessage = styled.div`
  height: 2000px;
  background-color: #8a8a8a;
  margin: 0 auto;
`

const Parent = styled.div`
  &:first-child {
    background: blue;
  }
`

const Child = styled.div`
  & + & {
    color: red;
  }
`

export default function Test() {
  const contentRef = useRef<HTMLDivElement>(null)

  function handleScrollToBottom() {
    const realHeight = contentRef.current?.scrollHeight as number
    const visibleHeight = contentRef.current?.clientHeight as number
    const maxScrollTop = realHeight - visibleHeight
    if (contentRef.current !== null) {
      contentRef.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0
    }
  }

  return (
    <>
      <Container>
        {/* <Block className="active">Test1</Block>
        <Block>Test2</Block>
        <Block className="active">Test1</Block>
        <Block>Test2</Block> */}
        <Button onClick={handleScrollToBottom}>点击滚动到最底部</Button>
        <Content ref={contentRef}>
          <ContentMessage />
        </Content>
      </Container>
      <hr />
      <Parent>
        <Child>Child 1</Child>
        <Child>Child 2</Child>
      </Parent>
    </>
  )
}
