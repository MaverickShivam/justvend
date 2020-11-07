import "./mainpage.css";
import React from "react";

import Button from "@material-ui/core/Button";

function Wideitems(props) {
  return(
      <div className="wide-catalogue">
        {props.items.map(product=>(
            <div className="wide-product" key={product.pid}>
                <div className={'wide-product-img-container color6'} >
                    <img src={product.pimage} alt="Snacks" className="wide-product-img" />
                </div>
                <div className="wide-product-desc">
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
export default Wideitems;