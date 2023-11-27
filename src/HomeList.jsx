import React from "react";
import Card from "./Card";
import Items from "./Items"
const HomeList = ()=>{
    return <>
    <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
    crossOrigin="anonymous"
  />

    <div className="container">
        <div className="product_list">
            {Items.map((product)=>(
                <Card
                    name={product.name}
                    price={product.price}
                    image={product.image}
                />
            ))}
        </div>
    </div>
    </>
}
export default HomeList;