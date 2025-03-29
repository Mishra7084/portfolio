import React from "react";
import "../../index.css";
import AboutItem1 from "./AboutItem1";
import AboutItem2 from "./AboutItem2";
import AboutItem3 from "./AboutItem3";

export function About(){
    return(
        <>
        <h1 style={{marginLeft:"15rem",marginTop:"2rem:"}}>About-</h1>
        <AboutItem1/>
        <AboutItem2/>
        <AboutItem3/>
        </>
        
    );
}

export default About;