import {useState} from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase.utils';
import CustomButton from '../button/custom-button';
import FormInput from '../form-input/form-input';
import './sign-up.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;
    

    const handleChange = event => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        //confirm if the two passwords matches
        //see if we authenticated that user with email and password
        //create a userDoc

        if (password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use')
            } else {
              console.log('user creation encountered an ', error)  
            }
        }
    } 

     return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label="Display Name"
                    type='text' 
                    required onChange={handleChange} 
                    name='displayName' 
                    value={displayName}
                />
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
                <FormInput 
                    label="Confirm Password"
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name='confirmPassword' 
                    value={confirmPassword}
                />
                <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
        </div>
    )
}

export default SignUpForm;