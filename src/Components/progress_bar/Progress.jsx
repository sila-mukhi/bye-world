import React from "react";
import './progress.css';
import { progress_list } from "../../assets/assets";
function Progress(){
    return(
        <div className="class">
        <div className="container">
            <h1>React Progress Bar</h1>
      
                
                    <div className="progress-bar-container">
                        <span>HTML</span>
                        <div className="progress-bar">
                            <div className="skill-per html">
                                <div className="tooltip">95%</div>
                            </div>
                        </div>
                    </div>


                    <div className="progress-bar-container">
                        <span>CSS</span>
                        <div className="progress-bar">
                            <div className="skill-per css">
                                <div className="tooltip">90%</div>
                            </div>
                        </div>
                    </div>



           
        </div>
        </div>
    )
}
export default Progress;