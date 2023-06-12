import { useState  } from "react";
import FormInput from "../from-input/form-input.component";
import {signInWithGooglePopup,signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils"
import Button from "../buttons/buttons.component";
import './sign-in-form.styles.scss';
const loginCredentials = {
    email:'',
    password:''
}

const SingInForm = () =>{

    const [formFields,setFormFields] = useState(loginCredentials);
    const {email,password} = formFields;


    function handleChange(event){
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value});
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup(); 
    }

    const  handleSubmit = async(event) => {
        event.preventDefault();
        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email,password)
            restFormField();
        } catch (error) {
            if(error.code=="auth/wrong-password"){
                alert("Password is Wrong");
            }
            if(error.code=="auth/user-not-found"){
                alert("User doesn't exits");
            }else{
                console.log(error);
            }
        }
    }
    const restFormField = () =>{
        setFormFields(loginCredentials);
    }
    return(
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span> 
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" name="email" type="email" required value={email} onChange={handleChange}/>
                <FormInput label="Password" name="password"  type="password" required value={password} onChange={handleChange}/>
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" onClick={signInWithGoogle} buttonType="google">SIGN IN WITH GOOGLE</Button>
                </div>
            </form>
        </div>
    )
}

export default SingInForm;