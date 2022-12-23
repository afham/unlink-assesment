import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/action/login';
function Login() {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loginHandler = () => {
    dispatch(login())
    navigate('../history' , {replace:true})
  }

  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:"100vh" , }}>
      <div className='d-flex flex-column'>
        <h3>Please Login</h3>
        <button className='btn btn-primary' onClick={loginHandler}>Login</button>
      </div>

    </div>
  )
}

export default Login