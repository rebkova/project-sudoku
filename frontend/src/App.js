import React from 'react'
import { Provider } from "react-redux"
import styled from 'styled-components/macro'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

//--- reducers ---
import { sudoku } from './reducers/sudoku'
import { user } from './reducers/user'


//--- components authentication ---
import { SignupForm } from './components/SignupForm'
import { LoginHere } from './components/LoginHere'
import { LoginForm } from './components/LoginForm'


//--- components sudoku ---
import { Grid } from "./components/Grid"
import { Timer } from "./components/Timer"
import { CheckSolutionButton } from "./components/CheckSolutionButton"




export const reducer = combineReducers({
  //referring to the key *name* of the reducer
  sudoku: sudoku.reducer, user: user.reducer
})

const store = configureStore({ reducer });


export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Wrapper>
            <Route path="/" exact>
              <SignupForm />
              <LoginHere />
            </Route>
            <Route>
              <LoginForm path="/sessions" exact />
            </Route>
            <Route>

            </Route>


          </Wrapper>
          {/* <main>
        Hello, Sudoku!
        <Timer />
        <Grid />
        <CheckSolutionButton />
      </main> */}
        </Switch>
      </BrowserRouter>
    </Provider >
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`