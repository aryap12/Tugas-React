import React from "react";
import Navbar from "../components/home";
import { Navbar_Obj } from "../utils/constans";
const About =()=>{
    const navbar = Navbar_Obj;
    return (
        <div>
            {navbar.map((nav)=>{
          return  <Navbar key={nav.id} nav={nav}/>
        })}
        <br/>
        <br/>
        <br/>
        <h1>This is About Page</h1>
        
        </div>
        
    )
}
export default About;