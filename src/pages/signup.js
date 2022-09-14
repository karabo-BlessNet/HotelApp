import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../components/config/firebase';



function SignUp(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory();

    const Register = (()=> {
        createUserWithEmailAndPassword(auth, email, password).then(()=>{
            alert("we in")
            history.push("/menu");

        }).catch((err)=>{
            console.log(err)
        })

    })

    return(
        <>
        <div className="login-bg">
        <div className="container">
            <h1>Register account</h1>
            <input type="email" className="textArea" placeholder="Enter your Email" onChange={(e)=> setEmail(e.target.value)} />
            <input type="password" className="textArea" placeholder="Enter your Password" onChange={(e)=> setPassword(e.target.value)} />
            <button className="signBtn" onClick={Register} id="loginBtn">SignUp</button>

        </div>
        </div>
        
        </>
        
    )
}

export default SignUp;
