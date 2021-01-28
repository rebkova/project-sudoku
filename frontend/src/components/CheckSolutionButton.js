import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"


export const CheckSolutionButton = () => {

  const [rezultat, setRezultat] = useState(undefined)

  const puzzle = useSelector(store => store.sudoku.easySudoku)
  console.log(`Solved sudoku: ${puzzle}`)

  const solution = useSelector(store => store.sudoku.easySudokuSolution)
  console.log(`Solution: ${solution}`)

  // var rezultat;

  //compare the two arrays:
  const isCorrect = () => {
    // return true
    for (let i = 0; i < solution.length; i++) {
      // console.log(`i: ${i}`)

      for (let j = 0; j < solution[i].length; j++) {
        // console.log(`j: ${j}`)
        // console.log(`value at ij coordinate: ${a[i][j]}`)
        if (solution[i][j] !== puzzle[i][j]) {
          console.log(false)
          return false
        }
      }
    }

    return true

  }

  // setToggleClick(false)
  //trigger this, after you click on the button! when you get the response!
  // if (toggleClick) {

  //   if (isCorrect) {
  //     var result = "Yay, solution is correct!"
  //     console.log(result)
  //     return result

  //   } else {
  //     return result = "Ooops, incorrect solution!"
  //   }
  // }


  // console.log(`is correct: ${isCorrect()}`)

  return (
    <>
      <button onClick={() => {
        // console.log(`vrednost rezultat: ${rezultat}`)
        const result = isCorrect()

        // if (result) alert("prav je!")
        // else alert("Ni prav, coj!")
        setRezultat(result)
        // rezultat = result

      }}>Check solution!</button>
      <div>{rezultat == undefined ? "" : "Solution: " + (rezultat === true ? "Resitev je pravilna!" : "Nepravilna resitev")}</div>
    </>
  )
}