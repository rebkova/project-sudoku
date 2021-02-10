import React, { useState } from "react"
import { useSelector } from "react-redux"
import Button from '@material-ui/core/Button'
import styled from 'styled-components/macro'

import { LEADERBOARD_URL } from '../urls'
// import { LEAD } from '../urls'
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
      <>
        <Header />
        <LeadWrap>
          <Title>Top 10</Title>
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
  display: flex;
  flex-direction: column;
  width: 350px;
  border: 1px solid blue;
`

const Title = styled.h1`
  align-self: center;
  font-size: 27px;
  margin-top: 0;
`

const ListWrap = styled.ol`
  list-style-type: none;
  padding: 3px;
  margin: 5px;
  display: flex;
  flex-direction: column;

  border: 1px solid orange;
`