import React from 'react'

import { Timer } from "../components/Timer"
import { Grid } from "../components/Grid"
import { CheckSolutionButton } from "../buttons/CheckSolutionButton"

export const Sudoku = () => {

  return (
    <>
      <Timer />
      <Grid />
      <CheckSolutionButton />
    </>
  )

}