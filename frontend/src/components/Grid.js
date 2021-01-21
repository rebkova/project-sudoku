import React from "react"
import styled from 'styled-components/macro'
import { useSelector } from "react-redux"


import { Row } from "./Row"


export const Grid = () => {

  //2D array
  const easySudoku = useSelector(store => store.sudoku.easySudoku)
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

  // const easySudokuSolution = [
  //   [5, 4, 3, 6, 9, 1, 2, 8, 7],
  //   [6, 1, 2, 5, 7, 8, 4, 3, 9],
  //   [9, 7, 8, 4, 2, 3, 5, 1, 6],
  //   [4, 2, 1, 9, 6, 5, 8, 7, 3],
  //   [8, 9, 6, 3, 4, 7, 1, 5, 2],
  //   [7, 3, 5, 8, 1, 2, 6, 9, 4],
  //   [2, 8, 7, 1, 3, 6, 9, 4, 5],
  //   [1, 6, 9, 7, 5, 4, 3, 2, 8],
  //   [3, 5, 4, 2, 8, 9, 7, 6, 1]
  // ]


  //TODO:
  //compare the arrays
  //if true, show a congrats message / lottie animation

  // for (i in easySudoku) {
  //   for (j in easySudoku[i]) {
  //     console.dir(easySudoku[i][j])
  //   }
  // }

  console.log(`Length: ${easySudoku.length}`)
  console.log(`Easy sudoku: ${easySudoku}`)

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