import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"

import { LoginHere } from "../components/LoginHere"
import { Header } from "../components/Header"
import { sudoku } from "../reducers/sudoku"
import { Timer } from "../components/Timer"
import { LEADERBOARD_URL } from "../urls"
import { Grid } from "../components/Grid"


export const Sudoku = () => {

  const dispatch = useDispatch()

  const [result, setResult] = useState(false)

  const puzzle = useSelector(store => store.sudoku.easySudoku)
  const solution = useSelector(store => store.sudoku.easySudokuSolution)
  const elapsedSeconds = useSelector(store => store.sudoku.time)
  const accessToken = useSelector(store => store.user.login.accessToken)
  const username = useSelector(store => store.user.login.username)

  //compare the two arrays:
  const isCorrect = () => {

    for (let i = 0; i < solution.length; i++) {

      for (let j = 0; j < solution[i].length; j++) {

        if (solution[i][j] !== Number(puzzle[i][j])) {

          return false

        }
      }
    }
    return true
  }

  const postToLeaderboard = () => {
    fetch(LEADERBOARD_URL, {
      method: 'POST',
      body: JSON.stringify({ username: username, time: elapsedSeconds }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {

        if (!response.ok) {
          // eslint-disable-next-line
          throw "Sorry, could not post to leaderboard"
        }
        else {
          return response.json()
        }
      })
  }

  const dispatchResult = () => {
    dispatch(sudoku.actions.updateResult({ result }))
  }

  useEffect(() => {

    dispatchResult()
    // eslint-disable-next-line
  }, [result])

  const evaluateGame = () => {

    if (isCorrect()) {
      if (elapsedSeconds > 30) {

        postToLeaderboard()
        setResult(true)
        alert("You nailed it!")

      } else {
        setResult(true)
        alert("Correct, great job!")
      }

    } else {
      setResult(false)
      alert("Oops, not correct yet, try again!")
    }
  }

  if (accessToken) {

    return (
      <>
        <Header />
        <Timer />
        <Grid />
        <Link to={`/leaderboard`}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={evaluateGame}>
            Check solution!
        </Button>
        </Link>
      </>

    )
  } else {
    return <LoginHere text={"Want to play sudoku?"} />
  }
}