import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import React from "react";


axios.defaults.withCredentials = true;


export const AppContext = createContext();
export default function AppContextProvider( {children} ){

    const navigate = useNavigate();

    const [loader, setLoader] = useState(false);
    const [user, setUser] = useState(null);


    //login
    const login = async(email,password)=>{
        setLoader(true);

        try{

            const body = {
                email,
                password,
            }

            const res = await axios.post("http://localhost:4000/api/v1/login" , body);

            if(res.data.success === false){
                console.log("inside success false body-> ", res.response.data.success);
                //toast.error(`${res.data.message}`);
                navigate("/login");
            }
            setUser(res.data.data);
            // toast(`${res.data.message}`, {
            //     position: toast.POSITION.BOTTOM_CENTER,
            //     autoClose: 2000,
            //     hideProgressBar: true,
            //     closeButton: false,
            //     toastStyle: {
            //       background: 'green',
            //       color: 'white',
            //       fontSize: '16px',
            //     },
            //   });
            navigate("/");



        }catch(err){

            if(err.response.status===400){
                console.log("inside success false body-> ", err.response);
                // toast(`${err.response.data.message}`, {
                //     position: toast.POSITION.BOTTOM_CENTER,
                //     autoClose: 2000,
                //     hideProgressBar: true,
                //     closeButton: false,
                //     toastStyle: {
                //       background: 'green',
                //       color: 'white',
                //       fontSize: '16px',
                //     },
                //   });
                  navigate("/login");
  
            }else{
                console.log("Error in login flow -> ", err);

            }
            
            

        }finally{
            setLoader(false);
        }
    };


    


    //logout
    const logout = async()=>{

        setLoader(true);

        try{

            const res = await axios.post("http://localhost:4000/api/v1/logout");
            if(res.data.success === false){
                //toast.error(`${res.message}`);
                navigate("/");
            }

            // toast(`${res.data.message}`, {
            //     position: toast.POSITION.BOTTOM_CENTER,
            //     autoClose: 2000,
            //     hideProgressBar: true,
            //     closeButton: false,
            //     toastStyle: {
            //       background: 'green',
            //       color: 'white',
            //       fontSize: '16px',
            //     },
            //   });
            setUser(null);
            navigate("/");

        }catch(err){
            console.log("Error in logut flow -> ", err);

        }finally{
            setLoader(false);
        }



    }



    //signup
    const signup = async( signupData ) =>{
        setLoader(true);

        try{
            const res = await axios.post("http://localhost:4000/api/v1/signup" , signupData);
            console.log("res.data from signup call ", res);
            if(res.data.success === false){
                //toast.error(`${res.data.message}`);
            }

            // toast(`${res.data.message}`, {
            //     position: toast.POSITION.BOTTOM_CENTER,
            //     autoClose: 2000,
            //     hideProgressBar: true,
            //     closeButton: false,
            //     toastStyle: {
            //     background: 'green',
            //     color: 'white',
            //     fontSize: '16px',
            //     },
            // });
            navigate("/login");

        }catch(err){
            console.log("Error in signup flow -> ", err);

        }finally{
            setLoader(false);
        }

        
    };

    





    const values = {
        loader,
        setLoader,
        login,
        logout,
        signup,
        user,
        setUser,
        
    }

    return <AppContext.Provider value={values}> {children} </AppContext.Provider>
}

