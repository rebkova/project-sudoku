import React from "react"
import styled from 'styled-components/macro'

import { Cell } from "./Cell"


export const Grid = () => {

  //2D array
  const easySudoku = [
    [0, 0, 0, 6, 0, 1, 2, 8, 7],
    [6, 0, 2, 5, 0, 8, 0, 0, 0],
    [9, 0, 8, 0, 0, 3, 0, 0, 6],
    [0, 2, 1, 0, 0, 0, 0, 7, 3],
    [8, 9, 0, 0, 0, 0, 0, 5, 2],
    [7, 3, 0, 0, 0, 0, 6, 9, 0],
    [2, 0, 0, 1, 0, 0, 9, 0, 5],
    [0, 0, 0, 7, 0, 4, 3, 0, 8],
    [3, 5, 4, 2, 0, 9, 0, 0, 0]
  ]

  console.log(`Length: ${easySudoku.length}`)
  console.log(`Easy sudoku: ${easySudoku}`)

  //loop over array
  //every row is a div
  //loop over the items in div
  //for each number/item in div I display <input>
  return (
    <GridWrap>
      {easySudoku.map((row, index) => (
        <Cell
          key={index}
          row={row}
        />
      ))}
    </GridWrap>
  )
}

// --- STYLED COMPONENTS ---

export const GridWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 380px;
  border: 1px solid blue;
  
`