import React from 'react'
import { Link } from 'react-router-dom';
import classes from '../Auth/Auth.module.css'


function Auth() {
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
                <input type="email" id="email" />
              </div>
              <div>
                <label htmlFor= "password">Password</label>
                <input type="password" id="email" />
              </div>
              <button className={classes.signBtn}>Sign in</button>
            </form>
            <p> By signing in you agree to the Amazon Fake Clone conditions of use and sale
              please see our privacy notice, our cookies notice and our interest based ads notice 
            </p>
            <button className={classes.registerBtn}> Create Your Amazon Account</button>
           </div>
    </section>
    
    
    
  )
}

export default Auth;