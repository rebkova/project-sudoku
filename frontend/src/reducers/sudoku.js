import { createSlice } from "@reduxjs/toolkit"

// const initialState = localStorage.setItem()
//if the value is updated, save it to localStorage or have it as ""
const initialState = {
  easySudoku: JSON.parse(localStorage.getItem('easySudoku')) || [
    ["", "", "", 6, "", 1, 2, 8, 7],
    [6, "", 2, 5, "", 8, "", "", ""],
    [9, "", 8, "", "", 3, "", "", 6],
    ["", 2, 1, "", "", "", "", 7, 3],
    [8, 9, "", "", "", "", "", 5, 2],
    [7, 3, "", "", "", "", 6, 9, ""],
    [2, "", "", 1, "", "", 9, "", 5],
    ["", "", "", 7, "", 4, 3, "", 8],
    [3, 5, 4, 2, "", 9, "", "", ""]
  ],
  easySudokuSolution: [
    [5, 4, 3, 6, 9, 1, 2, 8, 7],
    [6, 1, 2, 5, 7, 8, 4, 3, 9],
    [9, 7, 8, 4, 2, 3, 5, 1, 6],
    [4, 2, 1, 9, 6, 5, 8, 7, 3],
    [8, 9, 6, 3, 4, 7, 1, 5, 2],
    [7, 3, 5, 8, 1, 2, 6, 9, 4],
    [2, 8, 7, 1, 3, 6, 9, 4, 5],
    [1, 6, 9, 7, 5, 4, 3, 2, 8],
    [3, 5, 4, 2, 8, 9, 7, 6, 1]
  ]
}

console.log(`from intial state: ${JSON.parse(localStorage.getItem('easySudoku'))}`)

export const sudoku = createSlice({

  name: "sudoku",
  initialState,
  reducers: {

    updateCellValue: (store, action) => {
      const rowIndex = action.payload.rowIndex
      // console.log(`rowIndex from reducer: ${rowIndex}`)

      const columnIndex = action.payload.columnIndex
      // console.log(`columnIndex from reducer: ${columnIndex}`)

      //why is the digit updating with delay?
      const digit = Number(action.payload.digit)

      // console.log(`digit type: ${typeof digit}`)

      // console.log(`digit from reducer: ${digit}`)

      store.easySudoku[rowIndex][columnIndex] = digit

      //localStorage here 
      localStorage.setItem("easySudoku", JSON.stringify(store.easySudoku))
      console.log(`store stuff: ${JSON.stringify(store.easySudoku)}`)


    },
    checkSolution: (store, action) => {

    }
  }
})