import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import SearchIcon from './svg/SearchIcon'

const HiddenSearchContainer = styled.div`
  background-image: -webkit-linear-gradient(135deg, #7d5fff, #ea3a3a);
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin: 0;
`

const Search = styled.div`
  position: relative;
  height: 50px;
`

const SearchInput = styled.input`
  background-color: #fff;
  border: 0;
  font-size: 18px;
  padding: 15px;
  height: 50px;
  width: 50px;
  transition: width 0.3s ease;

  &:focus {
    outline: none;
  }

  .active & {
    width: 200px;
  }
`

const SearchButton = styled.button`
  background-color: #fff;
  border: 0;
  cursor: pointer;
  font-size: 24px;
  position: absolute;
  top: 0;
  left: 0;
  height: 50px;
  left: 0;
  width: 50px;
  transition: transform 0.3s ease;

  &:focus {
    outline: none;
  }

  .active & {
    transform: translateX(198px);
  }
`

export default function HiddenSearchWidget() {
  const [active, setActive] = useState<boolean>(false)

  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    setActive(!active)
  }

  useEffect(() => {
    if (active === true) {
      inputRef.current?.focus()
    }
  }, [active])

  return (
    <>
      <HiddenSearchContainer>
        <Search className={active ? 'active' : ''}>
          <SearchInput ref={inputRef} placeholder="Search..." />
          <SearchButton onClick={handleClick}>
            <SearchIcon />
          </SearchButton>
        </Search>
      </HiddenSearchContainer>
    </>
  )
}
