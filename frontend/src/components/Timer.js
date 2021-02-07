import React, { useState, useEffect } from "react"

import { CheckSolutionButton } from "../buttons/CheckSolutionButton"


export const Timer = () => {

  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [isActive, setIsActive] = useState(false);

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

      }, 1000)
    }

    //what does this line of code do? https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval
    //We return a cleanup function to clear the interval when the effect stops running
    return () => clearInterval(intervalId);

    //dependancy array
    // eslint-disable-next-line
  }, [isActive, second])

  //PLAN: add checkSolutionButton here and send minutes/seconds as props

  return (
    <>
      <div>Time: {minute < 10 ? `0${minute}` : minute} : {second < 10 ? `0${second}` : second}</div>
      <CheckSolutionButton
        minutes={minute}
        seconds={second}
      />
      {/* <button onClick={() => setIsActive(!isActive)}>Start/Pause</button> */}
    </>
  )
}