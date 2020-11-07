import "./mainpage.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import React from "react"
import SearchIcon from '@material-ui/icons/Search';
import {useHistory} from "react-router"
function Cheader() {
    const history=useHistory();
  return(
    <div className="header">

        <ArrowBackIcon className="location" onClick={()=> history.goBack()} fontSize="small"/>
        <SearchIcon className="search" fontSize="large"/>

        <div className="home">
            <div>
                Snacks
            </div>
            <div className="textbox">
                Choose Category
            </div>
        </div>
        
        
    </div>
  );
  
}
export default Cheader;