import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { useDispatch } from "react-redux"


import { sudoku } from "../reducers/sudoku"


export const Cell = ({ digit, rowIndex, columnIndex }) => {

  const dispatch = useDispatch()

  //only initialised when component is mounted! 
  //state is not updated in these lines of code!
  const [changedDigit, setChangedDigit] = useState(digit)
  const [isDisabled] = useState(digit !== "")

  useEffect(() => {

    dispatchDigit()
    // eslint-disable-next-line
  }, [changedDigit])


  const dispatchDigit = () => {

    dispatch(sudoku.actions.updateCellValue({ rowIndex, columnIndex, digit: changedDigit }))
  }

  const onDigitChange = (event) => {

    const regEx = /[1-9]?/
    if ((event.target.value.match(regEx)) && (event.target.value.length === 1)) {
      setChangedDigit(event.target.value)
    }
  }

  return (

    <CellInput
      value={changedDigit}
      disabled={isDisabled}
      type="number"
      // type="text"
      max="9"
      min="1"
      onChange={onDigitChange}
      rowIndex={rowIndex}
      columnIndex={columnIndex}

    //input type="text" https://stackoverflow.com/questions/469357/html-text-input-allow-only-numeric-input
    //for mobile: https://stackoverflow.com/questions/46315589/how-to-show-numeric-only-keypad-in-mobile-browser-along-with-maxlength-not-all/46417631
    />
  )
}

// --- STYLED COMPONENTS ---

export const CellInput = styled.input`
  box-sizing: border-box;
  font-size: 15px;
  font-weight: bold;
  text-align: center; 
  width: 35px;
  height: 35px;
  border: 0.5px solid #D9D9D9;
  border-top: ${(props) => props.rowIndex === 0 ? `2px solid #0D0D0D` : ``};
  border-right: ${(props) =>
    props.columnIndex === 2
      ? `2px solid #0D0D0D`
      : props.columnIndex === 5
        ? `2px solid #0D0D0D`
        : props.columnIndex === 8
          ? `2px solid #0D0D0D`
          : ``};
  border-bottom: ${(props) =>
    props.rowIndex === 2
      ? `2px solid #0D0D0D`
      : props.rowIndex === 5
        ? `2px solid #0D0D0D`
        : props.rowIndex === 8
          ? `2px solid #0D0D0D`
          : ``};
  border-left: ${(props) => props.columnIndex === 0 ? `2px solid #0D0D0D` : ``};

  &:focus {
    outline: none;
    border:1px solid #3f51b5;
    border-radius: 3px;
    box-shadow: 1px 1px 15px 2px #4d52d6;
  }
  
`