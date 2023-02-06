import React, { useRef } from 'react'
import styled from 'styled-components'

const AnimatedNavigationBody = styled.div`
  font-family: 'Muli', sans-serif;
  background-color: #eafbff;
  background-image: linear-gradient(
    to bottom,
    #eafbff 0%,
    #eafbff 50%,
    #5290f9 50%,
    #5290f9 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  height: 100vh;
`
const NavContainer = styled.nav`
  background-color: #fff;
  padding: 20px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: width 0.6s linear;
  overflow-x: hidden;

  &.active {
    width: 350px;
  }
`

const NavUl = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 0;
  transition: width 0.6s linear;

  .active & {
    width: 100%;
  }
`

const NavLi = styled.li`
  transform: rotateY(0deg);
  opacity: 0;
  transition: transform 0.6s linear, opacity 0.6s linear;

  .active & {
    opacity: 1;
    transform: rotateY(360deg);
  }
`

const NavLink = styled.a`
  position: relative;
  color: #000;
  text-decoration: none;
  margin: 0 10px;
`

const IconButton = styled.button`
  background-color: #fff;
  border: 0;
  cursor: pointer;
  padding: 0;
  position: relative;
  height: 30px;
  width: 30px;

  &:focus {
    outline: 0;
  }
`

const IconLine = styled.div`
  background-color: #5290f9;
  height: 2px;
  width: 20px;
  position: absolute;
  top: 10px;
  left: 5px;
  transition: transform 0.6s linear;
`

const IconLineOne = styled(IconLine)`
  .active & {
    transform: rotate(-765deg) translateY(5.5px);
  }
`
const IconLineTwo = styled(IconLine)`
  top: auto;
  bottom: 10px;
  .active & {
    transform: rotate(765deg) translateY(-5.5px);
  }
`

interface Tab {
  id: number
  content: string
}

const tabList: Tab[] = [
  { id: 1, content: 'Home' },
  { id: 2, content: 'Works' },
  { id: 3, content: 'About' },
  { id: 4, content: 'Contact' },
]

export default function AnimatedNavigation() {
  const navRef = useRef<HTMLDivElement | null>(null)

  const handleClickNav = () => {
    navRef.current?.classList.toggle('active')
  }

  return (
    <AnimatedNavigationBody>
      <NavContainer className="active" ref={navRef} onClick={handleClickNav}>
        <NavUl>
          {tabList.map(tab => {
            return (
              <NavLi key={tab.id}>
                <NavLink>{tab.content}</NavLink>
              </NavLi>
            )
          })}
        </NavUl>
        <IconButton>
          <IconLineOne></IconLineOne>
          <IconLineTwo></IconLineTwo>
        </IconButton>
      </NavContainer>
    </AnimatedNavigationBody>
  )
}
