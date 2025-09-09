import React from 'react'
import { Link } from 'react-router-dom';
import classes from '../Auth/Auth.module.css'
import { auth } from '../../utility/firebase'
import { useState,useContext } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { DataContext } from '../../utility/DataProvider/DataProvider';
import { Type } from '../../utility/action.type';
import {ClipLoader} from 'react-spinners'
import { useNavigate } from 'react-router-dom';


function Auth() {
  const [{user},dispatch]=useContext(DataContext);
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");
  const [Loading,setLoading]=useState({
    signIn:false,
    signUp:false
  })
  const navigate=useNavigate()

   const authHandler= async (e)=>{
    e.preventDefault();
    if(e.target.name==="signin"){
      setLoading({...Loading,signIn:true})
      signInWithEmailAndPassword(auth,email,password).then((userInfo)=>{
        dispatch({
          type:Type.SET_USER,
          user: userInfo.user,
        })
        setLoading({...Loading,signIn:false})
        navigate('/')
      }).catch((error)=>
        {  setLoading({...Loading,signIn:false})
          setError(error.message)})
    }else {
      setLoading({...Loading, signUp:true})
      createUserWithEmailAndPassword(auth,email,password).then((userInfo)=>{
         dispatch({
          type:Type.SET_USER,
          user:userInfo.user,
        })
        setLoading({...Loading, signUp:false})
        navigate('/')
      }).catch((error)=>{
        setLoading({...Loading, signUp:false})
        setError(error.message)})
    }
  }
  console.log(user)
  return (
    
    <section className={classes.login}>
        <Link to="/">
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
               className={classes.signBtn}>
                {Loading.signIn? <ClipLoader color="#fff" size={15}/>:"Sign in"}</button>
            </form>
            <p> By signing in you agree to the Amazon Fake Clone conditions of use and sale
              please see our privacy notice, our cookies notice and our interest based ads notice 
            </p>
            <button type="submit"
            name="signup"
             onClick={authHandler}
              className={classes.registerBtn}> {Loading.signUp? <ClipLoader color="#fff" size={15}/>:"Create Your Amazon Account"}
              </button>
              {
                error && <small style={{paddingTop:"5px",color:"red"}}>{error}</small>
              }
           </div>
    </section>
    
  )

  
    
    
  
}

export default Auth;