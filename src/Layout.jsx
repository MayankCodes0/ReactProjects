import { useEffect } from 'react'
import Header from './components/header/Header'
import { Outlet, useLocation } from 'react-router'

function Layout() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Layout