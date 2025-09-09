import React, { useEffect } from "react";
import Routering from './Routering';
import { DataContext } from "./utility/DataProvider/DataProvider";
import { useContext } from "react";
import { auth } from "./utility/firebase";
import { Type } from "./utility/action.type";




function App() {
  const [{ user },dispatch]=useContext(DataContext) 
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type:Type.SET_USER,
          user:authUser
        })
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        })
      }
    })
  },[])
  return (

    <Routering />


  )
}

export default App;