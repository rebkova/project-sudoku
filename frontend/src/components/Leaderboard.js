import React, { useState } from "react"
// import styled from 'styled-components/macro'

import { LEADERBOARD_URL } from '../urls'
import { LeaderBoardItem } from './LeaderBoardItem'

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