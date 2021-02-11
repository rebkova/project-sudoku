import React from 'react'
import styled from "styled-components/macro"

import { Header } from '../components/Header'
import { PlayButton } from '../buttons/PlayButton'
import { InstructionList } from '../components/InstructionList'

export const Welcome = () => {
  //get & displaythe username!

  return (
    <>
      <Header />
      <Text>How to play</Text>
      <Section>
        <InstructionList />
      </Section>
      <PlayButton />
    </>
  )
}

// --- STYLED COMPONENTS ---

export const Text = styled.h2`
  font-weight: 400;
`

const Section = styled.section`
  border-radius: 5px;
  background-color: #D9D9D9;
  width: 500px;
`


