import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"

import { Header } from "../components/Header"
import { Timer } from "../components/Timer"
import { Grid } from "../components/Grid"

//const BASE_URL = "https://rebeka-project-sudoku.herokuapp.com/leaderboard"
// const BASE_URL = "http://localhost:8080"
const LEADERBOARD_URL = "https://rebeka-project-sudoku.herokuapp.com/leaderboard"

export const Sudoku = () => {

  const puzzle = useSelector(store => store.sudoku.easySudoku)
  // console.log(`Solved sudoku: ${puzzle}`)

  const solution = useSelector(store => store.sudoku.easySudokuSolution)
  // console.log(`Solution: ${solution}`)

  const elapsedSeconds = useSelector(store => store.sudoku.time)


  //compare the two arrays:
  const isCorrect = () => {

    for (let i = 0; i < solution.length; i++) {
      // console.log(`i: ${i}`)

      for (let j = 0; j < solution[i].length; j++) {
        // console.log(`j: ${j}`)
        // console.log(`value at ij coordinate: ${a[i][j]}`)
        if (solution[i][j] !== puzzle[i][j]) {
          // console.log(false)
          return false
        }
      }
    }

    return true

  }

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

}