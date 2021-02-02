import React from 'react'
import styled from 'styled-components/macro'
import Button from '@material-ui/core/Button'


export const LoginButton = () => {
  return (
    <ButtonContainer>
      <Button
        variant="contained"
        color="primary"
        type="submit">
        Login
      </Button>
    </ButtonContainer>
  )
}

const ButtonContainer = styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
`
