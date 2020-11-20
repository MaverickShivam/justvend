import React, {useState, createContext} from "react";
import kurkure from "./components/medias/kurkure.png"
import banana from "./components/medias/banana.png"
import pepsi from "./components/medias/pepsi.png"
import milk from "./components/medias/milk.png"
import bingo from "./components/medias/bingo.png"
import bhindi from "./components/medias/bhindi.png"

export const Itemscontext = createContext();
export const Itemsprovider=(props)=>
{
    const [items, setItems]=useState([
        {
            pid:"1",
            pname:"Kurkure Masala",
            pimage:kurkure,
            pquant:"200gm",
            pprice: "20",
            pcolor:"color1",
            quant:"1",
            tags:["top-pick"]
        },
        {
            pid:"3",
            pname:"Pepsi",
            pimage:pepsi,
            pquant:"180ml",
            pprice: "20",
            pcolor:"color1",
            quant:"0",
            tags:["snacks"]
        },
        {
            pid:"2",
            pname:"Banana",
            pimage:banana,
            pquant:"3Pcs",
            pprice: "35",
            pcolor:"color1",
            quant:"0",
            tags:["veggie"]
        },
        {
            pid:"4",
            pname:"Amul Milk",
            pimage:milk,
            pquant:"220ml",
            pprice: "15",
            pcolor:"color1",
            quant:"0",
            tags:["dairy","top-pick"]
        },
        {
            pid:"7",
            pname:"Tomato",
            pimage:"https://purepng.com/public/uploads/large/purepng.com-tomatovegetables-tomato-941524712357ikhy3.png",
            pcolor:"color1",
            pquant:"500gm",
            pprice: "32",
            quant:"0",
            tags:["top-pick"]
        },
        {
            pid:"5",
            pname:"Bingo",
            pimage:bingo,
            pquant:"45gm",
            pprice: "10",
            pcolor:"color1",
            quant:"0",
            tags:["snacks"]
        },
        {
            pid:"6",
            pname:"Bhindi",
            pimage:bhindi,
            pquant:"500gm",
            pprice: "32",
            pcolor:"color1",
            quant:"0",
            tags:["veggie"]
        } 
    ]);
    return(
       <Itemscontext.Provider value={[items,setItems]}>
           {props.children}
       </Itemscontext.Provider>
    );
}