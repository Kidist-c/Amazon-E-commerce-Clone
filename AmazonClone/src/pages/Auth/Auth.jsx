import React from 'react'
import { Link } from 'react-router-dom';
import classes from '../Auth/Auth.module.css'
import { auth } from '../../utility/firebase'
import { useState,useContext } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { DataContext } from '../../utility/DataProvider/DataProvider';
import { Type } from '../../utility/action.type';
import (Type)


function Auth() {
  const [{user},dispatch]=useContext(DataContext);
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  //const [error,setError]=useState("");

   const authHandler= async (e)=>{
    e.preventDefault();
    if(e.target.name==="signin"){
      signInWithEmailAndPassword(auth,email,password).then((userInfo)=>{
        dispatch({
          type:Type.SET_USER,
          user: userInfo.user,
        })
      }).catch((error)=>{console.log(error)})
    }else {
      createUserWithEmailAndPassword(auth,email,password).then((userInfo)=>{
         dispatch({
          type:Type.SET_USER,
          user:userInfo.user,
        })
      }).catch((error)=>{console.log(error)})
    }
  }
  console.log(user)
  return (
    
    <section className={classes.login}>
        <Link>
          <img src="/amazon.png"alt="amazon logo"  />
           </Link>
           <div className={classes.logincontainer}>
            <h1>Sign-In</h1>
            <form>
              <div>
                <label htmlFor="email">Email</label>
                <input 
                 value={email} 
                 onChange={(e)=>{setEmail(e.target.value)}}
                  type="email" id="email" />
              </div>
              <div>
                <label htmlFor= "password">Password</label>
                <input 
                value={password} 
                onChange={(e)=>{setPassword(e.target.value)}} 
                type="password" id="email" />
              </div>
              <button 
              type="submit"
              name="signin"
               onClick={authHandler} 
               className={classes.signBtn}>Sign in</button>
            </form>
            <p> By signing in you agree to the Amazon Fake Clone conditions of use and sale
              please see our privacy notice, our cookies notice and our interest based ads notice 
            </p>
            <button type="submit"
            name="signup"
             onClick={authHandler}
              className={classes.registerBtn}> Create Your Amazon Account</button>
           </div>
    </section>
    
  )

  
    
    
  
}

export default Auth;