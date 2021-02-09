import React from "react"
import styled from "styled-components/macro"

import { Cell } from "./Cell"

export const Row = ({ row, rowIndex }) => {

  return (
    <RowWrap>
      {row.map((digit, columnIndex) => (
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
  display: flex;
  justify-content: center;
`

