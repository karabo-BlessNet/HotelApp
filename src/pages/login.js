import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import {Link} from "react-router-dom"
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../components/config/firebase';


// import Services from '../components/Services';
// import FeaturedRooms from '../components/FeaturedRooms';
// import Banner from '../components/Banner';
// import {NavLink} from 'react-router-dom';
// import { FaAlignRight } from 'react-icons/fa';
import '../App.css';
import './menu'






 
function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory()
    function filterUsers() {
        if(password === ("admin12345") && email ===("admin@gmail.com"))
        {
            history.push("/admin")
        }else
        {
        
            history.push("/menu")
            
        }
    }

    const login = (()=> {
        
        
        signInWithEmailAndPassword(auth, email, password).then(()=>{
            alert("we in")
            
           

            filterUsers(password,email);
        
        }).catch((err)=>{
            console.log(err)
            alert("User does not exist")
            
        })
    })




    return(
        <>
        <div className="login-bg">
        
        <div className="container">
            <h1>Login</h1>
            <input type="email" className="textArea" placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} /><br></br>
            <input type="password" className="textArea" placeholder="Enter your Password" onChange={(e)=> setPassword(e.target.value)} />
            <button  onClick={login}>Login</button>
            <span>Don't have account yet?</span>
             <span>
                <Link to="signup">Create account here</Link>
             
            </span>

        </div>
        </div>
        
        </>
        
    )
}

export default Login;