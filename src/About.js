import React from "react";
import Web from "../src/image/img7.png";
import Common from "./Common";
//import { NavLink } from "react-router-dom";
const About =()=>{
    return(
        <>
         <Common name='Welcome to About Page' 
         imgsrc={Web} 
         visit="/contact" 
         btnName="Contact Now"/>
        </>
    )
}

export default About;