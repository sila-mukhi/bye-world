import React from "react";
import './form.css';
import { assets } from "../../assets/assets";
function Form(){
    return(
        <div className="form-container">
            <div className="form-column">

                <div className="form-header">
                    <div className="text">Sign up</div>
                    <div className="underline"></div>
                </div>

                <div className="form-input">
                   
                        <div className="inputs">
                            <img src={assets.add_icon_green} alt=""/>
                            <input type="text" placeholder="Enter Your Name"/>
                        </div>
                        <div className="inputs">
                            <img src={assets.add_icon_white} alt=""/>
                            <input type="email" placeholder="Enter Your mail"/>
                        </div>
                   
                </div>

            </div>



        </div>
    );

}
export default Form;