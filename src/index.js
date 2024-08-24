import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// for router
// import { BrowserRouter} from 'react-router-dom'
import App from './App';
// import Result from './condition';

import reportWebVitals from './reportWebVitals';
// import Students from './StudentLoop';
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvider from './context/StoreContext';
// import { StoreContext } from './context/StoreContext';
// import Smartphone from './Components/Smartphone';
// import Form from './Components/form';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
      <StoreContextProvider>
         <App />
      </StoreContextProvider>



   </BrowserRouter>













);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
