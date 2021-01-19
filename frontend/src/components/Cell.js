import React from "react"



export const Cell = ({ row }) => {



  return (
    <form>
      {row.map((item, index) => (
        <input
          type="number"
          key={index}
          value={item}
        // onChange={ }
        />
      ))}

    </form>
  )

}