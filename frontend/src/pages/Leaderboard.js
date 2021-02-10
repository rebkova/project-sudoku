import React, { useState } from "react"
import { useSelector } from "react-redux"
import Button from '@material-ui/core/Button'
import styled from 'styled-components/macro'

// import { LEADERBOARD_URL } from '../urls'
import { LEAD } from '../urls'
import { Header } from '../components/Header'
import { LoginHere } from "../components/LoginHere"
import { LeaderBoardItem } from '../components/LeaderBoardItem'

export const LeaderBoard = () => {

  const [results, setResults] = useState([])
  const accessToken = useSelector((store) => store.user.login.accessToken)

  const fetchLeaderBoard = () => {
    fetch(`http://localhost:8080/${LEAD}`)
      .then(response => response.json())
      .then(data => setResults(data))
      .catch(error => console.error(error));
  }
  console.log(`Results: ${results}`)

  if (accessToken) {
    return (
      <>
        <Header />
        <LeadWrap>
          <h1>Top 10</h1>
          <ListWrap>
            {results.map(result => (
              <LeaderBoardItem
                key={result._id}
                username={result.username}
                time={result.time}
              />
            ))}
          </ListWrap>
        </LeadWrap>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={fetchLeaderBoard}
        >
          Show leaderboard
        </Button>
      </>
    )
  } else {
    return <LoginHere text={"To see the leaderboard please"} />
  }
}

// --- STYLED COMPONENTS ---

const LeadWrap = styled.div`
  width: 400px;
  border: 1px solid blue;

`

const ListWrap = styled.ol`
  border: 1px solid orange;
  padding: 3px;
  margin: 5px;
  display: flex;
  flex-direction: column;
`