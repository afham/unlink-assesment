import { Outlet, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const ProtectedRoutes = () => {
    const state = useSelector(state=>state?.loginReducer)

    const auth=state?.data==="token"
    
    return auth  ? <Outlet /> : <Navigate replace to="login" />
}

export default ProtectedRoutes