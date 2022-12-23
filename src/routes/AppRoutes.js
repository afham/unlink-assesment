import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoutes from './ProtectedRoutes'
import History from '../pages/History/History'
import Address from '../pages/Address/Address'
import Login from '../pages/Login/Login'
function AppRoutes() {


  return (
    <Routes>
        <Route path='login' element={<Login />} />
        <Route path='' element={<ProtectedRoutes />}>
            <Route path='history' element={<History />} />
            <Route path='address' element={<Address />} />
        </Route>
    </Routes>
  )
}

export default AppRoutes