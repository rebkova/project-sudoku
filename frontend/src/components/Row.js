import React from "react"
import styled from "styled-components/macro"

import { Cell } from "./Cell"

export const Row = (props) => {

  const { row, rowIndex } = props

  return (
    <RowWrap>
      {row.map((digit, columnIndex) => (
        //this component re-renders because columnIndex prop is being updated and sent to it?
        // console.log(`Digit: ${digit}`),
        // console.log(`Type of digit: ${typeof digit}`),
        < Cell
          key={columnIndex}
          digit={digit}
          columnIndex={columnIndex}
          rowIndex={rowIndex}
        />
      ))}
    </RowWrap>
  )
}

// --- STYLED COMPONENTS ---

//TODO: apply border bottom! read more: https://styled-components.com/docs/basics#passed-props
export const RowWrap = styled.div.attrs(props => ({
  borderBottom: props.rowIndex === 2 || 5 || 8 ? "5px" : "1px"
}))`
  //perhaps delete this styled component?
  display: flex;
  justify-content: center;
  border-bottom: ${props => props.borderBottom}
`

