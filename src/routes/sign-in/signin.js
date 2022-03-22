import React from 'react'
import { signinWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signinWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    } 
    return(
        <div className='sign-in-page'>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sing with Google Pop up</button>
        </div>
    )
}

export default SignIn