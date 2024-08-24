import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/header/Header'
import ExploreMenu from '../../Components/exploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import AppDownLoad from '../../Components/appDownload/AppDownLoad'
import Progress from '../../Components/progress_bar/Progress'
import Form from '../../Components/form/Form'
// import Progress from '../../Components/progress_bar/Progress'
// import Img from '../../Components/header/img/Img'
// import Task from '../../Components/Task'
// import Try from '../../Components/try/try'
// import Task from '../../Components/Task'
// import Try from '../../Components/try/Try'


const Home = () =>{
    const[category,setCategory]=useState("All");
    return(
        <div>
           
           <Header/>
           <ExploreMenu category={category} setCategory={setCategory}/>           
           <FoodDisplay category={category}/>          
           <AppDownLoad/>       
        </div>
    )
}

export default Home