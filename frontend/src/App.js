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
import { Result } from "./pages/Result"
import { LeaderBoard } from "./pages/Leaderboard"

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
              <LoginHere text={"Already a player?"} />
            </Route>

            <Route path="/sessions" exact>
              <LoginForm />
            </Route>

            <Route path="/sudoku" exact>
              <Sudoku />
            </Route>

            <Route path="/result" exact>
              <Result />
            </Route>

            <Route path="/leaderboard" exact>
              <LeaderBoard />
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
  margin-bottom: 15px;
  /* border: 1px solid blue; */
`