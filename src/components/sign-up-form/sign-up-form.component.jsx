import { useState } from "react";
import {createAuthUserWithEmailAndPassword,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
import FormInput from "../from-input/form-input.component";
import Button from "../buttons/buttons.component";
import './sign-up-form.styles.scss';
const defaultFromFields = {
    displayName:'', 
    email:'',
    password:'',
    confrimPassword:'',
}

const SignUpForm = () =>{
    const [formFields,setFormFields] = useState(defaultFromFields);
    const {displayName,email,password,confrimPassword} = formFields;
    function handleChange(event){
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value});
    }
    const restFormField = () =>{
        setFormFields(defaultFromFields);
    }
    const StoreUser = async (event) => {
        event.preventDefault();
        if(password!==confrimPassword){
            alert('password must be same');
            return;
        } 
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
            await createUserDocumentFromAuth(user,{displayName})
            restFormField();
        } catch (error) {
            if(error.code=="auth/email-already-in-use"){
                alert('User Alredy Exists!');
            }else{
                console.log(error.message);
            }
        }
    }
    return(
        <div className="sign-up-container">
            <h2>Don't Have An Account?</h2>
            <span>Sign Up With Your Email and Password</span>
            <form onSubmit={StoreUser}>
                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName} />
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
                <FormInput label="Confrim Password" type="password" required onChange={handleChange} name="confrimPassword" value={confrimPassword}/>
                {/* <button type="submit">Sign Up</button> */}
                <Button type="submit" buttonType="google">Sign Up</Button>
            </form> 
        </div>
    )
}
export default SignUpForm;