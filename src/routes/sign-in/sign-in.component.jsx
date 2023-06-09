import {auth, signInWithGooglePopup , createUserDocumentFromAuth ,signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils"
import SignUpForm  from '../../components/sign-up-form/sign-up-form.component';
import LoginForm from '../../components/sign-in-form/sign-in-form.component'
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
const SignIn = ()=>{
    /*
        // useEffect(async ()=>{
        //     const response = await getRedirectResult(auth);
        //     if(response){
        //         const userDocRef = await createUserDocumentFromAuth(response.user);
        //     }
        // },[]);
    */
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup(); 
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return(
        <div>
            {/* <h1>Sign In Page</h1> */}
            <LoginForm />
            {/* <button onClick={logGoogleUser}>Sign in with Google Popup</button> */}
            {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
            <SignUpForm />
        </div>
    );
}

export default SignIn