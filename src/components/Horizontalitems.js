import "./mainpage.css";
import React from "react";



function Myitems(props) {
    console.log(props.pdetails.length)
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
                        <div className="product-add-btn">
                            Add
                        </div>
                    </div>
                </div>
            </div>
        ))}
      </div>
      
        
    
  );

}
export default Myitems;