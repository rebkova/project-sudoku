import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import styled from 'styled-components/macro'
import React, { useState } from 'react'

import { SIGNUP_URL } from '../constants/urls'
import { user } from '../reducers/user'
import { SignupButton } from '../buttons/SignupButton'


//Imported from Material UI
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export const SignupForm = () => {

  const dispatch = useDispatch();
  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validEmail = { pattern: "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$" }

  const signupError = useSelector((store) => store.user.login.statusMessage);

  const handleSignupSuccess = (signupResponse) => {
    dispatch(user.actions.setUserId({ userId: signupResponse.userId }));
    dispatch(user.actions.setStatusMessage({ statusMessage: 'Signup success' }));
  };

  const handleSignupFailed = (signupError) => {
    dispatch(user.actions.setAccessToken({ accessToken: null }));
    dispatch(user.actions.setStatusMessage({ statusMessage: signupError }));
  };

  const onUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const onSignup = (event) => {

    event.preventDefault();

    fetch(SIGNUP_URL, {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        if (!response.ok) {
          // eslint-disable-next-line
          throw "Sorry, could not signup user";
        }
        return response.json();
      })
      .then((json) => handleSignupSuccess(json))
      .catch((err) => handleSignupFailed(err));
    setUsername("")
    setEmail("")
    setPassword("")
  }

  return (

    <form className={classes.root} onSubmit={onSignup} noValidate autoComplete="off">
      <FormContainer>
        <WelcomeContainer>
          Hi, sudoku friend!
        </WelcomeContainer>

        <TextField
          id="Username"
          label="Username"
          value={username}
          onChange={onUsernameChange}
          variant="outlined"
        />

        <TextField
          required id="standard-default"
          label="Email"
          value={email}
          onChange={onEmailChange}
          variant="outlined"
          inputProps={validEmail}
          autoComplete="nope"
          helperText={email === "" ? 'e.g hello@hello.com' : ' '}
        />

        <TextField
          id="Password"
          label="Password"
          value={password}
          onChange={onPasswordChange}
          variant="outlined"
          type="password" //To hide the input while typing
          helperText={password === "" ? 'min 5 characters, max 12' : ' '}
        />

        <SignupButton />
        {signupError && <p>{signupError}</p>}
      </FormContainer>
    </form>
  );
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 23px;
  border: 1px solid #737373;
`

const WelcomeContainer = styled.h1`
  color: #0D0D0D;
  font-size: 25px;
  font-weight: 400;
`
