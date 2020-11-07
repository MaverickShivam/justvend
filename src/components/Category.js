import "./mainpage.css";
import { Icon} from '@iconify/react';
import arrowRightOutlined from '@iconify/icons-ant-design/arrow-right-outlined';
import dailyneedspic from "./medias/daily-needs-pic.png"
import snackspic from "./medias/snacks.png"
import React from "react";
import {Link} from "react-router-dom"

function Mycategory() {
  return(
    <div className="container">
        <Link to ={"/snacks"}>
            <div className="category-box box1">
                <div className="category-title">Snacks</div>
                <img className="pic" src={snackspic} alt="Snacks"/>
                <div className="category-strip strip1">
                    <Icon className="category-arrow-right" icon={arrowRightOutlined} style={{color: '#ffffff', fontSize: '26px'}} />
                </div>
            </div>
        </Link>
        <div className="category-box box2">
            <div className="category-title">Daily Needs</div>
            <img className="pic" src={dailyneedspic} alt="Daily Needs"/>
            <div className="category-strip strip2">
                <Icon className="category-arrow-right" icon={arrowRightOutlined} style={{color: '#ffffff', fontSize: '26px'}} />
            </div>
        </div>
    </div>
    
  );
  
}
export default Mycategory;