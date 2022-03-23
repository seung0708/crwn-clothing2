import React, {useEffect} from 'react'
import { getRedirectResult } from 'firebase/auth';
import { auth, signinWithGooglePopup, signinWithGoogleRedirect, createUserDocumentFromAuth } from '../../utils/firebase.utils';
import SignUpForm from '../../components/sign-up/sign-up';

const SignIn = () => {

    // useEffect( async () => {
    //     const response = await getRedirectResult(auth)
    //     console.log(response)
    //     if(response) {
    //         const userDocRef = await createUserDocumentFromAuth(response.user)
    //     }
    // }, []) //empty array means runs this callback once when this component mounts for the first time

    const logGoogleUser = async () => {
        const {user} = await signinWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    } 
    
    return(
        <div className='sign-in-page'>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign in with Google Pop up</button>
            {/* <button onClick={signinWithGoogleRedirect}>Sign in with Google Redirect</button> */}
            <SignUpForm />
        </div>
    )
}

export default SignIn