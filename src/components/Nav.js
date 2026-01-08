import "./Nav.css"
import { useState,useEffect } from "react";
function Nav(){

    const [tri,setTri]=useState(false);
    
    useEffect(()=>{
        const side=document.getElementById("sidebar");
        side.classList.toggle("activate");
         
    },[tri])

    return(
        <div className="sidebar" id="sidebar">
            <div className="logo">
                <span id="logo-text">Smart Link</span>
                <button id="bars" onClick={()=>{setTri(!tri)}}>
                    <i className="fas fa-bars"></i>
                </button>
            </div>

            <div className="menu">
                <ul>
                    <li><i className="fas fa-home"> <span>Home</span></i></li>
                    <li> <i className="fas fa-user"> <span>User</span></i></li>
                    <li> <i className="fas fa-phone"> <span>Phone</span></i></li>
                    <li><i className="fas fa-route"><span>Location</span></i></li>
                   
                </ul>
            </div>


        </div>

    )
}
export default Nav;