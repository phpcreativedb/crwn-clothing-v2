import { useState } from "react";
import FormInput from "../from-input/form-input.component";
import Button from "../buttons/buttons.component";


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
    function handleSubmit(event) {
        
    }
    return(
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span> 
            <from onSubmit={handleSubmit}>
                <FormInput label="Email" name="email" required value={email} onChnage={handleChange}/>
                <FormInput label="Password" name="password" required value={password} onChnage={handleChange}/>
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType="google">SIGN IN WITH GOOGLE</Button>
                </div>
            </from>
        </div>
    )
}

export default SingInForm;