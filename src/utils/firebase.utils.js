import { initializeApp } from 'firebase/app';
import {
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider
} from 'firebase/auth'
import {
    getFirestore,
    doc, //actually document instance
    getDoc, //getting the document's data
    setDoc //setting the document's data
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDiLu4xrkPLRuY_h-m-qeSUSJDL7Meuhp0",
    authDomain: "crwn-clothing-69b60.firebaseapp.com",
    projectId: "crwn-clothing-69b60",
    storageBucket: "crwn-clothing-69b60.appspot.com",
    messagingSenderId: "704748990109",
    appId: "1:704748990109:web:dd0e3b2129943226ecae74"
};

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth()
export const signinWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot)

    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch(error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;

    //check if user data exists
        //create / set the document with the data from userAuth in my collection

    //return userDocRef
}