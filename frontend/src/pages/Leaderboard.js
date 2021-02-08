import React, { useState } from "react"
import { useSelector } from "react-redux"
// import styled from 'styled-components/macro'

import { LEADERBOARD_URL } from '../urls'
import { Header } from '../components/Header'
import { LoginHere } from "../components/LoginHere"
import { LeaderBoardItem } from '../components/LeaderBoardItem'

export const LeaderBoard = () => {

  const [results, setResults] = useState([])
  const accessToken = useSelector((store) => store.user.login.accessToken)

  const fetchLeaderBoard = () => {
    fetch(LEADERBOARD_URL)
      .then(response => response.json())
      .then(data => console.log(`Data: ${data.username}`))
      // .then(data => setResults(data))
      .catch(error => console.error(error));
  }
  console.log(`Results: ${results}`)

  if (accessToken) {
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
  } else {
    return <LoginHere text={"To see the leaderboard please"} />
  }

}