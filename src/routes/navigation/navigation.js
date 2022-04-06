import React, {useContext} from 'react';
import { Outlet, Link } from 'react-router-dom';
import { UserContext } from '../../contexts/user/user';
import './navigation.scss';
import { signOutUser } from '../../utils/firebase.utils';

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'

const Navigation = () => {
    const {currentUser} = useContext(UserContext)

    // const signOutHandler = async () => {
    //     const res = await signOutUser()
    //     setCurrentUser(null)
    // }
    return( 
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
                        {
                            currentUser ? (
                                <span className='nav-link' onClick={signOutUser}>
                                    SIGN OUT
                                </span>
                            ) : 
                            (
                            <Link to='/auth' className='nav-link'>
                                Sign In
                            </Link>
                            )
                        }
                        
                    </div>
                </nav>
            </header>
            <Outlet />
        </>
    )
}

export default Navigation
