import React from "react"
import { useSelector } from "react-redux"

import { CorrectResult } from '../components/CorrectResult'
import { IncorrectResult } from '../components/IncorrectResult'


import { Header } from '../components/Header'

export const Result = () => {

  const result = useSelector(store => store.sudoku.result)
  console.log(`result from Result component: ${result}`)

  if (result === true) {

    return (
      <>
        <Header />
        <CorrectResult />
      </>
    )
  } else {
    return <IncorrectResult />
  }
}