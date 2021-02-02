import React from 'react'
import { Provider } from "react-redux"
import styled from 'styled-components/macro'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

//--- reducers ---
import { sudoku } from './reducers/sudoku'
import { user } from './reducers/user'


//--- components authentication ---
import { SignupForm } from './pages/SignupForm'
import { LoginHere } from './components/LoginHere'
import { LoginForm } from './pages/LoginForm'


//--- components sudoku ---
import { Sudoku } from "./pages/Sudoku"


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

            <Route path="/sessions" exact>
              <LoginForm />
            </Route>

            <Route path="/sudoku" exact>
              <Sudoku />
              {/* <Grid /> */}
            </Route>


          </Wrapper>
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