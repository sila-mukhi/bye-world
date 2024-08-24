import React,{useState} from 'react'
import './App.css';
import Navbar from './Components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeOrder/PlaceOrder'
import Footer from './Components/footer/Footer'
import LogInPopup from './Components/loginpopup/LogInPopup';
// import Project1 from './Components/project1/Project1';
// import Project2 from './Components2/project2/Project2';


function App() {
 
  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<LogInPopup setShowLogin={setShowLogin}/>:<></>}
      <div className="App">
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/placeOrder' element={<PlaceOrder/>}/>
      </Routes>
  
   
    </div> 
    
    <Footer/>
    </>
  );
}
// const x=5;
// let text="good";
// if(x>10){
//   text="hello";
// }
// const myArray=<h1 className="hi">{text}</h1>
export default App;
