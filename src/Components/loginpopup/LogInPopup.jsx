import React,{useState} from 'react';
import './loginpopup.css';
import { assets } from '../../assets/assets';

const LogInPopup=({setShowLogin})=>{
    const [currState,setCurrState]=useState("Login")
    return(
        <div className='login-popup'>
          <form className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon}/>
            </div> 
            <div className="login-popup-inputs">
                {currState==="Login"?<></>:<input type="text" placeholder='your name' required/>}
 
                <input type="email" placeholder='your email' required/>
                <input type="password" placeholder='your password' required/>
            </div>
            <button>{currState==="Sign up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>by continuing, i agree to the terms of use and privacy policy.</p>
            </div>
            {currState==="Login"
            ?<p>create a new account?<span onClick={()=>setCurrState("Sign up")}>click here</span></p>
            :<p>Alerady have an account?<span onClick={()=>setCurrState("Login")}>Login here</span></p>}

            
          </form>
        </div>

    )
}
export default LogInPopup;