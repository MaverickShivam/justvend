import React,{useContext} from "react"   
import Button from "@material-ui/core/Button";
import {Itemscontext} from "../Itemscontext"

function Eachitem(props)   
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
            <div className="product" >
                <div className={'product-img-container '+props.item.pcolor} >
                    <img src={props.item.pimage} alt="Snacks" className="product-img" />
                </div>
                <div className="product-desc">
                    <div className="product-name">
                        {props.item.pname}
                    </div>
                    <div className="product-desc-left">
                        <div className="product-quant">
                            {props.item.pquant}
                        </div>
                        <div className="product-price">
                            ₹{props.item.pprice}
                        </div>

                    </div>
                    <div className="product-desc-right">
                    
                    {parseInt(getquant())===0 && 
                        <Button onClick={() => addButton()}  color="primary" style={{"margin":"0","padding":"0"}}>
                        
                            <div className="product-add-btn">
                                Add
                            </div>
                        </Button>
                    }
                    
                    {getquant()>0 && 
                            
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
                            
                    }
                            
                        
                    </div>
                </div>
            </div>
            );

                
}  
export default Eachitem;        
                