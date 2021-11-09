import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
<BrowserRouter>
   <App />
</BrowserRouter>
,document.getElementById('root'));




//Browser router ka kaam ye h ki jitne bh page ko render krana h
//usko hmesha browser router elemnt me likhna padta h
//ek se jyada elelment ko hm directly render ni kra skte h
//Aur agar jyada render krana h to div ya react ka syntactic 
//sugar form use krna padeaga