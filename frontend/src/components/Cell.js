import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import styled from 'styled-components/macro'

import { sudoku } from "../reducers/sudoku"


export const Cell = ({ digit, rowIndex, columnIndex }) => {

  const dispatch = useDispatch()

  //only initialised when component is mounted! state is not updated in these lines of code!
  const [changedDigit, setChangedDigit] = useState(digit)
  const [isDisabled] = useState(digit !== "")

  // const originalDigit = digit
  // console.log(`Original digit: ${originalDigit}`)

  //true if the cell already contains a digit -> input field will be disabled
  // const isDisabled = changedDigit !== ""
  // console.log(`is disabled: ${isDisabled}`)

  //empty space can get assigned a new number
  // if (originalDigit === "") digit = changedDigit

  useEffect(() => {

    dispatchDigit()
    // eslint-disable-next-line
  }, [changedDigit])


  const dispatchDigit = () => {
    // console.log(`Digit value before dispatch: ${digit}`)
    dispatch(sudoku.actions.updateCellValue({ rowIndex, columnIndex, digit: changedDigit }))
  }

  const onDigitChange = (event) => {
    //enter the correct regex!
    if (event.target.value.match(/[1-9]/)) {
      setChangedDigit(event.target.value)
    }

    // console.log(event.target.value)
  }
  // console.log(`Digit: ${digit}, changedD: ${changedDigit}`)
  return (

    <CellInput
      value={changedDigit}
      disabled={isDisabled}
      type="text"
      // max="9"
      // min="1"
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