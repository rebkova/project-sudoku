import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  login: {
    accessToken: localStorage.accessToken || null,
    username: localStorage.username || "",
    userId: 0,
    statusMessage: "",
  },
};

export const user = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setAccessToken: (state, action) => {
      const { accessToken } = action.payload
      state.login.accessToken = accessToken
      localStorage.setItem('accessToken', accessToken)
    },
    setUsername: (state, action) => {
      const { username } = action.payload
      console.log(`Username: ${username}`)
      state.login.username = username
      localStorage.setItem('username', username)
    },
    setUserId: (state, action) => {
      const { userId } = action.payload
      state.login.userId = userId
    },
    setStatusMessage: (state, action) => {
      const { statusMessage } = action.payload
      state.login.statusMessage = statusMessage
    },
    logout: (state, action) => {
      state.login.userId = 0
      state.login.accessToken = null
      state.login.username = ""
      state.login.statusMessage = ""
      localStorage.removeItem('accessToken')
      localStorage.removeItem('username')
      //remove also sudoku digits, but in which reducer?
    },
  }
})