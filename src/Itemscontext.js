import React, {useState, createContext} from "react";
import kurkure from "./components/medias/kurkure.png"
import pepsi from "./components/medias/pepsi.png"
import bingo from "./components/medias/bingo.png"
export const Itemscontext = createContext();
export const Itemsprovider=(props)=>
{
    const [items, setItems]=useState([
        {
            pid:"5",
            pname:"Bingo",
            pimage:bingo,
            pquant:"45gm",
            pprice: "10",
            pcolor:"#fddb3a",
            quant:"0",
            tags:["snacks"]
        },
        {
            pid:"2",
            pname:"Haldiram Kaju",
            pimage:"https://www.bigbasket.com/media/uploads/p/xxl/20002440_1-haldirams-kaju-salted.jpg",
            pquant:"140gm",
            pprice: "35",
            pcolor:"#146157",
            quant:"0",
            tags:["healthy"]
        },
        {
            pid:"6",
            pname:"Tropicana Fruit Juice",
            pimage:"https://www.hi5mart.com/image/cache/catalog/DRINKS%20AND%20BEVERAGES/tropicana/Tropicana%20Juice%20-%20Mixed%20Fruit-750x750.png",
            pquant:"250ml",
            pprice: "25",
            pcolor:"#8db596",
            quant:"0",
            tags:["healthy","beverages"]
        },
        {
            pid:"8",
            pname:"Britania Cake",
            pimage:"https://groce24.com/assets/upload/product/029828000_1522920490.png",
            pquant:"80gm",
            pprice: "18",
            pcolor:"#ff5287",
            quant:"0",
            tags:["healthy","snacks"]
        },
        {
            
            pid:"1",
            pname:"Kurkure Masala",
            pimage:kurkure,
            pquant:"200gm",
            pprice: "20",
            pcolor:"#ffbb32",
            quant:"0",
            tags:["top-pick","snacks"]
        },
        
        {
            pid:"3",
            pname:"Pepsi",
            pimage:pepsi,
            pquant:"180ml",
            pprice: "20",
            pcolor:"#1b52a2",
            quant:"0",
            tags:["beverages","top-pick"]
        },
        
        {
            pid:"4",
            pname:"Snickers",
            pimage:"https://static.wixstatic.com/media/2cd43b_bb9f07f60d434cb39e5bcb1312e982f5~mv2.png/v1/fill/w_375,h_300,fp_0.50_0.50/2cd43b_bb9f07f60d434cb39e5bcb1312e982f5~mv2.png",
            pquant:"50gm",
            pprice: "10",
            pcolor:"#af6b58",
            quant:"0",
            tags:["snacks","top-pick"]
        },
        {
            pid:"7",
            pname:"Ice tea",
            pimage:"https://tandoorination.ca/image/cache/catalog/Product/Drinks/Nestea-500x500.png",
            pcolor:"#0078AD",
            pquant:"200ml",
            pprice: "30",
            quant:"0",
            tags:["top-pick","beverages","healthy"]
        },
        {
            pid:"9",
            pname:"Good Day Biscuit",
            pimage:"https://samantrashop.in/wp-content/uploads/2020/04/Cashew-Cookies-big.png",
            pcolor:"#f5b461",
            pquant:"70gm",
            pprice: "20",
            quant:"0",
            tags:["top-pick","snacks","healthy"]
        },
        {
            pid:"10",
            pname:"Fanta Orange",
            pimage:"https://pngimg.com/uploads/fanta/fanta_PNG17.png",
            pcolor:"#fd8c04",
            pquant:"200ml",
            pprice: "25",
            quant:"0",
            tags:["beverages"]
        },
        
        
        
        


    ]);
    return(
       <Itemscontext.Provider value={[items,setItems]}>
           {props.children}
       </Itemscontext.Provider>
    );
}