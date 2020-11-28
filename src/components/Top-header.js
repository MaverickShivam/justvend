import "./mainpage.css";
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-dashicons/location';
import React,{useContext} from "react";
import {Locationcontext} from "../Locationcontext"
function Myheader() {
  const location=useContext(Locationcontext)[0];

  return(
    <div className="header">

        <Icon className="location" icon={locationIcon} style={{color: '#4d4545', fontSize: '20px'}} />
        <div className="home">
            <div>
                {location.name}
            </div>
            <div className="textbox">
                {location.location}
            </div>
        </div>
        
        
    </div>
  );
  
}
export default Myheader;