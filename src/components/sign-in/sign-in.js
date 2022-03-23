import {useState} from 'react';
import { signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signinWithGooglePopup,  } from '../../utils/firebase.utils';
import CustomButton from '../button/custom-button';
import FormInput from '../form-input/form-input';
import './sign-in.scss';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields;
    

    const handleChange = event => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        const {user} = await signinWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    } 

    const handleSubmit = async (event) => {
        event.preventDefault();
        //confirm if the two passwords matches
        //see if we authenticated that user with email and password
        //create a userDoc

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password)
            console.log(response)
            resetFormFields();
        } catch (error) {
           switch(error.code) {
               case 'auth/wrong-password':
                   alert('incorrect password for email')
                   break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error);
           }
        }
    } 

     return (
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label="Email"
                    type='email' 
                    required 
                    onChange={handleChange} 
                    name='email' 
                    value={email}
                />
                <FormInput 
                    label="Password"
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name='password' 
                    value={password}
                    />
                <div className='buttons-container'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</CustomButton>
                </div>
                
            </form>
        </div>
    )
}

export default SignInForm;