import React, {useEffect} from 'react'
import { getRedirectResult } from 'firebase/auth';
import { auth, signinWithGooglePopup, signinWithGoogleRedirect, createUserDocumentFromAuth } from '../../utils/firebase.utils';
import SignUpForm from '../../components/sign-up/sign-up';
import SignInForm from '../../components/sign-in/sign-in';
import './authentication.scss'
const Authentication = () => {

    // useEffect( async () => {
    //     const response = await getRedirectResult(auth)
    //     console.log(response)
    //     if(response) {
    //         const userDocRef = await createUserDocumentFromAuth(response.user)
    //     }
    // }, []) //empty array means runs this callback once when this component mounts for the first time

    
    
    return(
        <div className='auth-container'>
            <SignInForm />
            {/* <button onClick={signinWithGoogleRedirect}>Sign in with Google Redirect</button> */}
            <SignUpForm />
        </div>
    )
}

export default Authentication