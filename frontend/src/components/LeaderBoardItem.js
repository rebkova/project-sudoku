import React from "react"
// import styled from 'styled-components/macro'

export const LeaderBoardItem = ({ username, time }) => {

  return (
    <div>
      <li>{username}: {time} seconds</li>
    </div>
  )
}