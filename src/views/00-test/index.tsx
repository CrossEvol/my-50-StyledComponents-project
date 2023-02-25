import React, { useEffect, useRef } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  .red {
    background-color: red;
    width: 200px;
    height: 50px;
  }
`

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

const BlockOne = styled.div`
  width: 300px;
  height: 100px;
  background-color: red;
  border: 1px solid #000;
`

const BlockTwo = styled.div`
  width: 150px;
  height: 100px;
  background-color: #fff;
  border: 1px solid #000;
`
const BlockLeftTop = styled.div`
  z-index: 10;
  width: 400px;
  height: 400px;
  background-color: green;
  margin-left: 150px;
  margin-top: 250px;
`

export default function Test() {
  const contentRef = useRef<HTMLDivElement>(null)
  const ref = useRef<HTMLDivElement | null>(null)

  function handleScrollToBottom() {
    const realHeight = contentRef.current?.scrollHeight as number
    const visibleHeight = contentRef.current?.clientHeight as number
    const maxScrollTop = realHeight - visibleHeight
    if (contentRef.current !== null) {
      contentRef.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0
    }
  }

  useEffect(() => {
    // document.addEventListener('mousedown', (e: MouseEvent) => {
    //   console.log(`x:${e.offsetX},y:${e.offsetY}`)
    // })

    return () => {}
  }, [])

  return (
    <>
      <Container>
        <GlobalStyle />
        <div className="red"></div>
        <BlockLeftTop
          ref={ref}
          onMouseDown={(e: React.MouseEvent<HTMLDivElement>) => {
            console.log(`x:${e.nativeEvent.offsetX},y:${e.nativeEvent.offsetY}`)
            console.log(ref.current?.offsetLeft)
            console.log(ref.current?.offsetTop)
          }}
        ></BlockLeftTop>
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
      <hr />
      <div>
        <BlockOne></BlockOne>
        <BlockTwo onClick={() => window.location.reload()}></BlockTwo>
      </div>
    </>
  )
}
