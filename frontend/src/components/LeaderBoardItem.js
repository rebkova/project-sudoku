import React from "react"
import styled from 'styled-components/macro'

export const LeaderBoardItem = ({ username, time }) => {

  return (
    <ListEntry>
      <div>{username} </div>
      <div>{time} seconds</div>
    </ListEntry>
  )
}

// --- STYLED COMPONENTS ---

const ListEntry = styled.li`
  display: flex;
  justify-content: space-around;
  text-align: center;
  border-radius: 3px;
  margin-bottom: 5px;
  background-color: #D9D9D9;

  &:hover {
    border: 1px solid #3f51b5;
    box-shadow: 0 0 10px #3f51b5;
    margin-bottom: 2px;
  }
`
