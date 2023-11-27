import React from "react";
import Items from "./Items";
import styles from "./Card.css"
import { Link } from "react-router-dom";

const Card = (props)=>{
    return <>
      {/* <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossOrigin="anonymous"
      /> */}

        <div className="card d-flex mainc" >
          <img
            src={props.image}
            className="card-img-top"
            alt={props.name}
            style={{ width: 318, height: 310 }}
          />
        <div className="card-body">
          <h3 className="card-title">
            {props.name}
          </h3>
          <p className="card-text">
            {props.price}
          </p>
          <Link to="/login" className="btn btn-primary">Product Details</Link>
        </div>
        </div>
      
</>
}
export default Card;