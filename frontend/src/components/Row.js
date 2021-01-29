import React from "react"
import styled from "styled-components/macro"

import { Cell } from "./Cell"

export const Row = (props) => {

  const { row, rowIndex } = props

  return (
    <RowWrap row={rowIndex}>
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

//TODO: apply border bottom! read more: https://styled-components.com/docs/basics#passed-props
export const RowWrap = styled.div`
  display: flex;
  justify-content: center;
`

