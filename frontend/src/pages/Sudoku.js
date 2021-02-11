import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import Button from '@material-ui/core/Button'

import { LoginHere } from "../components/LoginHere"
import { Header } from "../components/Header"
import { sudoku } from "../reducers/sudoku"
import { Timer } from "../components/Timer"
import { LEADERBOARD_URL } from "../urls"
import { Grid } from "../components/Grid"


export const Sudoku = () => {

  const dispatch = useDispatch()

  const [result, setResult] = useState(false)

  // console.log(`result in Sudoku component: ${result}`)

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

        console.log(response.json())
        if (!response.ok) {
          // eslint-disable-next-line
          throw "Sorry, could not post to leaderboard";
        }
        else console.log("response was ok!")
        // return response.json();
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
        console.log("Hej, this is true!")


      } else {
        console.log("No time, this is true!")
        setResult(true)

      }

    } else {
      console.log("This is false!")
      setResult(false)
    }
  }


  if (accessToken) {

    return (
      <>
        <Header />
        <Timer />
        <Grid />
        {/* <Link to={`/result`}> */}
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={evaluateGame}>
          Check solution!
        </Button>
        {/* </Link> */}
      </>
    )
  } else {
    return <LoginHere text={"Want to play sudoku?"} />
  }
}