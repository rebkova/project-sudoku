import React from 'react'
import { Link } from 'react-router-dom'

export const GoBack = () => {
    
    return (
        <p>Don't have an account? <Link to={`/`}>Sign up here</Link></p>
    )
}