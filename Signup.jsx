import React from 'react';
import sample1 from '../images/sample1.png';
import sample2 from '../images/sample2.jpeg';
import signup from '../images/signup.jpg';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from '../components/Spinner';


const Signup = () => {

  const { loader,signup } = useContext(AppContext);


  const navigate = useNavigate();

  const [formData, setFormData] = useState( {name:"",phone:"",email:"",
  donor:"false",password:""} )

  const changeHandler = (event) =>{

    const {name,value,checked,type} = event.target;
    setFormData( (prevState)=>({
      ...prevState,
      [name]: type === "checkbox"? (checked) : (value)
    })
    )


  }

  const submitHandler = (event) =>{
    event.preventDefault();
    console.log(`Printing final object`);
    console.log(formData);
    signup(formData);

  }

  const loginRedirecter = (event)=>{
      navigate("/login");
  }


  return (
  
      
                <div className="signupmain">
                {loader ? (
                  <Spinner></Spinner>
                ) : (
                  <div className="form-body">
                    <h3 className="head">Registration Form</h3>
          
                    <div className="form-main">
                      <form className="form" onSubmit={submitHandler}>
                        <input
                          type="text"
                          placeholder="Name"
                          name="Name"
                          onChange={changeHandler}
                          value={formData.Namwe}
                        ></input>
                        <input
                          type="text"
                          placeholder="PhoneNumber"
                          name="PhoneNumber"
                          onChange={changeHandler}
                          value={formData.PhoneNumber}
                        ></input>
                        <input
                          type="text"
                          placeholder="Email"
                          name="email"
                          onChange={changeHandler}
                          value={formData.email}
                        ></input>
                        <input
                          type="password"
                          placeholder="Password"
                          name="password"
                          onChange={changeHandler}
                          value={formData.password}
                        ></input>
          
                        <div className="checkbox">
                          <label htmlFor="checkbox">Donor:</label>
                          <input type="checkbox" name="checkbox1"></input>
                        </div>
          
                        <label htmlFor="country">Country</label>
                        <select
                          id="country"
                          name="country"
                          onChange={changeHandler}
                          value={formData.country}
                        >
                          <option>India</option>
                          <option>Nepal</option>
                          <option>Bhutan</option>
                          <option>Bangladesh</option>
                        </select>
                      </form>
                    </div>
          
                    <button>Submit</button>
          
                    <div className="formsubmit">
                      <h5>Already registered?</h5>
                      <button onClick={loginRedirecter}>Login</button>
                    </div>
                  </div>
                )}
</div>          

  
  )
}

export default Signup