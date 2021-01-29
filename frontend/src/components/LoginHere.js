import React from 'react'
import { Link } from 'react-router-dom'

export const LoginHere = () => {
  return (
    <p>Already a user? <Link to={`/sessions`}>Login here</Link></p>
  )
}