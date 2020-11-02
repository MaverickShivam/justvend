import "./mainpage.css";
import topimg from "./medias/top-image-edited.png";
import React from "react";

function Mytopimage() {
  return(
    <img className="top-image" src={topimg} alt="Vending Machine" />
  );
  
}
export default Mytopimage;