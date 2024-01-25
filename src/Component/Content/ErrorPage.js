import React from 'react'
import {useNavigate} from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate()
    const myNavigate = () =>{
        navigate(-1)
    }
  return (
    <div className='text-center'>
        <h6>ErrorPage</h6>
    <button className='btn btn-success' onClick={myNavigate}>
        Go Back
    </button>
    </div>
  )
}

export default ErrorPage