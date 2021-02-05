import React from "react"
import styled from 'styled-components/macro'

import { LogoutButton } from "../buttons/LogoutButton"


export const Header = () => {

  return (
    <HeaderWrap>
      <div>... insert</div>
      <div>header text </div>
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
  border: 1px solid yellow;


`