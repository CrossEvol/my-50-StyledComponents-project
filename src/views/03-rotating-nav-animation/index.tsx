import React, { useState } from 'react'
import './index.css'
import styled from 'styled-components'

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
              <svg
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="7701"
                width="32"
                height="32"
              >
                <path
                  d="M886.784 746.496q29.696 30.72 43.52 56.32t-4.608 58.368q-4.096 6.144-11.264 14.848t-14.848 16.896-15.36 14.848-12.8 9.728q-25.6 15.36-60.416 8.192t-62.464-34.816l-43.008-43.008-57.344-57.344-67.584-67.584-73.728-73.728-131.072 131.072q-60.416 60.416-98.304 99.328-38.912 38.912-77.312 48.128t-68.096-17.408l-7.168-7.168-11.264-11.264-11.264-11.264q-6.144-6.144-7.168-8.192-11.264-14.336-13.312-29.184t2.56-29.184 13.824-27.648 20.48-24.576q9.216-8.192 32.768-30.72l55.296-57.344q33.792-32.768 75.264-73.728t86.528-86.016q-49.152-49.152-93.696-93.184t-79.872-78.848-57.856-56.832-27.648-27.136q-26.624-26.624-27.136-52.736t17.92-52.736q8.192-10.24 23.552-24.064t21.504-17.92q30.72-20.48 55.296-17.92t49.152 28.16l31.744 31.744q23.552 23.552 58.368 57.344t78.336 76.288 90.624 88.576q38.912-38.912 76.288-75.776t69.632-69.12 58.368-57.856 43.52-43.008q24.576-23.552 53.248-31.232t55.296 12.8q1.024 1.024 6.656 5.12t11.264 9.216 10.752 9.728 7.168 5.632q27.648 26.624 27.136 57.856t-27.136 57.856q-18.432 18.432-45.568 46.08t-60.416 60.416-70.144 69.632l-77.824 77.824q37.888 36.864 74.24 72.192t67.584 66.048 56.32 56.32 41.472 41.984z"
                  p-id="7702"
                  fill="#dbdbdb"
                ></path>
              </svg>
            </CircleCloseButton>
            <CircleOpenButton onClick={() => handleClickButton(false)}>
              <svg
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="6550"
                width="32"
                height="32"
              >
                <path
                  d="M864 716H160v-88h704v88z m0-160H160v-88h704v88z m0-160H160v-88h704v88z"
                  p-id="6551"
                  fill="#e6e6e6"
                ></path>
              </svg>
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
              {' '}
              <svg
                // t="1671777251217"
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="9296"
                width="32"
                height="32"
              >
                <path
                  d="M267.906 537.159v301.379c0.187 11.409 7.559 18.642 13.542 22.132 6.307 3.606 13.17 5.183 20.406 5.183l136.62 0.047c4.684 0 9.322-1.995 12.614-5.228 3.385-3.352 5.241-7.988 5.241-12.661v-145.027l136.11 0.047v144.979c0 4.672 1.9 9.31 5.24 12.661 3.34 3.234 7.929 5.182 12.66 5.182h136.528c7.327 0 14.145-1.577 20.451-5.182 6.028-3.49 13.357-10.724 13.588-22.132v-301.379l-256.546-234.656-256.453 234.656zM761.242 344.795v-170.15c0-10.296-8.394-18.712-18.782-18.712h-45.171c-10.342 0-18.642 8.417-18.642 18.712v94.606l-121.826-111.415c-18.411-16.857-46.467-16.857-64.878 0l-323.788 296.254c-19.569 17.842-20.916 48.276-3.015 67.892 9.46 10.342 22.446 15.629 35.476 15.629 11.64 0 23.234-4.128 32.463-12.614l291.28-266.528 291.373 266.528c19.569 17.947 50.039 16.614 67.94-3.015 17.9-19.616 16.508-50.050-3.060-67.892l-119.369-109.294zM267.906 537.159v301.379c0.187 11.409 7.559 18.642 13.542 22.132 6.307 3.606 13.17 5.183 20.406 5.183l136.62 0.047c4.684 0 9.322-1.995 12.614-5.228 3.385-3.352 5.241-7.988 5.241-12.661v-145.027l136.11 0.047v144.979c0 4.672 1.9 9.31 5.24 12.661 3.34 3.234 7.929 5.182 12.66 5.182h136.528c7.327 0 14.145-1.577 20.451-5.182 6.028-3.49 13.357-10.724 13.588-22.132v-301.379l-256.546-234.656-256.453 234.656zM761.242 344.795v-170.15c0-10.296-8.394-18.712-18.782-18.712h-45.171c-10.342 0-18.642 8.417-18.642 18.712v94.606l-121.826-111.415c-18.411-16.857-46.467-16.857-64.878 0l-323.788 296.254c-19.569 17.842-20.916 48.276-3.015 67.892 9.46 10.342 22.446 15.629 35.476 15.629 11.64 0 23.234-4.128 32.463-12.614l291.28-266.528 291.373 266.528c19.569 17.947 50.039 16.614 67.94-3.015 17.9-19.616 16.508-50.050-3.060-67.892l-119.369-109.294z"
                  fill="#8a8a8a"
                  p-id="9297"
                ></path>
              </svg>{' '}
            </NavIcon>
            <NavLink>Home</NavLink>
          </NavLi>
          <NavLi className="second">
            <NavIcon>
              {' '}
              <svg
                // t="1671777300065"
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="11587"
                width="32"
                height="32"
              >
                <path
                  d="M700.324 258.261c0-106.447-88.07-192.73-196.627-192.73-108.556 0-196.588 86.283-196.588 192.73 0 5.359 1.16 10.376 1.634 15.622-0.475 6.234-1.634 12.144-1.634 18.435 0 125.243 88.031 226.768 196.588 226.768 108.558 0 196.627-101.525 196.627-226.768 0-6.29-1.216-12.201-1.673-18.435 0.457-5.246 1.673-10.263 1.673-15.622zM914.986 854.868s-26.551-127.562-27.881-135.05c-4.124-22.427-15.147-73.132-49.261-109.204-20.07-21.248-85.846-55-157.837-87.955-47.057 47.855-108.614 77.237-176.31 77.237-65.472 0-125.357-27.33-171.767-72.562-67.848 31.472-128.34 63.097-147.48 83.28-34.095 36.072-45.117 86.777-49.26 109.203-1.369 7.488-27.92 135.051-27.92 135.051l-8.19 47.702c-0.038 23.339 3.725 25.543 16.04 40.177 14.121 16.763 34.305 15.318 34.305 15.318H872.89s20.146 1.445 34.265-15.318c12.316-14.634 16.06-16.838 16.06-40.177l-8.23-47.702z"
                  p-id="11588"
                  fill="#bfbfbf"
                ></path>
              </svg>{' '}
            </NavIcon>
            <NavLink>About</NavLink>
          </NavLi>
          <NavLi className="third">
            <NavIcon>
              {' '}
              <svg
                // t="1671777329652"
                className="icon"
                viewBox="0 0 1424 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="12660"
                width="32"
                height="32"
              >
                <path
                  d="M1318.676874 12.438903A139.688932 139.688932 0 0 0 1256.889673 0.063657H167.6009a139.688932 139.688932 0 0 0-61.742686 12.330731A170.627048 170.627048 0 0 0 0.00089 170.690705v682.597223a170.716079 170.716079 0 0 0 104.521866 157.895679A138.665081 138.665081 0 0 0 167.6009 1023.914976h1089.288773a138.665081 138.665081 0 0 0 63.078144-12.775884A170.716079 170.716079 0 0 0 1424.489682 853.287928V170.690705A170.627048 170.627048 0 0 0 1318.676874 12.438903z m22.035061 158.296317v682.552708a85.82545 85.82545 0 0 1-6.009562 31.160692 189.011857 189.011857 0 0 0-19.097053-19.675751l-348.465571-310.449526 359.816966-389.241563c4.451527-4.763134 7.834688-9.303692 11.351395-13.888765a85.558358 85.558358 0 0 1 2.403825 19.49769z m-83.777747-85.335781a81.551983 81.551983 0 0 1 22.257637 3.38316 79.281704 79.281704 0 0 1-13.042975 17.80611L767.88938 645.535141a76.032089 76.032089 0 0 1-111.288187 0L158.564299 106.900316a79.103643 79.103643 0 0 1-13.042975-17.80611 81.507468 81.507468 0 0 1 22.257637-3.383161h1089.110712zM89.832715 884.582166a85.91448 85.91448 0 0 1-6.009562-31.160692V170.690705a85.780934 85.780934 0 0 1 2.403825-19.40866c3.516707 4.451527 6.944383 8.903055 11.351395 13.888766l359.816965 389.241562-348.46557 310.449526a189.501525 189.501525 0 0 0-19.097053 19.720267z m77.768185 54.041543a80.127495 80.127495 0 0 1-11.930094-1.246427 117.520325 117.520325 0 0 1 8.457902-8.279841l350.73585-312.497229 80.795224 87.428a157.094405 157.094405 0 0 0 233.304555 0l80.795223-87.428 350.73585 312.497229c3.516707 3.116069 6.187623 5.831501 8.457902 8.279841a80.127495 80.127495 0 0 1-11.930094 1.246427H167.6009z"
                  fill="#bfbfbf"
                  p-id="12661"
                ></path>
              </svg>{' '}
            </NavIcon>
            <NavLink>Contact</NavLink>
          </NavLi>
        </NavUl>
      </Nav>
    </ThirdBody>
  )
}
