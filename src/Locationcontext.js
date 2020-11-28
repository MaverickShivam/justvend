import React, {useState,useEffect,createContext} from "react";
import axios from "axios";
export const Locationcontext = createContext();
export const Locationprovider=(props)=>
{
    const [location, setLocation]=useState(
        {
            vmid:"loading",
            name:"Loading...",
            location:"Loading...",
            latitude:0,
            longitude:0,
            radius:0
        }
    );
    const setPosition=(position)=>{
        console.log(position);
        axios.get("https://newratechnologies.com/justvend/apis/getnearest.php?authkey=xhJNa9BqPU4FssW&lat="+position.coords.latitude+"&long="+position.coords.longitude).then(res=>{
                if(res.data.length===0)
                {
                    setTimeout(()=>{
                        setLocation((prevlocation)=>({...prevlocation,vmid:"unknown"}));
                    },2000);
                    
                }
                else
                {
                    setTimeout(()=>{
                        setLocation(res.data[0]);
                    },2000);
                    
                }
        });
        
    }
    const handleError=(err)=>{
        console.log(err);
    }

    
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(setPosition,handleError);
            
    },[]);


    return(
       <Locationcontext.Provider value={[location,setLocation]}>
           {props.children}
       </Locationcontext.Provider>
    );
}