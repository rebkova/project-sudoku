import Button from '@material-ui/core/Button'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import React from 'react'

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
`

// const Button = styled.button`
//   align-self: center;
//   font-size: 20px;
//   font-family: 'Patrick Hand', cursive;
//   background-color: #F2B90C;
//   color: #594020;
//   padding: 10px 15px;
//   margin: 8px 0;
//   border: 1px solid #594020;
//   border-radius: 5px;
//   cursor: pointer;
// `