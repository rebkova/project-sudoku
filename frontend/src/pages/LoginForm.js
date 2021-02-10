import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import styled from 'styled-components'

import { Welcome } from './Welcome'
// import { LOGIN_URL } from '../urls'
import { SESH } from '../urls'
import { user } from '../reducers/user'
import { GoBack } from 'components/GoBack'
import { LoginButton } from '../buttons/LoginButton'



//Imported with Material UI 
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export const LoginForm = () => {

  const classes = useStyles();
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const accessToken = useSelector((store) => store.user.login.accessToken);   //To access the users Access Token
  const loginError = useSelector((store) => store.user.login.statusMessage);  //To displays error message when login fails

  const handleLoginSuccess = (loginResponse) => {
    dispatch(
      user.actions.setAccessToken({ accessToken: loginResponse.accessToken })
    );
    dispatch(user.actions.setUserId({ userId: loginResponse.userId }));
    dispatch(user.actions.setStatusMessage({ statusMessage: 'Login success' }));
  };

  const handleLoginFailed = (loginFailed) => {
    dispatch(user.actions.setAccessToken({ accessToken: null }));
    dispatch(user.actions.setStatusMessage({ statusMessage: loginFailed }));
  }

  const onUsernameLoginChange = (event) => {
    setUsername(event.target.value);
  };

  const onPasswordLoginChange = (event) => {
    setPassword(event.target.value);
  };

  //Fetch login
  const onLogin = (event) => {
    event.preventDefault();

    fetch(`http://localhost:8080/${SESH}`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        if (!response.ok) {

          // eslint-disable-next-line
          throw "Sorry, could not login user";
        }
        return response.json();
      })
      .then((json) => handleLoginSuccess(json))
      .catch((err) => handleLoginFailed(err));

    // To reset input fields after user clicks on Login button
    setUsername("")
    setPassword("")
  }

  if (!accessToken) {

    return (
      <form className={classes.root} onSubmit={onLogin} noValidate autoComplete="off">
        <LoginContainer>
          <WelcomeContainer>
            Please login
          </WelcomeContainer>

          <TextField
            id="UsernameLogin"
            label="Username"
            value={username}
            onChange={onUsernameLoginChange}
            variant="outlined"
          />

          <TextField
            id="PasswordLogin"
            label="Password"
            value={password}
            onChange={onPasswordLoginChange}
            variant="outlined"
            type="password" //To hide the input while typing
          />

          <LoginButton />
          {loginError && <p>{loginError}</p>}
          <GoBack />
        </LoginContainer>
      </form>
    );
  } else {
    return <Welcome />
  }
};

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
`

const WelcomeContainer = styled.h1`
  color: darkblue;
  margin-top: -10x;
  padding-bottom: 15px;
`