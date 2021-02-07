import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { sudoku } from "../reducers/sudoku"


export const CheckSolutionButton = ({ minutes, seconds }) => {

  const dispatch = useDispatch()

  const [result, setResult] = useState(undefined)

  const puzzle = useSelector(store => store.sudoku.easySudoku)
  // console.log(`Solved sudoku: ${puzzle}`)

  const solution = useSelector(store => store.sudoku.easySudokuSolution)
  // console.log(`Solution: ${solution}`)

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

  const dispatchTime = () => {
    dispatch(sudoku.actions.updateTime({ minutes, seconds }))
  }

  const dispatchSolution = () => {
    dispatch(sudoku.actions.updateSolution({ result }))
  }
  // console.log(`is correct: ${isCorrect()}`)

  useEffect(() => {
    dispatchTime()
    dispatchSolution()
  }, [result])


  return (
    <>
      <button onClick={() => {

        const isTrueOrFalse = isCorrect()

        setResult(isTrueOrFalse)

      }}>
        Check solution!
      </button>
      <div>
        {result === undefined ? "" : "Solution: " + (result === true ? "Correct!" : "Incorrect!")}
      </div>
    </>
  )
}