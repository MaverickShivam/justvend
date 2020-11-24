import "./mainpage.css";
import { Icon} from '@iconify/react';
import arrowRightOutlined from '@iconify/icons-ant-design/arrow-right-outlined';
import beverages from "./medias/beverages.png"
import snackspic from "./medias/snacks.png"
import React from "react";
import {Link} from "react-router-dom"

function Mycategory() {
  return(
    <div className="container">
        <Link to ={"/snacks"} className="mylink">
            <div className="category-box box1">
                <div className="category-title">Snacks</div>
                <img className="pic" src={snackspic} alt="Snacks"/>
                <div className="category-strip strip1">
                    <Icon className="category-arrow-right" icon={arrowRightOutlined} style={{color: '#ffffff', fontSize: '26px'}} />
                </div>
            </div>
        </Link>
        <Link to ={"/beverages"} className="mylink">
            <div className="category-box box2">
                <div className="category-title">Beverages</div>
                <img className="pic" src={beverages} alt="Daily Needs" />
                <div className="category-strip strip2">
                    <Icon className="category-arrow-right" icon={arrowRightOutlined} style={{color: '#ffffff', fontSize: '26px'}} />
                </div>
            </div>
        </Link>
    </div>
    
  );
  
}
export default Mycategory;