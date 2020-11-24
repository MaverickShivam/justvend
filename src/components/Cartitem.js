import "./mainpage.css";
import React from "react";
import Eachcartitem from "./Eachcartitem"
function Cartitem(props) {
  return(
      <div className="wide-catalogue">
        {props.items.map(product=>(
            <Eachcartitem item={product} key={product.pid}/>
        ))}
      </div>
      
        
    
  );

}
export default Cartitem;