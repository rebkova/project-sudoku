import React from "react"
import styled from "styled-components/macro"



export const Cell = ({ row }) => {



  return (
    <CellWrap>
      <form>
        {row.map((item, index) => (
          <CellInput
            type="number"
            key={index}
            value={item}
          //TODO: need onChange handler -> track state?
          // onChange={ }
          />
        ))}

      </form>
    </CellWrap>
  )
}

// --- STYLED COMPONENTS ---

export const CellWrap = styled.div`
//perhaps delete this styled component?
  border: 1px solid green;
`

export const CellInput = styled.input`
  box-sizing: border-box;
  width: 35px;
  height: 35px;
  /* margin: 2px; */
  border: 1px solid grey;

`