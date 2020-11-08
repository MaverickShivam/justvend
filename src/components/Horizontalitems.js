import "./mainpage.css";
import React from "react";

import Button from "@material-ui/core/Button";

function Myitems(props) {
    
  return(
      <div className="catalogue" style={{width:props.pdetails.length*200+20}}>
        {props.pdetails.map(product=>(
            <div className="product" key={product.pid}>
                <div className={'product-img-container '+ props.pcolor} >
                    <img src={product.pimage} alt="Snacks" className="product-img" />
                </div>
                <div className="product-desc">
                    <div className="product-name">
                        {product.pname}
                    </div>
                    <div className="product-desc-left">
                        <div className="product-quant">
                            {product.pquant}
                        </div>
                        <div className="product-price">
                            ₹{product.pprice}
                        </div>

                    </div>
                    <div className="product-desc-right">
                    
                    <Button color="primary" style={{"margin":"0","padding":"0"}}>
                        <div className="product-add-btn">
                            Add
                        </div>
                    </Button>
                            
                        
                    </div>
                </div>
            </div>
        ))}
      </div>
      
        
    
  );

}
export default Myitems;