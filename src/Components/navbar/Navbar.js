import React, { useContext, useState } from 'react'
import './navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';



const Navbar=({setShowLogin})=>{

    const[menu,setMenu]=useState("menu");
    const {getTotalCartAmount}=useContext(StoreContext)
    return(
        <div className="navbar">
               <Link to='/'>
                 <img src={assets.logo} alt=""width="150px"  className="logo"/>
               </Link>
                <ul className="navbar-menu">
                    <Link to='/' onClick={()=>setMenu("home")}  className={menu==="home"?"active":""}>HOME</Link>
                    <a href="#explore-menu" onClick={()=>setMenu("menu")}  className={menu==="menu"?"active":""}>MENU</a>
                    <a href="#app-download" onClick={()=>setMenu("mobile-app")}  className={menu==="mobile-app"?"active":""}>MOBILE-APP</a>
                    <a href="#footer" onClick={()=>setMenu("contact-us")}  className={menu==="contact-us"?"active":""}>CONTACT-US</a>
                </ul>
                                 
                <div className="navbar-right">
                    <img src={assets.search_icon} width="20px" alt=""/>
                    <div className="cart">
                        <Link to='/cart'>
                            <img src={assets.basket_icon} width="20px" alt=""/>
                        </Link>
                        <div className={getTotalCartAmount()===0?"":"dot"}></div>
                    </div>
                    

                    <button onClick={()=>setShowLogin(true)}>SIGN-IN</button>
                </div>
        
        </div>
    )
}
export default Navbar;