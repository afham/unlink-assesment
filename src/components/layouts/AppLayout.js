import React from 'react'
import Navbar from '../navigation/Navbar'

function AppLayout( {children}) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default AppLayout