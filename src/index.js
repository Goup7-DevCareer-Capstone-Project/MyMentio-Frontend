import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'react-toastify/dist/ReactToastify.css';
import dbserver from '../db.json';
import therapistserver from '../therapist.json';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
    <React.StrictMode>
      
      <dbserver/>
      <therapistserver/>
     
        <App /> 
        
      
    </React.StrictMode>

)