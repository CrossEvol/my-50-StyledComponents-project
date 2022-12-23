import React, { useState } from 'react'
import './index.css'
import styled, { keyframes } from 'styled-components'

const ExpandingCardBody = styled.div`
  font-family: 'Muli', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
`

const anime = keyframes`
@media (max-width: 480px) {
    .container {
        width: 100vw;
    }

    .panel:nth-of-type(4),
    .panel:nth-of-type(5) {
        display: none;
    }
}
`

const Container = styled.div`
  display: flex;
  width: 90vw;
`

const Panel = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  border-radius: 50px;
  color: #fff;
  flex: ${props => (props.className?.includes('active') ? 5 : 0.5)};
  margin: 10px;
  position: relative;
  transition: all 700ms ease-in;

  h3 {
    font-size: 24;
    position: absolute;
    bottom: 20px;
    left: 20px;
    margin: 0;
    opacity: ${props => (props.className?.includes('active') ? 1 : 0)};
    transition: opacity 0.3s ease-in 0.4s;
  }

  background-image: url(${props => props.title};);
`

const ActivePanel = styled(Panel)`
  flex: 5;

  h3 {
    opacity: 1;
    transition: opacity 0.3s ease-in 0.4s;
  }
`

interface PanelItem {
  title: string
  active: boolean
  content: string
}

const panels: PanelItem[] = [
  {
    title:
      'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    active: true,
    content: 'Explore The World',
  },
  {
    title:
      'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    active: false,
    content: 'Wild Forest',
  },
  {
    title:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
    active: false,
    content: 'Sunny Beach',
  },
  {
    title:
      'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    active: false,
    content: 'City on Winter',
  },
  {
    title:
      'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    active: false,
    content: 'Mountains - Clouds',
  },
]

export default function ExpandingCard() {
  const [panelList, setPanelList] = useState<PanelItem[]>(panels)

  /* 这里的实现是重新创建了组件，所以没法展现动画效果~~ */
  function clickHandler(panelItem: PanelItem) {
    setPanelList(
      panelList.map(item => ({
        ...item,
        active: item.title === panelItem.title,
      })),
    )
  }

  return (
    <ExpandingCardBody>
      <Container>
        {panelList.map(panelItem => {
          return (
            <Panel
              title={panelItem.title}
              onClick={() => clickHandler(panelItem)}
              key={panelItem.title}
              className={panelItem.active ? 'active' : ''}
            >
              <h3>{panelItem.content}</h3>
            </Panel>
          )
        })}
      </Container>
    </ExpandingCardBody>
  )
}
