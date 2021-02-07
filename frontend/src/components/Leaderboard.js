import React, { useState } from "react"
import styled from 'styled-components/macro'

import { LeaderBoardItem } from "./LeaderBoardItem"

const LEADERBOARD_URL = "https://rebeka-project-sudoku.herokuapp.com/leaderboard"

export const LeaderBoard = () => {

  const [results, setResults] = useState([])

  const fetchLeaderBoard = () => {
    fetch(LEADERBOARD_URL)
      .then(response => response.json())
      .then(data => setResults(data))
      .catch(error => console.error(error));
  }
  console.log(`Results: ${results}`)


  return (
    <div>
      <h1>Leaderboard:</h1>
      {results.map(result => (
        <LeaderBoardItem
          key={result._id}
          username={result.username}
          time={result.time}
        />

      ))}
      <button onClick={fetchLeaderBoard}>Show leaderboard</button>
    </div>
  )

}