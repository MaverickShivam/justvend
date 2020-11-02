import "./mainpage.css";

import React from "react";
import Menuhome from "./medias/home.svg";
import Menusearch from "./medias/search.svg";
import Menucart from "./medias/cart.svg";
import Menuaccount from "./medias/account.svg";

function Mymenu() {
    return(
        <div className="bottom-menu">
            <div className="option" >
                <img src={Menuhome} alt="HOME"/>
            </div>
            <div className="option" >
                <img style={{width:'35px' }} src={Menusearch} alt="SEARCH"/>
            </div>
            <div className="option" >
                <img src={Menucart} alt="CART"/>
            </div>
            <div className="option" >
                <img style={{width:'42px' }} src={Menuaccount} alt="ACCOUNT"/>
            </div>
        </div>
    
    );
  
}
export default Mymenu;