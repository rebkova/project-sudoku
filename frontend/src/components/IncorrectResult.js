import React from "react"
import { Link } from 'react-router-dom'

import { Text } from '../pages/Welcome'
import { Header } from '../components/Header'

export const IncorrectResult = () => {

  return (
    <>
      <Header />
      <Text>Nopes, this was not correct. <Link to={`/sudoku`}> Try again! </Link>
      </Text>
    </>
  )

}