import React from 'react'

import { Header } from "../components/Header"
import { Timer } from "../components/Timer"
import { Grid } from "../components/Grid"
import { CheckSolutionButton } from "../buttons/CheckSolutionButton"

export const Sudoku = () => {

  return (
    <>
      <Header />
      <Timer />
      <Grid />
      <CheckSolutionButton />
    </>
  )

}