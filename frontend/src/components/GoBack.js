import React from 'react'
import { Link } from 'react-router-dom'

export const GoBack = () => {
    
    return (
        <p>Don't have a player? <Link to={`/`}>Create one here</Link></p>
    )
}