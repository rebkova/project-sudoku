import React from "react"
import { useSelector } from "react-redux"
import styled from 'styled-components/macro'

import { LogoutButton } from "../buttons/LogoutButton"


export const Header = () => {

  const username = useSelector(store => store.user.login.username)

  return (
    <HeaderWrap>
      <div>Welcome, {username}!</div>
      <Text>SUDOKU</Text>
      <LogoutButton />
    </HeaderWrap>
  )
}

const HeaderWrap = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #D9D9D9;
`
const Text = styled.h1`
  font-size: 20px;
  text-decoration-style: underline;
  padding: 10px 15px;
  margin: 8px 0;
`