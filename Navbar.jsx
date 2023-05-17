import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../images/logo.jpeg";
import { useNavigate } from 'react-router-dom';


import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

import './style.css';

const Navbar = () => {

  const { user , logout } = useContext(AppContext);


    const navigate = useNavigate();

    function clickHandler() {
        navigate('/signup');
    }

    function donorHandler(){
        navigate('/contact');
    }

    function logoutHandler(event){
      event.preventDefault();
      logout();
    }


  return (
    <div className='nav-div'>

    <nav className='navbar'>

    <div className='logo'>
        <NavLink to="/">
            <img className='logo' src={logo} alt='logo'/>
        </NavLink>
        </div>

        <ul className='options'>
            <li className="o1">
            <NavLink className='navs' activeClassName="active" exact to="/">Home</NavLink>
            </li>

            <li className="o2">
            <NavLink className='navs' activeClassName="active" to="/vision">Vision</NavLink>
            </li>

            <li className="o3">
                <NavLink className='navs' activeClassName="active" to="/stories">Stories</NavLink>
            </li>

            <li className="o4">
            <NavLink className='navs' activeClassName="active" to="/contact">Contact</NavLink>
            </li>
        </ul>

    </nav>

    {
            user ? 
            (<button className='button'>Hey {user.name}!</button>) 
            : 
            (<button className='button' onClick={clickHandler}>Sign Up</button>) 
            
        }

        {
            user ? 
            (<button className='button' onClick={logoutHandler}>logout</button>) 
            : 
            <button className='button' onClick={donorHandler}>Donate</button>
            
        }

   
</div>
  )
}

export default Navbar;