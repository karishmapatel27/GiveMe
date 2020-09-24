import React from 'react'
import Register from './Register'
import { Link } from 'react-router-dom'

function RegisterButton () {
    return (
        <>
        
        <Link to="/register">
            <button>
            Register
            </button>
            </Link>
        </>
    )
}

export default RegisterButton