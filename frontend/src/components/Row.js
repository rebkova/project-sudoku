import React from "react"
import styled from "styled-components/macro"

import { Cell } from "./Cell"

export const Row = ({ row, rowIndex }) => {


  return (
    <RowWrap>
      {row.map((digit, columnIndex) => (
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

export const RowWrap = styled.div`
//perhaps delete this styled component?
  display: flex;
  justify-content: center;
  /* border: 1px solid green; */
`

