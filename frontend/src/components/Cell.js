import React from "react"
import styled from 'styled-components/macro'

import { Grid } from "./Grid"
import { Row } from "./Row"

export const Cell = ({ digit, rowIndex, columnIndex }) => {

  return (
    <form>
      <CellInput
        value={digit}
        type="number"

        //TODO: need onChange handler -> track state?
        onChange={console.log("Changed an input")}
      //use the indeces here!
      />
    </form>
  )
}

// --- STYLED COMPONENTS ---

export const CellInput = styled.input`
  box-sizing: border-box;
  width: 35px;
  height: 35px;
  border: 1px solid grey;
`