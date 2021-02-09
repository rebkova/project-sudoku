import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export const LoginHere = ({ text }) => {

  return (
    <LoginText text={text}>{text} <Link to={`/sessions`}>Log in here</Link> to continue.</LoginText>
  )
}

const LoginText = styled.p`
font-size: 15px;
`