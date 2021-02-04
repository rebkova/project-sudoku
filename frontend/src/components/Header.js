import React from "react"
import styled from 'styled-components/macro'


export const Header = () => {

  return (
    <HeaderWrap>
      <div>... insert</div>
      <div>header text </div>
      <div> and logout button here ...</div>

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