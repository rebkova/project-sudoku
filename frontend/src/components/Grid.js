import React from "react"
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'

import { Row } from "./Row"


export const Grid = () => {

  const easySudoku = useSelector(store => store.sudoku.easySudoku)

  return (
    <GridWrap>
      {easySudoku.map((row, rowIndex) => (
        < Row
          key={rowIndex}
          row={row}
          rowIndex={rowIndex}
        />
      ))}
    </GridWrap>
  )
}


// --- STYLED COMPONENTS ---

export const GridWrap = styled.form`
  display: flex;
  flex-direction: column;
  margin: 8px 0;
`