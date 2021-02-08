import React from 'react'

import { Header } from '../components/Header'
import { PlayButton } from '../buttons/PlayButton'

export const Welcome = () => {
  //get & displaythe username!

  return (
    <>
      <Header />
      <p>"Welcome page text"</p>
      <PlayButton />
    </>
  )
}