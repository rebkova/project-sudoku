import React from "react"
import styled from 'styled-components/macro'


export const Cell = ({ digit }) => {

  return (
    <form>
      <CellInput
        value={digit} />
    </form>
  )
}

export const CellInput = styled.input`
  box-sizing: border-box;
  width: 35px;
  height: 35px;
  /* margin: 2px; */
  border: 1px solid grey;
`