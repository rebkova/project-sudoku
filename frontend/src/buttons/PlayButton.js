import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from '@material-ui/core/Button'


export const PlayButton = () => {
  return (
    <ButtonContainer>
      <Link to={`/sudoku`}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
        >
          Play Sudoku!
      </Button>
      </Link>
    </ButtonContainer >
  )
}

const ButtonContainer = styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
`