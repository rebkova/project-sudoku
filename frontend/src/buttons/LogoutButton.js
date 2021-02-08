import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
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
      <Link to={`/sessions`}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleLogout}>
          Logout
      </Button>
      </Link>
    </ButtonContainer>
  )
}

const ButtonContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  border: 1px solid red;
`