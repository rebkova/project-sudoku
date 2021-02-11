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

    //what does this line of code do? https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval
    //We return a cleanup function to clear the interval when the effect stops running
    return () => clearInterval(intervalId);

    //dependancy array
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

// const StartPauseButton = styled.button`
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


