import "./mainpage.css";
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/washing-machine';
import React from "react";

function Headercart() {
  return(
    <div className="header" style={{"boxShadow":"none"}}>

        <Icon className="location" icon={locationIcon} style={{color: "#6c63ff", fontSize: '20px'}} />
        <div className="home">
            <div>
                Home
            </div>
            <div className="textbox">
                305, Sapthagiri Residency VII, Kathre....
            </div>
        </div>
        
        
    </div>
  );
  
}
export default Headercart;