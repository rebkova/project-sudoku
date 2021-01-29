import React from 'react'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { user } from "../reducers/user"

export const LogoutButton = () => {

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(user.actions.logout());
  };

  return (
    <ButtonContainer>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={handleLogout}>
        Logout
            </Button>
    </ButtonContainer>
  )
}

const ButtonContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`