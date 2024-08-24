import React, { useState } from "react";
import './navbar.css';
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import Avatar from "../avatar/Avatar";

function Navbar(){

// const [bgColor, setBgColor]=useState('white');
// const [text, setText]=useState("");

// const changeColor =()=>{
//     const newColor = bgColor === 'white'?'lightblue':'white';
//     setBgColor(newColor);
// }

// const displayText=()=>{
    // setText("hello");
// }
    return( 
        <div className="main-nav">
        <div className="navbar">
            <div className="navbar-left">
                <img src={assets.add_icon_green} alt="" width="40px"/>
            </div>
        
                       <div className="navbar-1">
                <Link to='/' className="nav-item-nav-logo">
                    <img src={assets.logo} alt="" width="150px" className="logo"/>
                </Link>
                <Link to='/' className="nav-item nav-btn res-nav">
                    About
                </Link>
                <Link to='/' className="nav-item nav-btn res-nav">
                    Products
                </Link>
                <Link to='/' className="nav-item nav-btn res-nav">
                    For Teams
                </Link>
              
                <form>
                   
                    <input type='text' placeholder="Search..."/>
                    <img src={assets. search_icon} alt="search" width="20px" className="search-icon"/>
                </form>
            </div>

            <div className="navbar-2">
                {User===null ? (
                <Link to='/' className="nav-item nav-links">
                Log in
                </Link> 
                ):(
                    <>
                    <Avatar backgroundColor='#009dff' px='10px' py="7px" borderRadius='50%' color='white'>
                        <Link to='' style={{color:"white",textDecoration:"none"}}>
                        </Link>
                    </Avatar>
                    <button className="nav-item nav-link">Log Out</button>
                    </>
                )}

            </div>
        <div>
           
         </div> 
        </div>

</div>
    );
}

export default Navbar;