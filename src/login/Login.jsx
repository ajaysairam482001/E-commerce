import React, { useState } from "react";
import Signup from "../signup/Signup";
import styles from "./login.css"
import { Link } from "react-router-dom";

const Login = ()=>{
    

    return <>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Login Page</title>
    <link rel="stylesheet" type="text/css" href="login.css" />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
      crossOrigin="anonymous"
    />
    <div className="container">
      <div className="row header">
        hello
        <div className="col-lg box1" />
      </div>
       <div className="row middle">
        <div className="col-lg-3" />
        <div className="col-lg-6 box2">
          <div className="login_text">LOGIN</div>
          <div className="m-4 input">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              &nbsp;&nbsp;Email
            </label>
            <input
              type="email"
              className="form-control border-2"
              id="exampleFormControlInput1"
            />
          </div>
          <div className="m-4 input">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              &nbsp;&nbsp;Password
            </label>
            <input
              type="password"
              className="form-control border-2"
              id="exampleFormControlInput2"
            />
          </div>
          <a href="homeList2.html" className="btn btn-primary">
            LOG-IN
          </a>
          <Link to='/signup'  className="btn btn-primary">SIGN-UP</Link>
        </div>
        <div className="col-lg-3"/>
      </div> 
      <div className="row footer">
        <div className="col-lg box1"/>
      </div>
    </div>
  </>
  
}
export default Login;