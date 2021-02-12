import React, { useState, useEffect } from "react"
import Button from '@material-ui/core/Button'
import styled from "styled-components/macro"
import { useDispatch } from "react-redux"

import { sudoku } from "../reducers/sudoku"


export const Timer = () => {

  const dispatch = useDispatch()

  const [second, setSecond] = useState(0)
  const [minute, setMinute] = useState(0)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {

    let intervalId;

    if (isActive) {

      intervalId = setInterval(() => {

        if (second >= 59) {

          setSecond(0)
          setMinute(minute + 1)

        } else {
          setSecond(second + 1)
        }

        dispatch(sudoku.actions.updateTime({ minute, second }))

      }, 1000)
    }

    return () => clearInterval(intervalId);

    // eslint-disable-next-line
  }, [isActive, second])

  return (
    <>
      <TimerWrap>
        Easy | {minute < 10 ? `0${minute}` : minute}:{second < 10 ? `0${second}` : second}
      </TimerWrap>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={() => setIsActive(!isActive)}
      >
        Start/Pause
      </Button>
    </>
  )
}

// --- STYLED COMPONENTS ---

const TimerWrap = styled.div`
  background-color: #D9D9D9;
  padding: 4px;
  border-radius: 5px;
  font-weight: bold;
  margin-bottom: 35px;
`

