import React, { useState } from "react"
import styled from 'styled-components/macro'

// import { Grid } from "./Grid"
// import { Row } from "./Row"

export const Cell = ({ digit, rowIndex, columnIndex }) => {

  const [changedDigit, setChangedDigit] = useState("")
  const originalDigit = digit
  const isDisabled = originalDigit !== ""

  if (originalDigit === "") digit = changedDigit

  // console.log(`Changed digit first: ${changedDigit}`)

  return (
    // <form>
    <CellInput
      //"value will ALWAYS be digit"
      //you MUST update the corresponding state in onChange
      value={digit}
      disabled={isDisabled}
      type="number"
      max="9"
      min="1"

      onChange={(event) => {
        // if (event.target.value > 9) event.target.value = 9
        // if (event.target.value <= 0) event.target.value = 0

        setChangedDigit(event.target.value)

        //changedDigit = event.target.value
        console.log(`Changed digit in input ${rowIndex}x${columnIndex} to value: ${changedDigit}`)
      }}
    //use the indeces here!
    />
    //</form>
  )
}

// --- STYLED COMPONENTS ---

export const CellInput = styled.input`
  box-sizing: border-box;
  width: 35px;
  height: 35px;
  border: 1px solid grey;
`