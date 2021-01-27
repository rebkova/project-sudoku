import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import styled from 'styled-components/macro'

import { sudoku } from "../reducers/sudoku"

export const Cell = ({ digit, rowIndex, columnIndex }) => {

  const dispatch = useDispatch()

  const [changedDigit, setChangedDigit] = useState("")

  const originalDigit = digit
  // console.log(`Original digit: ${originalDigit}`)

  //true if the cell already contains a digit -> input field will be disabled
  const isDisabled = originalDigit !== ""
  // console.log(`is disabled: ${isDisabled}`)

  //empty space can get assigned a new number
  if (originalDigit === "") digit = changedDigit

  // console.log(`Changed digit first: ${changedDigit}`)
  useEffect(() => {
    dispatchDigit()
  }, [digit])


  const dispatchDigit = () => {
    console.log(`Digit value before dispatch: ${digit}`)
    dispatch(sudoku.actions.updateCellValue({ rowIndex, columnIndex, digit }))
  }

  const onDigitChange = (event) => {
    setChangedDigit(event.target.value)
    console.log(event.target.value)
  }
  // console.log(`Digit: ${digit}, changedD: ${changedDigit}`)
  return (

    <CellInput
      value={digit}
      disabled={isDisabled}
      type="number"
      max="9"
      min="1"
      //pattern="[1-9]" //= value checked against on form submission
      //input type="text" https://stackoverflow.com/questions/469357/html-text-input-allow-only-numeric-input

      onChange={onDigitChange}
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