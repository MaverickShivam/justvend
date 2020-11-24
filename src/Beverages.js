import React , {useContext} from "react";
import "./App.css";
import {Itemscontext} from "./Itemscontext"
import Mymenu from "./components/Bottom-menu"
import Dheader from "./components/Header-beverage"
import Wideitems from "./components/Wideitem"


function Beverages()
{
    const items=useContext(Itemscontext)[0];
    function getbeverages()
    {
        let tempsnacks=[]
        for(var i=0;i<items.length;i++)
        {
            if(items[i].tags.includes("beverages"))
            {
                tempsnacks.push(items[i]);
                
            }
        }
        return tempsnacks;
    }
        return(
            <div className="snacks">
                <Mymenu/>
                <Dheader/>
                <Wideitems items={getbeverages()}  />
            </div>
            
        );    

}
export default Beverages;