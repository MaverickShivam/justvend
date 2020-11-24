import React,{useContext} from "react";
import "./App.css";
import { Icon} from '@iconify/react';
import thumbsUpTwotone from '@iconify/icons-line-md/thumbs-up-twotone';
import healthy from "@iconify/icons-mdi/food-apple-outline"
import drinks from "@iconify/icons-mdi/drink-water"
import snacks from "@iconify/icons-mdi/fast-food"
import Myheader from "./components/Top-header";
import Mymenu from "./components/Bottom-menu"
import Mytopimage from "./components/Top-image"
import Mycategory from "./components/Category"
import Myitems from "./components/Horizontalitems"
import createyourown from "./components/medias/createyourown.png"
import {Itemscontext} from "./Itemscontext"

function Firstpage()
{
  const items= useContext(Itemscontext)[0];
  function itemsbytag(tag)
  {
    let tempitems=[]
    for(var i=0;i<items.length;i++)
    {
      if(items[i].tags.includes(tag))
      {
          tempitems.push(items[i]);
      }
    }
    return tempitems;

  }
    return (
      <div className="firstpage">

        <Myheader />
        <Mymenu/>
        <Mytopimage/>
        <Mycategory/>


        <div className="top-picks"><Icon icon={thumbsUpTwotone} style={{color: '#6c63ff', fontSize: '20px',verticalAlign:"top",marginRight:"10px"}} />Top picks for you</div>
        <div className="categorydiv">
          <Myitems pdetails={itemsbytag("top-pick")} />
        </div>

        <div className="createyourown">
          <img src={createyourown} alt="Create your own Inventory"/>
        </div>

         

        <div className="top-picks"><Icon icon={healthy} style={{color: '#6c63ff', fontSize: '20px',verticalAlign:"top",marginRight:"10px"}} />Healthy Items</div>
        <div className="categorydiv">
          <Myitems pdetails={itemsbytag("healthy")} />
        </div>
        <div className="top-picks"><Icon icon={snacks} style={{color: '#6c63ff', fontSize: '20px',verticalAlign:"top",marginRight:"10px"}} />Snacks</div>
        <div className="categorydiv">
          <Myitems pdetails={itemsbytag("snacks")} />
        </div>
        <div className="top-picks"><Icon icon={drinks} style={{color: '#6c63ff', fontSize: '20px',verticalAlign:"top",marginRight:"10px"}} />Beverages</div>
        <div className="categorydiv">
          <Myitems pdetails={itemsbytag("beverages")}/>
        </div> 
        
        
      </div>
    );
}

export default Firstpage;
