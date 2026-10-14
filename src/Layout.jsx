import React, { useEffect } from 'react'
import Header from './components/header/Header'
import { Outlet, useLocation } from 'react-router'


function Layout() {

    const {pathName} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathName]);
    
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Layout