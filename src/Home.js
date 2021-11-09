import React from "react";
import Web from "../src/image/img.svg"
//import { NavLink } from "react-router-dom";
import Common from "./Common";
const Home =()=>{
    return(
        <>
        <Common name='Grow Your Business With Us' 
         imgsrc={Web} 
         visit="/contact" 
         btnName="Contact Now"/>
        </>
    )
}

export default Home;