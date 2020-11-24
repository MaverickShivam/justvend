import React,{useContext} from "react";
import {Itemscontext} from "./Itemscontext";
import Headercart from "./components/Headercart";
import Cartitem from "./components/Cartitem"
import emptycart from "./components/medias/emptycart.svg"
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import couponicon from "@iconify/icons-mdi/local-offer";
import { Icon} from '@iconify/react';
import rightarrow from "@iconify/icons-ant-design/right-outlined"
import "./components/mainpage.css";
function Cart()
{
    const items=useContext(Itemscontext)[0];
    let totalbill=0;
    function getadded()
    {
        totalbill=0;
        let tempadded=[]
        for(var i=0;i<items.length;i++)
        {
            if(parseInt(items[i].quant)>0)
            {
                tempadded.push(items[i])
                totalbill=parseInt(totalbill)+(items[i].quant*items[i].pprice)
            }
        }
        return tempadded;
    }
    
    return(
        <div>
            {getadded().length>0 &&
            <div style={{"backgroundColor":"#f2f2f2"}}>
                
                <Headercart/>
                <div style={{"marginTop":"75px"}}>
                    <Cartitem items={getadded()}/>
                </div>
                <div className="apply-coupon">
                    <Icon className="couponicon" icon={couponicon}  />
                    <label>Apply Coupon</label>
                    <Icon className="rightarrow" color="#bbbbbb" icon={rightarrow}  />
                </div>
                <div className="cart-bill">
                    <label className="cart-bill-head">Bill Details</label>
                    <br/>
                    <div className="to-pay">
                        To Pay
                    </div>
                    <div className="total-amount">
                        ₹{totalbill}.00
                    </div>
                    
                </div>
                <div className="cart-bill" >

                </div>
                <div className="cart-bottom">
                    <div className="bill-total">
                        <div>
                            ₹{totalbill}.00
                            <br/>
                            <label style={{color:"#1b6ca8",fontWeight:600}}>VIEW DETAILED BILL</label>
                        </div>

                        
                    </div>
                    <div className="pay-button">
                        <div>
                            PROCEED TO PAY
                        </div>
                        
                    </div>
                </div>
                
                
            </div>
            }
            {getadded().length===0 &&
                <div>
                    <img src={emptycart} style={{"maxWidth":"70%","marginTop":"100px"}} alt="404"/>
                    <br/>
                    <Link to ={"/"} className="mylink">
                        <Button variant="outlined" color="primary" style={{"marginTop":"70px"}}>Choose Items</Button>
                    </Link>
                </div>
                
            }
        </div>
        
    );
}
export default Cart;