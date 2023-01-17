import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const ScrollAnimationContainer = styled.div`
  background-color: #efedd6;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  overflow-x: hidden;
`

const Box = styled.div`
  background-color: steelblue;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 200px;
  margin: 10px;
  box-shadow: 2px 4px 5px 1px rgba(0, 0, 0, 0.3);
  transform: translateX(400%);
  transition: transform 0.4s ease;

  &:nth-of-type(even) {
    transform: translateX(-400%);
  }

  &.show {
    transform: translateX(0);
  }
`

const BoxTitle = styled.h2`
  font-size: 45px;
`

interface BoxItem {
  id: number
  isShow: boolean
  title: string
}

const boxes: BoxItem[] = [
  { id: 1, isShow: true, title: 'Content' },
  { id: 2, isShow: true, title: 'Content' },
  { id: 3, isShow: true, title: 'Content' },
  { id: 4, isShow: false, title: 'Content' },
  { id: 5, isShow: false, title: 'Content' },
  { id: 6, isShow: false, title: 'Content' },
  { id: 7, isShow: false, title: 'Content' },
  { id: 8, isShow: false, title: 'Content' },
  { id: 9, isShow: false, title: 'Content' },
  { id: 10, isShow: false, title: 'Content' },
  { id: 11, isShow: false, title: 'Content' },
  { id: 12, isShow: false, title: 'Content' },
]

export default function ScrollAnimation() {
  const [boxList, setBoxList] = useState<BoxItem[]>(boxes)
  const itemsRef = useRef<Map<number, HTMLDivElement> | null>(null)

  const handleScroll = () => {
    const triggerBottom = (window.innerHeight / 5) * 4
    const map = getMap()
    // TODO:纯按数据更新视图做不到吗?
    // map.forEach((node, key) => {
    //   const boxTop = node.getBoundingClientRect().top
    //   if (boxTop < triggerBottom) {
    //     setBoxList(
    //       boxList.map(box => {
    //         return box.id === key ? { ...box, isShow: true } : { ...box }
    //       }),
    //     )
    //   } else {
    //     setBoxList(
    //       boxList.map(box => {
    //         return box.id === key ? { ...box, isShow: false } : { ...box }
    //       }),
    //     )
    //   }
    // })
    map.forEach(node => {
      const boxTop = node.getBoundingClientRect().top
      if (boxTop < triggerBottom) {
        node.classList.add('show')
      } else {
        node.classList.remove('show')
      }
    })
  }

  const getMap = () => {
    if (!itemsRef.current) {
      itemsRef.current = new Map()
    }
    return itemsRef.current
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <ScrollAnimationContainer>
        <h1 style={{ margin: '10px' }}>Scroll to see the animation</h1>
        {boxList.map((box, index) => {
          return (
            <Box
              key={box.id}
              className={box.isShow ? 'show' : ''}
              ref={node => {
                const map = getMap()
                if (node) {
                  map.set(box.id, node)
                } else {
                  map.delete(box.id)
                }
              }}
            >
              <BoxTitle>{box.title}</BoxTitle>
            </Box>
          )
        })}
      </ScrollAnimationContainer>
    </>
  )
}
