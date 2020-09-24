import React from 'react'
import Register from './Register'
import { Link } from 'react-router-dom'

function RegisterButton () {
    return (
        <>
        
        <Link to="./Register">
            <button>
            Register
            </button>
            </Link>
        </>
    )
}

export default RegisterButton