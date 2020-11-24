import React,{useContext} from "react"   
import Button from "@material-ui/core/Button";
import {Itemscontext} from "../Itemscontext"

function Eachcartitem(props)   
{
    const [items,setItem] =useContext(Itemscontext);
    function getquant()
    {
        for(var i=0;i<items.length;i++)
        {
            if(items[i].pid===props.item.pid)
            {
                return items[i].quant;
            }
        }
    }
  
  function addButton()
  {
      setItem(
        items.map(it => 
            it.pid === props.item.pid
            ? {...it, quant : parseInt(getquant())+1} 
            : it
    ))
  }
  function minusButton()
  {
      if(getquant()>0)
      {
        setItem(
            items.map(it => 
                it.pid === props.item.pid
                ? {...it, quant : parseInt(getquant())-1} 
                : it
        ))
      }
    
  }
    return(
            <div className="cart-product" >
                <div className='cart-product-img-container ' style={{"backgroundColor":props.item.pcolor}} >
                    <img src={props.item.pimage} alt="Snacks" className="cart-product-img" />
                </div>
                <div className="cart-product-name">
                    {props.item.pname}
                </div>
                <div className="cart-product-quant">
                    {props.item.pquant}
                </div>
                <div className="cart-product-desc-right"> 
                        <Button  color="primary" style={{"margin":"0","padding":"0"}}>
                        
                            <div className="product-add-btn" style={{"position":"relative"}}>
                                <div className="minus" onClick={() => minusButton()}>
                                    -
                                </div>
                                <div className="quant">
                                    {getquant()}
                                </div>
                                <div className="plus" onClick={() => addButton()} >
                                    +
                                </div>
                                
                            </div>
                        </Button> 
                        
                </div>
                <div className="cart-product-price">
                    ₹{parseInt(props.item.pprice) * getquant()}
                </div>
                
            </div>
            );

                
}  
export default Eachcartitem;        
                