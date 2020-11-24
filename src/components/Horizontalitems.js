import "./mainpage.css";
import React from "react";

import Eachitem from "./Eachitem"
function Myitems(props) {
  return(
      <div className="catalogue" style={{width:props.pdetails.length*200+20}}>
        {props.pdetails.map(product=>(
            <Eachitem item={product} key={product.pid}/>
        ))}
      </div>    
    
  );

}
export default Myitems;