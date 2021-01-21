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

    updateCell: (store, action) => {

    }
  }
})