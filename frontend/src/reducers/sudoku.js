import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  easySudoku: [
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
}


export const sudoku = createSlice({

  name: "sudoku",
  initialState,
  reducers: {

    updateCellValue: (store, action) => {
      const rowIndex = action.payload.rowIndex
      console.log(`rowIndex from reducer: ${rowIndex}`)

      const columnIndex = action.payload.columnIndex
      console.log(`columnIndex from reducer: ${columnIndex}`)

      //why is the digit updating with delay?
      const digit = Number(action.payload.digit) + 1

      console.log(`digit type: ${typeof digit}`)

      console.log(`digit from reducer: ${digit}`)

      store.easySudoku[rowIndex][columnIndex] = digit

    }
  }
})