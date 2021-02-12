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
  ],
  time: 0,
  result: false
}

export const sudoku = createSlice({

  name: "sudoku",
  initialState,
  reducers: {

    updateCellValue: (store, action) => {

      const rowIndex = action.payload.rowIndex

      const columnIndex = action.payload.columnIndex

      const digit = action.payload.digit

      store.easySudoku[rowIndex][columnIndex] = digit

    },
    updateTime: (store, action) => {

      const seconds = action.payload.second

      const minutes = action.payload.minute

      store.time = (minutes * 60) + seconds
    },
    updateResult: (store, action) => {

      const result = action.payload.result

      store.result = result
    }
  }
})