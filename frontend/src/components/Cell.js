import React, { useState } from "react"
import { useDispatch } from "react-redux"
import styled from 'styled-components/macro'

import { sudoku } from "../reducers/sudoku"

export const Cell = ({ digit, rowIndex, columnIndex }) => {

  //initialises dispatch
  const dispatch = useDispatch()

  //rI and cI can be used in dispatch or to modify the array directly
  //dispatch changeCellValue (give it both indeces) and redux will keep track of the grid

  const [changedDigit, setChangedDigit] = useState("")

  const originalDigit = digit

  //true if the cell already contains a digit -> input field will be disabled
  const isDisabled = originalDigit !== ""

  //empty space can get assigned a new number
  if (originalDigit === "") digit = changedDigit

  // console.log(`Changed digit first: ${changedDigit}`)

  return (

    <CellInput
      name={`${rowIndex}, ${columnIndex}`}
      value={digit}
      disabled={isDisabled}
      type="number"
      max="9"
      min="1"
      // pattern="[1-9]" = value checked against on form submission

      onChange={(event) => {
        setChangedDigit(event.target.value)
        console.log(`Changed digit in input ${rowIndex}x${columnIndex} to value: ${digit}`)
      }}
    />
  )
}

// --- STYLED COMPONENTS ---

export const CellInput = styled.input`
  box-sizing: border-box;
  width: 35px;
  height: 35px;
  border: 1px solid grey;
`