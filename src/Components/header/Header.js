import React from "react";
import './header.css';
import { assets } from "../../assets/assets";

const Header=()=>{
    return(
        <div className="header">
            <div className="header-content">
                <h2>Order Your Favourite food here</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi exercitationem eaque sunt dicta quae ipsam possimus cupiditate dolores adipisci corporis?</p>
                <button>ViewMenu</button>
            </div>
            <div className="header-content-img">
                <img src={assets.food} alt=""/>
            </div>
          
        

        </div>
    )
}
export default Header;