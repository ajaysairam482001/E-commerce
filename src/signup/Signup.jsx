import React from "react";
import styles from "./signup.css"
import { Link } from "react-router-dom";
const Signup = () =>{
    return <>
        
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Sign Up page</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
    crossOrigin="anonymous"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    .submit{\n      border-radius: 30px;\n      width: 30%;\n      margin: 0 auto;\n    }\n\n    .form_center{\n      width: 50%;\n      margin-left: 30%;\n    }\n\n"
    }}
  />
  <div className="container">
    <div
      className="row m-5 header position-relative"
      style={{ paddingLeft: "43%", margin: "0 auto" }}
    >
      <h2>SIGN UP</h2>
    </div>
    <div className="row mt-2 position-absolute top-50 start-50 translate-middle">
      <form
        className=" d-flex flex-column justify-content-center form_center"
        id="signup-form"
      >
        <label className="form-label">E-Mail</label>
        <input type="email" id="Email" className="form-control" />
        <label htmlFor="inputPassword5" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="inputPassword5"
          className="form-control"
          aria-describedby="passwordHelpBlock"
        />
        <div id="passwordHelpBlock" className="form-text">
          Your password must be 8-20 characters long, contain letters and
          numbers, and must not contain spaces, special characters, or emoji.
        </div>
        <label htmlFor="inputPassword5" className="form-label">
          Re-Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          aria-describedby="passwordHelpBlock"
        />
        <label className="form-label">Mobile Number</label>
        <input type="Numbers" id="MobileNumber" className="form-control" />
        <label className="form-label">Location</label>
        <input type="Location" id="location" className="form-control" />
        <Link to="/home" className=" submit btn btn-primary mt-4 ">Submit</Link>
      </form>
    </div>
  </div>
</>

    
}
export default Signup;