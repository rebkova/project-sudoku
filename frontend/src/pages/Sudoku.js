import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"

import { LoginHere } from "../components/LoginHere"
import { Header } from "../components/Header"
import { Timer } from "../components/Timer"
import { LEADERBOARD_URL } from "../urls"
import { Grid } from "../components/Grid"


export const Sudoku = () => {

  const puzzle = useSelector(store => store.sudoku.easySudoku)
  const solution = useSelector(store => store.sudoku.easySudokuSolution)
  const elapsedSeconds = useSelector(store => store.sudoku.time)
  const accessToken = useSelector((store) => store.user.login.accessToken)

  //compare the two arrays:
  const isCorrect = () => {

    for (let i = 0; i < solution.length; i++) {

      for (let j = 0; j < solution[i].length; j++) {

        if (solution[i][j] !== puzzle[i][j]) {

          return false
        }
      }
    }

    return true

  }

  if (accessToken) {

    return (
      <>
        <Header />
        <Timer />
        <Grid />
        <Link to={`/leaderboard`}>
          <button
            onClick={() => {

              console.log(elapsedSeconds)

              if (isCorrect()) alert("Hej, this is true!")
              else console.log("This is false!")

              fetch(LEADERBOARD_URL, {
                method: 'POST',
                body: JSON.stringify({ username: 'Rebeka', time: elapsedSeconds }),
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

            }}>
            Check solution!
        </button>
        </Link>
      </>

    )
  } else {
    return <LoginHere text={"Want to play sudoku?"} />
  }

}