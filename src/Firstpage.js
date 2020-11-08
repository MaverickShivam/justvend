import React, { Component } from "react";
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
import kurkure from "./components/medias/kurkure.png"
import banana from "./components/medias/banana.png"
import pepsi from "./components/medias/pepsi.png"
import milk from "./components/medias/milk.png"
import bingo from "./components/medias/bingo.png"
import bhindi from "./components/medias/bhindi.png"
import createyourown from "./components/medias/createyourown.png"

class Firstpage extends Component {
  myproducts=[
    {pid:"1",pname:"Kurkure Masala",pimage:kurkure,pquant:"200gm",pprice: "20"},
    {pid:"3",pname:"Pepsi",pimage:pepsi,pquant:"180ml",pprice: "20"},
    {pid:"2",pname:"Banana",pimage:banana,pquant:"3Pcs",pprice: "35"},
    {pid:"4",pname:"Amul Milk",pimage:milk,pquant:"220ml",pprice: "15"},
    {pid:"7",pname:"Tomato",pimage:"https://purepng.com/public/uploads/large/purepng.com-tomatovegetables-tomato-941524712357ikhy3.png",pquant:"500gm",pprice: "32"},
    {pid:"5",pname:"Bingo",pimage:bingo,pquant:"45gm",pprice: "10"},
    {pid:"6",pname:"Bhindi",pimage:bhindi,pquant:"500gm",pprice: "32"}
  ];
  myveggies=[
    {pid:"7",pname:"Tomato",pimage:"https://purepng.com/public/uploads/large/purepng.com-tomatovegetables-tomato-941524712357ikhy3.png",pquant:"500gm",pprice: "18"},
    {pid:"6",pname:"Bhindi",pimage:bhindi,pquant:"500gm",pprice: "32"},
    {pid:"2",pname:"Banana",pimage:banana,pquant:"3Pcs",pprice: "35"}
  ];
  mycateg3=[
    
    {pid:"6",pname:"Farm Fresh Eggs",pimage:"https://www.pngkit.com/png/full/17-175222_eggs-carton-png-crate-of-eggs-png.png",pquant:"12Pcs",pprice: "105"},
    {pid:"2",pname:"Amul Milk",pimage:milk,pquant:"250ml",pprice: "35"},
    {pid:"7",pname:"Wheat Bread",pimage:"https://harvestgold.in/image/ProductImage/7e049d7a0bb9bedef4624b23d530fd9f.png",pquant:"400gm",pprice: "35"}
  ];
  mycateg4=[
    
    {pid:"6",pname:"Instant Pasta",pimage:"https://www.knorr.co.za/content/dam/unilever/knorr_world/south_africa/pack_shot/6009001000075-1380109-png.png.ulenscale.315x315.png",pquant:"500gm",pprice: "32"},
    {pid:"2",pname:"Maggi Pazzta",pimage:"https://yebilo.com/wp-content/uploads/2020/08/266170-2_5-maggi-pazzta-cheese-macaroni-instant-pasta.png",pquant:"3Pcs",pprice: "35"},
    {pid:"7",pname:"Cup Noodles",pimage:"https://d2lhip1ki8p4nk.cloudfront.net/uploads/products/soupd-up/flavors/70662-40303-CUP-NOODLES-SOUPD-UP-ZESTY-CHICKEN-UNIT-PNG_181004_232621.png",pquant:"500gm",pprice: "32"}
  ];


  render() {
    return (
      <div className="firstpage">

        <Myheader />
        <Mymenu/>
        <Mytopimage/>
        <Mycategory/>
        <div className="top-picks"><Icon icon={thumbsUpTwotone} style={{color: '#6c63ff', fontSize: '20px',verticalAlign:"top",marginRight:"10px"}} />Top picks for you</div>
        <div className="categorydiv">
          <Myitems pdetails={this.myproducts} pcolor="color1"/>
        </div>

        <div className="createyourown">
          <img src={createyourown} alt="Create your own Inventory"/>
        </div>

        <div className="top-picks"><Icon icon={fruitGrapeOutline} style={{color: '#6c63ff', fontSize: '20px',verticalAlign:"top",marginRight:"10px"}} />Fresh Vegetables & Fruits</div>
        <div className="categorydiv">
          <Myitems pdetails={this.myveggies} pcolor="color2"/>
        </div>
        <div className="top-picks"><Icon icon={eggicon} style={{color: '#6c63ff', fontSize: '20px',verticalAlign:"top",marginRight:"10px"}} />Dairy, Bread & Eggs</div>
        <div className="categorydiv">
          <Myitems pdetails={this.mycateg3} pcolor="color3"/>
        </div>
        <div className="top-picks"><Icon icon={potoffood} style={{color: '#6c63ff', fontSize: '20px',verticalAlign:"top",marginRight:"10px"}} />Instant Foods</div>
        <div className="categorydiv">
          <Myitems pdetails={this.mycateg4} pcolor="color4"/>
        </div>
        
        
      </div>
    );
  }
}

export default Firstpage;
