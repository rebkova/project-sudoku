import React, { useState } from "react"
// import styled from 'styled-components/macro'

import { Header } from '../components/Header'
import { LEADERBOARD_URL } from '../urls'
import { LeaderBoardItem } from '../components/LeaderBoardItem'

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
      <Header />
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