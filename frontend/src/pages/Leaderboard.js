import React, { useState } from "react"
import { useSelector } from "react-redux"
import Button from '@material-ui/core/Button'
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
      .then(data => setResults(data))
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
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={fetchLeaderBoard}
        >
          Show leaderboard
        </Button>
      </div>
    )
  } else {
    return <LoginHere text={"To see the leaderboard please"} />
  }
}

// --- STYLED COMPONENTS ---

// const Button = styled.button`
//   align-self: center;
//   font-size: 20px;
//   font-family: 'Patrick Hand', cursive;
//   background-color: #F2B90C;
//   color: #594020;
//   padding: 10px 15px;
//   margin: 8px 0;
//   border: 1px solid #594020;
//   border-radius: 5px;
//   cursor: pointer;
// `
