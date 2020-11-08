import React , {Component} from "react";
import "./App.css";

import Mymenu from "./components/Bottom-menu"
import Cheader from "./components/Header-common"
import Wideitems from "./components/Wideitem"

import kurkure from "./components/medias/kurkure.png"
import banana from "./components/medias/banana.png"
import pepsi from "./components/medias/pepsi.png"
import milk from "./components/medias/milk.png"
import bingo from "./components/medias/bingo.png"
import bhindi from "./components/medias/bhindi.png"

class Snacks extends Component
{
    sample=[
        {pid:"1",pname:"Kurkure Masala",pimage:kurkure,pquant:"200gm",pprice: "20"},
        {pid:"3",pname:"Pepsi",pimage:pepsi,pquant:"180ml",pprice: "20"},
        {pid:"2",pname:"Banana",pimage:banana,pquant:"3Pcs",pprice: "35"},
        {pid:"4",pname:"Amul Milk",pimage:milk,pquant:"220ml",pprice: "15"},
        {pid:"7",pname:"Tomato",pimage:"https://purepng.com/public/uploads/large/purepng.com-tomatovegetables-tomato-941524712357ikhy3.png",pquant:"500gm",pprice: "32"},
        {pid:"5",pname:"Bingo",pimage:bingo,pquant:"45gm",pprice: "10"},
        {pid:"6",pname:"Bhindi",pimage:bhindi,pquant:"500gm",pprice: "32"},
        {pid:"13",pname:"Kurkure Masala",pimage:kurkure,pquant:"200gm",pprice: "20"},
        {pid:"8",pname:"Pepsi",pimage:pepsi,pquant:"180ml",pprice: "20"},
        {pid:"9",pname:"Banana",pimage:banana,pquant:"3Pcs",pprice: "35"},
        {pid:"10",pname:"Amul Milk",pimage:milk,pquant:"220ml",pprice: "15"},
        {pid:"11",pname:"Tomato",pimage:"https://purepng.com/public/uploads/large/purepng.com-tomatovegetables-tomato-941524712357ikhy3.png",pquant:"500gm",pprice: "32"},
        {pid:"12",pname:"Bingo",pimage:bingo,pquant:"45gm",pprice: "10"},
        {pid:"14",pname:"Bhindi",pimage:bhindi,pquant:"500gm",pprice: "32"},
        {pid:"15",pname:"Kurkure Masala",pimage:kurkure,pquant:"200gm",pprice: "20"},
        {pid:"16",pname:"Pepsi",pimage:pepsi,pquant:"180ml",pprice: "20"},
        {pid:"17",pname:"Banana",pimage:banana,pquant:"3Pcs",pprice: "35"},
        {pid:"18",pname:"Amul Milk",pimage:milk,pquant:"220ml",pprice: "15"},
        {pid:"19",pname:"Tomato",pimage:"https://purepng.com/public/uploads/large/purepng.com-tomatovegetables-tomato-941524712357ikhy3.png",pquant:"500gm",pprice: "32"},
        {pid:"20",pname:"Bingo",pimage:bingo,pquant:"45gm",pprice: "10"},
        {pid:"21",pname:"Bhindi",pimage:bhindi,pquant:"500gm",pprice: "32"},
        {pid:"22",pname:"Kurkure Masala",pimage:kurkure,pquant:"200gm",pprice: "20"},
        {pid:"23",pname:"Pepsi",pimage:pepsi,pquant:"180ml",pprice: "20"},
        {pid:"24",pname:"Banana",pimage:banana,pquant:"3Pcs",pprice: "35"},
        {pid:"25",pname:"Amul Milk",pimage:milk,pquant:"220ml",pprice: "15"},
        {pid:"26",pname:"Tomato",pimage:"https://purepng.com/public/uploads/large/purepng.com-tomatovegetables-tomato-941524712357ikhy3.png",pquant:"500gm",pprice: "32"},
        {pid:"27",pname:"Bingo",pimage:bingo,pquant:"45gm",pprice: "10"},
        {pid:"28",pname:"Bhindi",pimage:bhindi,pquant:"500gm",pprice: "32"}
    ];
    render()
    {
        return(
            <div className="snacks">
                <Mymenu/>
                <Cheader/>
                <Wideitems items={this.sample}  />
            </div>
            
        );

    }
        

    
    

}
export default Snacks;