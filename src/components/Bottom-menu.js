import "./mainpage.css";

import React,{useContext} from "react";
import Menuhome from "./medias/home.svg";
import Menusearch from "./medias/search.svg";
import Menucart from "./medias/cart.svg";
import Menuaccount from "./medias/account.svg";
import {Itemscontext} from "../Itemscontext";
import {Link} from "react-router-dom";

function Mymenu() {
    const items=useContext(Itemscontext)[0];

    function getTotal()
    {
        let total=0;
        for (var i=0;i<items.length;i++)
        {
            total=total+parseInt(items[i].quant);
        }
        return total;
    }
    return(
        <div className="bottom-menu">
            <div className="option" >
                <img src={Menuhome} alt="HOME"/>
            </div>
            <div className="option" >
                <img style={{width:'35px' }} src={Menusearch} alt="SEARCH"/>
            </div>
            <Link to ={"/cart"} className="mylink">
            <div className="option" style={{"position":"relative"}}>
                
                    {getTotal()===0 &&
                        ""
                    }
                    {getTotal()>0 &&
                        <div className="carttotal">
                        {getTotal()}
                        </div>
                    }
                
                <img src={Menucart} alt="CART"/>
            </div>
            </Link>
            <div className="option" >
                <img style={{width:'42px' }} src={Menuaccount} alt="ACCOUNT"/>
            </div>
        </div>
    
    );
  
}
export default Mymenu;