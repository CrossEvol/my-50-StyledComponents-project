import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const FormInputWaveBody = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
  background-color: steelblue;
  color: #fff;
  font-family: 'Muli', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
`

const FormInputWaveContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px 40px;
  border-radius: 5px;
`

const FormTitle = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`

const FormLink = styled.a`
  text-decoration: none;
  color: lightblue;
`

const FormParagraph = styled.p`
  margin-top: 30px;
`

const FormControl = styled.div`
  position: relative;
  margin: 20px 0 40px;
  width: 300px;
`

const FormInput = styled.input`
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid #fff;
  display: block;
  width: 100%;
  padding: 15px 0;
  font-size: 18px;
  color: #fff;

  &:focus {
    outline: 0;
    border-bottom-color: lightblue;
  }

  &:valid {
    outline: 0;
    border-bottom-color: lightblue;
  }
`

const FormLabel = styled.label`
  position: absolute;
  top: 15px;
  left: 0;
  pointer-events: none;
`
const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  width: 100%;
  background-color: lightblue;
  padding: 15px;
  font-family: inherit;
  font-size: 16px;
  border: 0;
  border-radius: 5px;

  &:focus {
    outline: 0;
  }

  &:active {
    transform: scale(0.98);
  }
`

const FormSpan = styled.span`
  display: inline-block;
  font-size: 18px;
  min-width: 5px;
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: 50ms;

  &.updown {
    color: lightblue;
    transform: translateY(-30px);
  }
`

export default function FormInputWave() {
  const emailRef = useRef<HTMLSpanElement>(null)
  const passwordRef = useRef<HTMLSpanElement>(null)

  const handleEmailFocus = () => {
    emailRef.current?.classList.add('updown')
  }

  const handleEmailBlur = () => {
    emailRef.current?.classList.remove('updown')
  }

  const handlePasswordFocus = () => {
    passwordRef.current?.classList.add('updown')
  }

  const handlePasswordBlur = () => {
    passwordRef.current?.classList.remove('updown')
  }

  return (
    <FormInputWaveBody>
      <FormInputWaveContainer>
        <FormTitle>Please Login</FormTitle>
        <form>
          <FormControl>
            <FormInput
              type={'text'}
              required
              onFocus={handleEmailFocus}
              onBlur={handleEmailBlur}
            />
            <FormLabel>
              <FormSpan ref={emailRef}>Email</FormSpan>
            </FormLabel>
          </FormControl>
          <FormControl>
            <FormInput
              type={'password'}
              required
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
            />
            <FormLabel>
              <FormSpan ref={passwordRef}>Password</FormSpan>
            </FormLabel>
          </FormControl>
          <Button>Login</Button>
          <FormParagraph>
            Don't have an account? <FormLink>Register</FormLink>
          </FormParagraph>
        </form>
      </FormInputWaveContainer>
    </FormInputWaveBody>
  )
}
