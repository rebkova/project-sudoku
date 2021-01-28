import React from 'react'
import { Provider } from "react-redux"
import { configureStore, combineReducers } from '@reduxjs/toolkit'

//--- reducer ---
import { sudoku } from './reducers/sudoku'

//--- components ---
import { Grid } from "./components/Grid"
import { Timer } from "./components/Timer"
import { CheckSolutionButton } from "./components/CheckSolutionButton"


export const reducer = combineReducers({
  //referring to the key *name* of the reducer
  sudoku: sudoku.reducer
})

const store = configureStore({ reducer });


export const App = () => {
  return (
    <Provider store={store}>
      <main>
        Hello, Sudoku!
        <Timer />
        <Grid />
        <CheckSolutionButton />
      </main>
    </Provider>
  )
}
