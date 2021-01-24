import React, { useState } from "react"

export const Timer = () => {

  const [count, setCount] = useState(0)

  // componentDidMount

  return (
    <div>
      Time: {count}
    </div>
  )
}