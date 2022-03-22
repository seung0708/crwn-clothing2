import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './navigation.scss';


import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'

const Navigation = () => (
    <>
        <header className='header-container'>
            <div className='logo-container'>
                <Link to='/'>
                    <CrwnLogo className='logo'/>
                </Link>
            </div>
            <nav className='navigation container'>
                <div className='nav-links-container'>
                    <Link to='/shop' className='nav-link'>
                        Shop
                    </Link>
                    <Link to='/signin' className='nav-link'>
                        Sign In
                    </Link>
                </div>
            </nav>
        </header>
        <Outlet />
    </>
)

export default Navigation
