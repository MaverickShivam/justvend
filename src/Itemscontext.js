import React, {useState,useContext,useEffect,createContext} from "react";
import {Locationcontext} from "./Locationcontext"
import axios from "axios";
export const Itemscontext = createContext();
export const Itemsprovider=(props)=>
{
    const [items, setItems]=useState([]);
    const location=useContext(Locationcontext)[0];
    useEffect(()=>{
        axios.get("https://newratechnologies.com/justvend/apis/getproducts.php?authkey=xhJNa9BqPU4FssW&vmid="+location.vmid).then(res=>{
          setItems(res.data);
        });
      },[location.vmid]);


    return(
       <Itemscontext.Provider value={[items,setItems]}>
           {props.children}
       </Itemscontext.Provider>
    );
}