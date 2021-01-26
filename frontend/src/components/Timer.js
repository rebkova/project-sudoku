import React, { useState, useEffect } from "react"

export const Timer = () => {

  let [seconds, setSeconds] = useState(0)
  let [minutes, setMinutes] = useState(0)


  const updateTimer = () => {

    if (seconds > 59) {

      setMinutes(minutes + 1)
      setSeconds(0)
      console.log("hej")
    } else {
      setSeconds(seconds + 1)
      console.log(`Seconds: ${seconds}`)
    }
  }

  // useEffect = () => {
  //   setInterval(() => {
  //     setSeconds(seconds + 1)
  //   }, 1000)
  // }

  // setInterval(updateTimer, 1000)

  return (
    <div>
      Time: {minutes} : {seconds < 10 ? `0${seconds}` : seconds}
    </div>
  )

  //will be executed every time the second argument changes [] 
  // useEffect(() => {
  //   console.log("on mount")
  //   setSeconds(seconds + 1)

  //   if (seconds > 59) {
  //     setMinutes(minutes + 1)
  //   }
  // }, [2, 3, 4])

  // componentDidMount() {

  // var myInterval = setInterval(() => {

  //   setSeconds(seconds + 1)

  //   if (seconds > 59) {
  //     setMinutes(minutes + 1)
  //   }
  // }, 1000)
  //}


  // componentWillUnmount(
  //   clearInterval(myInterval)
  // )

  // clearInterval() -> invoke when the Check Solution/ submit button is pressed  


}