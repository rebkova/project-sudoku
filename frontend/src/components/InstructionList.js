import React from 'react'
import styled from "styled-components/macro"


export const InstructionList = () => {

  return (
    <List>
      <li>Use Numbers 1-9</li>
      <Text>In a row &#38; column and per 3x3 square.</Text>
      <li>Don’t Repeat Any Numbers</li>
      <Text>Neither in a row/column nor in a 3x3 square.</Text>
      <li>Don’t Guess</li>
      <Text>Use logic, every space will keep an exact number.</Text>
      <li>Use Process of Elimination</li>
      <Text>From the list of numbers missing in a space - can you exclude any by checking their presence in a row/column/3x3 square?</Text>
    </List>
  )
}

// --- STYLED COMPONENTS ---

const List = styled.ol`
  list-style-type: none; 
  font-weight: 500;
  font-size: 16px;
`

const Text = styled.p`
  font-weight: lighter;
  font-size: 13px;
  margin: 0 0 7px 0;

`