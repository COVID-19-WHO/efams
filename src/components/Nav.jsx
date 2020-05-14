import React from 'react';
import '../styles/nav.css'
import home from '../Images/icons/home.png'
import {withRouter,NavLink} from 'react-router-dom'


import logo from "../Images/who1.jpeg"

const Nav = (props) => {

    
    const handleCategories = ()=>{
        if(props.check.current !== null){
            props.check.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
                duration: "5000"
              })

        }
       
    };



    return (
        <div className="nav">
            <div className="brand">
                
                <img src={logo} alt="WHO" className="logo"  />
                
            <h2 className="emen_out" >
                <span className="emen">
                Emergency 
                    
               </span>
               Relief Response 
            </h2>
           
            </div>
            <div className="home" title="HOME"> 
            <NavLink to="/">
                    <img src={home} alt=""/ >
                    </NavLink>
                </div>
            <p onClick={handleCategories} title="RELIEF CATEGORIES">
               Relief Categories
            </p>
            
            <p  title="CONTRIBUTORS">
                <NavLink to="/Contributors">
                Contributors
                </NavLink>
            </p>
            <p title="ABOUT US">
                <NavLink to="/About_Us">
                About Us
                </NavLink>
            </p>
            <NavLink to="/Donate" className="donate" title="DONATE TO HELP OTHERS">
               Donate
            </NavLink>

        </div>
    );
}

export default withRouter( Nav ) ;
