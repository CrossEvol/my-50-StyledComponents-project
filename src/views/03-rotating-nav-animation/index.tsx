import React, { useState } from 'react'
import styled from 'styled-components'
import LineSvgIcon from './svg/LineSvgIcon'
import BuzzSvgIcon from './svg/BuzzSvgIcon'
import HomeSvgIcon from './svg/HomeSvgIcon'
import AboutSvgIcon from './svg/AboutSvgIcon'
import ContactSvgIcon from './svg/ContactSvgIcon'

const ThirdBody = styled.div`
  font-family: 'Lato', sans-serif;
  background-color: #333;
  color: #222;
  overflow-x: hidden;
  margin: 0;
`
const Container = styled.div`
  background-color: #fafafa;
  transform-origin: top left;
  transition: transform 0.5s linear;
  width: 100vw;
  min-height: 100vh;
  padding: 50px;

  &.show-nav {
    transform: rotate(-20deg);
  }
`

const CircleContainer = styled.div`
  position: fixed;
  top: -120px;
  left: -120px;
`

const Circle = styled.div`
  background-color: #ff7979;
  height: 240px;
  width: 240px;
  border-radius: 50%;
  position: relative;
  transition: transform 0.5s linear;
  &.show-nav {
    transform: rotate(-70deg);
  }
`

const CircleButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100px;
  background: transparent;
  border: 0;
  font-size: 26px;
  color: #fff;

  &:focus {
    outline: none;
  }
`

const CircleOpenButton = styled(CircleButton)`
  left: 60%;
`

const CircleCloseButton = styled(CircleButton)`
  top: 60%;
  transform: rotate(90deg);
  transform-origin: top left;
`

const Nav = styled.nav`
  position: fixed;
  bottom: 40px;
  left: 0;
  z-index: 100;
`

const NavUl = styled.div`
  padding-left: 30px;
`

const NavLi = styled.div`
  text-transform: uppercase;
  color: #fff;
  margin: 40px 0;
  transform: translateX(-100%);
  transition: transform 0.4s ease-in;

  & + & {
    margin-left: 15px;
    transform: translateX(-150%);
  }

  &.third {
    margin-left: 30px;
    transform: translateX(-200%);
  }

  .show-nav & {
    transform: translateX(0);
    transition-delay: 0.3s;
  }
`

const NavIcon = styled.i`
  font-size: 20px;
  margin-right: 10px;
`

const NavLink = styled.a`
  color: #fafafa;
  text-decoration: none;
  transition: all 0.5s;

  &:hover {
    color: #ff7979;
    font-weight: bold;
  }
`

const Content = styled.div`
  max-width: 1000px;
  margin: 50px auto;
`

const ContentH1 = styled.h1`
  margin: 0;
`

const ContentSmall = styled.small`
  color: #555;
  font-style: italic;
`

const ContentP = styled.p`
  color: #333;
  line-height: 1.5;
`

const ContentImg = styled.img`
  max-width: 100%;
`

export default function RotatingNavAnimation() {
  const [open, setOpen] = useState<boolean>(true)

  function handleClickButton(flag: boolean) {
    setOpen(flag)
  }

  return (
    <ThirdBody>
      <Container className={open ? '' : 'show-nav'}>
        <CircleContainer>
          <Circle className={open ? '' : 'show-nav'}>
            <CircleCloseButton onClick={() => handleClickButton(true)}>
              <LineSvgIcon />
            </CircleCloseButton>
            <CircleOpenButton onClick={() => handleClickButton(false)}>
              <BuzzSvgIcon />
            </CircleOpenButton>
          </Circle>
        </CircleContainer>
        <Content>
          <ContentH1>Amazing Article</ContentH1>
          <ContentSmall>Florin Pop</ContentSmall>
          <ContentP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            quia in ratione dolores cupiditate, maxime aliquid impedit dolorem
            nam dolor omnis atque fuga labore modi veritatis porro laborum
            minus, illo, maiores recusandae cumque ipsa quos. Tenetur,
            consequuntur mollitia labore pariatur sunt quia harum aut. Eum
            maxime dolorem provident natus veritatis molestiae cumque quod
            voluptates ab non, tempore cupiditate? Voluptatem, molestias culpa.
            Corrupti, laudantium iure aliquam rerum sint nam quas dolor
            dignissimos in error placeat quae temporibus minus optio eum soluta
            cupiditate! Cupiditate saepe voluptates laudantium. Ducimus
            consequuntur perferendis consequatur nobis exercitationem molestias
            fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.
          </ContentP>

          <h3>My Dog</h3>
          <ContentImg
            src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
            alt="doggy"
          />
          <ContentP>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero
            deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam
            facere earum unde harum. Ea culpa veritatis magnam at aliquid.
            Perferendis totam placeat molestias illo laudantium? Minus id minima
            doloribus dolorum fugit deserunt qui vero voluptas, ut quia cum amet
            temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores
            explicabo provident. Voluptates sint, neque fuga cum illum, tempore
            autem maxime similique laborum odio, magnam esse. Aperiam?
          </ContentP>
        </Content>
      </Container>
      <Nav>
        <NavUl className={open ? '' : 'show-nav'}>
          <NavLi className="first">
            <NavIcon>
              <HomeSvgIcon />
            </NavIcon>
            <NavLink>Home</NavLink>
          </NavLi>
          <NavLi className="second">
            <NavIcon>
              <AboutSvgIcon />
            </NavIcon>
            <NavLink>About</NavLink>
          </NavLi>
          <NavLi className="third">
            <NavIcon>
              <ContactSvgIcon />
            </NavIcon>
            <NavLink>Contact</NavLink>
          </NavLi>
        </NavUl>
      </Nav>
    </ThirdBody>
  )
}
