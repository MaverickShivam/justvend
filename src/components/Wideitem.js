import "./mainpage.css";
import React from "react";
import Eachwideitem from "./Eachwideitem"
function Wideitems(props) {
  return(
      <div className="wide-catalogue">
        {props.items.map(product=>(
            <Eachwideitem item={product} key={product.pid}/>
        ))}
      </div>
      
        
    
  );

}
export default Wideitems;