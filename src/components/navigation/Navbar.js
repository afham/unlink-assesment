import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/action/login'
function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

  return (
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">SPACEX</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class={`nav-link ${location.pathname==="/history" ? "active" : ""}`} onClick={()=>navigate('/history')} style={{cursor:"pointer"}}>History</a>
                  </li>
                  <li class="nav-item">
                    <a class={`nav-link ${location.pathname==="/address" ? "active" : ""}`} onClick={()=>navigate('/address')} style={{cursor:"pointer"}}>Addresss</a>
                  </li>
            
              </ul>
              <div className='d-flex w-100 justify-content-end'>
                <a class="nav-link" onClick={()=>dispatch(logout())} style={{cursor:"pointer" , color:"red"}}>Log out</a>
              </div>

            </div>
            
        </div>
    </nav>
  )
}

export default Navbar