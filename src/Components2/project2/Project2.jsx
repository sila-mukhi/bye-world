import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import { Route, Routes } from 'react-router-dom';
import Home from "../../pages1/home/Home";
function Project2(){
  
    return(
        <div>
         
            <Routes>
            <Navbar  />
                 <Route path='/' element={<Home/>}/>
          
            </Routes>
        </div>

    );
}
export default Project2;