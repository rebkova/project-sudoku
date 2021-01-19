import React from "react"


export const Grid = () => {

  const easySudoku = [
    [null, null, null, 6, null, 1, 2, 8, 7],
    [6, null, 2, 5, null, 8, null, null, null],
    [9, null, 8, null, null, 3, null, null, 6],
    [null, 2, 1, null, null, null, null, 7, 3],
    [8, 9, null, null, null, null, null, 5, 2],
    [7, 3, null, null, null, null, 6, 9, null],
    [2, null, null, 1, null, null, 9, null, 5],
    [null, null, null, 7, null, 4, 3, null, 8],
    [3, 5, 4, 2, null, 9, null, null, null]
  ]

  console.log(`Length: ${easySudoku.length}`)
  console.log(`Easy sudoku: ${easySudoku}`)

  //loop over array
  //for each number/item I display <input>
  return (<div>
    Insert grid here:
    

  </div>)

}
