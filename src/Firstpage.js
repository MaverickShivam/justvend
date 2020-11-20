import React,{useContext} from "react";
import "./App.css";
import { Icon} from '@iconify/react';
import thumbsUpTwotone from '@iconify/icons-line-md/thumbs-up-twotone';
import potoffood from "@iconify/icons-emojione-monotone/pot-of-food"
import eggicon from "@iconify/icons-bi/egg"
import fruitGrapeOutline from '@iconify/icons-mdi/fruit-grapes-outline'
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
          <Myitems pdetails={itemsbytag("top-pick")} key="top-pick"/>
        </div>

         <div className="createyourown">
          <img src={createyourown} alt="Create your own Inventory"/>
        </div>

        <div className="top-picks"><Icon icon={fruitGrapeOutline} style={{color: '#6c63ff', fontSize: '20px',verticalAlign:"top",marginRight:"10px"}} />Fresh Vegetables & Fruits</div>
        <div className="categorydiv">
          <Myitems pdetails={itemsbytag("veggie")} key="veggie"/>
        </div>
        <div className="top-picks"><Icon icon={eggicon} style={{color: '#6c63ff', fontSize: '20px',verticalAlign:"top",marginRight:"10px"}} />Dairy, Bread & Eggs</div>
        <div className="categorydiv">
          <Myitems pdetails={itemsbytag("dairy")} key="dairy"/>
        </div>
        <div className="top-picks"><Icon icon={potoffood} style={{color: '#6c63ff', fontSize: '20px',verticalAlign:"top",marginRight:"10px"}} />Instant Foods</div>
        <div className="categorydiv">
          <Myitems pdetails={itemsbytag("snacks")} key="snacks"/>
        </div> 
        
        
      </div>
    );
}

export default Firstpage;
