import React from "react"
import styled from "styled-components/macro"

import { Cell } from "./Cell"

export const Row = ({ row }) => {


  return (
    <RowWrap>
      {row.map((item, index) => (
        <Cell
          type="number"
          key={index}
          digit={item}

          //TODO: need onChange handler -> track state?
          onChange={console.log("Changed an input")}
        />
      ))}
    </RowWrap>
  )
}

// --- STYLED COMPONENTS ---

export const RowWrap = styled.div`
//perhaps delete this styled component?
  display: flex;
  justify-content: center;
  border: 1px solid green;
`

