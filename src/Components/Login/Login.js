import React, { Component } from 'react'
import classes from './Login.css';
import {Link} from 'react-router-dom'

export class Login extends Component {
  render() {
    return (
      <div className={classes.LoginContainer}>
     
        <form>
            <h1>LOGIN FROM HERE</h1>
            <input type="email" placeholder="Enter your email" required/>
            <input type="password" placeholder="Enter your password" required/>
            <input type="password" placeholder="Repeat your password" required/>
            <div style={{textAlign: 'center'}}>
                <Link to="/faces" style={{textDecoration: 'none'}}>Forgot Password ?</Link><br /> <br />
                Not yet registered, register <Link to="/faces" style={{textDecoration: 'none'}}>Here..</Link></div>
            <button type="submit"><strong>Login</strong></button>

        </form>
      </div>
    )
  }
}

export default Login;
