import React, { useState, useEffect } from "react"

export const Timer = () => {

  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {

        if (second > 59) {

          setMinute(minute + 1)
          setSecond(0)

        } else {
          setSecond(second + 1)
        }

      }, 1000)
    }

    //what does this line of code do? https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval
    return () => clearInterval(intervalId);

  }, [isActive, second])

  return (
    <>
      <div>Time: {minute < 10 ? `0${minute}` : { minute }} : {second < 10 ? `0${second}` : second}</div>
      <button onClick={() => setIsActive(!isActive)}>Start/Pause</button>
    </>
  )

  // const [second, setSecond] = useState('00');
  // const [minute, setMinute] = useState('00');
  // const [isActive, setIsActive] = useState(false);
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   let intervalId;

  //   if (isActive) {
  //     intervalId = setInterval(() => {
  //       const secondCounter = counter % 60;
  //       const minuteCounter = Math.floor(counter / 60);

  //       const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}` : secondCounter;
  //       const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}` : minuteCounter;

  //       setSecond(computedSecond);
  //       setMinute(computedMinute);

  //       setCounter(counter => counter + 1);
  //     }, 1000)
  //   }

  //   return () => clearInterval(intervalId);
  // }, [isActive, counter])

  // return (
  //   <>
  //     <div>Time: {minute} : {second < 10 ? `0${second}` : second}</div>
  //     <button onClick={() => setIsActive(!isActive)}>Start/Pause</button>
  //   </>
  // )

  //------ COPIED CODE ENDS ------------------
  // const [seconds, setSeconds] = useState(0)
  // const [minutes, setMinutes] = useState(0)
  // const [isActive, setIsActive] = useState(false);
  // const [counter, setCounter] = useState(0);

  // const updateTimer = () => {

  //   if (seconds > 59) {

  //     setMinutes(minutes + 1)
  //     setSeconds(0)
  //     console.log("hej")
  //   } else {
  //     setSeconds(seconds + 1)
  //     console.log(`Seconds: ${seconds}`)
  //   }

  //   setCounter(counter + 1)
  // }


  // useEffect(() => {
  //   let intervalId;

  //   if (isActive) {
  //     intervalId = setInterval(updateTimer, 1000)
  //   }

  //   //stops the setInterval f()
  //   return clearInterval(intervalId)
  // }, [isActive, counter, updateTimer])





  //---- WORKING TIMER ----------

  // var seconds = 0
  // var minutes = 0

  // const updateTimer = () => {

  //   if (seconds >= 59) {

  //     seconds = 0
  //     minutes = minutes + 1
  //     console.log(`Minutes: ${minutes}`)
  //   } else {
  //     seconds = seconds + 1
  //     console.log(`Seconds: ${seconds}`)
  //   }
  // }
  // setInterval(updateTimer, 1000)



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