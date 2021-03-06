import React , {useContext} from "react";
import "./App.css";
import {Itemscontext} from "./Itemscontext"
import Mymenu from "./components/Bottom-menu"
import Cheader from "./components/Header-common"
import Wideitems from "./components/Wideitem"


function Snacks()
{
    const items=useContext(Itemscontext)[0];
    function getsnacks()
    {
        let tempsnacks=[]
        for(var i=0;i<items.length;i++)
        {
            if(items[i].tags.includes("beverages"))
            {
                continue;
            }
            else
            {
                tempsnacks.push(items[i]);
            }
        }
        return tempsnacks;
    }
        return(
            <div className="snacks">
                <Mymenu/>
                <Cheader/>
                <Wideitems items={getsnacks()}  />
            </div>
            
        );    

}
export default Snacks;