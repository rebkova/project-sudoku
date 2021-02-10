import React from "react"
import styled from 'styled-components/macro'

export const LeaderBoardItem = ({ username, time }) => {

  return <ListEntry>{username}: {time} seconds</ListEntry>

}

// --- STYLED COMPONENTS ---

const ListEntry = styled.li`
  border: 1px solid red;
  /* list-style-type: none; */

`
