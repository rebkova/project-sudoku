import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"
// import styled from "styled-components/macro"
import Button from '@material-ui/core/Button'

import { LoginHere } from "../components/LoginHere"
import { Header } from "../components/Header"
import { Timer } from "../components/Timer"
import { LEADERBOARD_URL } from "../urls"
import { Grid } from "../components/Grid"


export const Sudoku = () => {

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
            onClick={() => {

              console.log(elapsedSeconds)

              if (isCorrect()) console.log("Hej, this is true!")
              else console.log("This is false!")

              postToLeaderboard()

              // fetch(LEADERBOARD_URL, {
              //   method: 'POST',
              //   body: JSON.stringify({ username: 'Rebeka', time: elapsedSeconds }),
              //   headers: { 'Content-Type': 'application/json' },
              // })
              //   .then((response) => {

              //     console.log(response.json())
              //     if (!response.ok) {
              //       // eslint-disable-next-line
              //       throw "Sorry, could not post to leaderboard";
              //     }
              //     else console.log("response was ok!")
              //     // return response.json();
              //   })

            }}>
            Check solution!
        </Button>
        </Link>
      </>

    )
  } else {
    return <LoginHere text={"Want to play sudoku?"} />
  }
}

// --- STYLED COMPONENTS ---

// const CheckSolutionButton = styled.button`
//   align-self: center;
//   font-size: 20px;
//   font-family: 'Patrick Hand', cursive;
//   background-color: #F2B90C;
//   color: #594020;
//   padding: 10px 15px;
//   margin: 8px 0;
//   border: 1px solid #594020;
//   border-radius: 5px;
//   cursor: pointer;

// `