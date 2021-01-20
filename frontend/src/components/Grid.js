import React from "react"
import styled from 'styled-components/macro'

import { Row } from "./Row"


export const Grid = () => {

  //2D array
  const easySudoku = [
    ["", "", "", 6, "", 1, 2, 8, 7],
    [6, "", 2, 5, "", 8, "", "", ""],
    [9, "", 8, "", "", 3, "", "", 6],
    ["", 2, 1, "", "", "", "", 7, 3],
    [8, 9, "", "", "", "", "", 5, 2],
    [7, 3, "", "", "", "", 6, 9, ""],
    [2, "", "", 1, "", "", 9, "", 5],
    ["", "", "", 7, "", 4, 3, "", 8],
    [3, 5, 4, 2, "", 9, "", "", ""]
  ]

  //TODO: how to access each item in 2D array for tracking state?

  // for (i in easySudoku) {
  //   for (j in easySudoku[i]) {
  //     console.dir(easySudoku[i][j])
  //   }
  // }

  console.log(`Length: ${easySudoku.length}`)
  console.log(`Easy sudoku: ${easySudoku}`)

  //loop over array
  //every row is a div
  //loop over the items in div
  //for each number/item in div I display <input>
  return (
    <GridWrap>
      {/* loop through original 1D array */}
      {easySudoku.map((row, rowIndex) => (
        // console.log(`Row: ${row}`),
        // console.log(`Type of row: ${typeof row}`),
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

export const GridWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  border: 1px solid blue;
  
`