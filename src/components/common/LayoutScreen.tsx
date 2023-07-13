import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutScreen = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default LayoutScreen