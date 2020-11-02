import "./mainpage.css";
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-dashicons/location';
import React from "react";

function Myheader() {
  return(
    <div className="header">

        <Icon className="location" icon={locationIcon} style={{color: '#4d4545', fontSize: '20px'}} />
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
export default Myheader;