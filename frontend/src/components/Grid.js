import React from "react"
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'

import { Row } from "./Row"


export const Grid = () => {

  const easySudoku = useSelector((store) => store.sudoku.easySudoku)

  //TODO: put this one in the DB! and fetch from it too!
  // const easySudoku = [
  //   ["", "", "", 6, "", 1, 2, 8, 7],
  //   [6, "", 2, 5, "", 8, "", "", ""],
  //   [9, "", 8, "", "", 3, "", "", 6],
  //   ["", 2, 1, "", "", "", "", 7, 3],
  //   [8, 9, "", "", "", "", "", 5, 2],
  //   [7, 3, "", "", "", "", 6, 9, ""],
  //   [2, "", "", 1, "", "", 9, "", 5],
  //   ["", "", "", 7, "", 4, 3, "", 8],
  //   [3, 5, 4, 2, "", 9, "", "", ""]
  // ]

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
`