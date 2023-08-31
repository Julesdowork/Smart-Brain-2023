import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt style={{ height: '150px', width: '150px', backgroundColor: 'darkgreen' }} className="br2 shadow-2 Tilt" tiltMaxAngleX={"30"} tiltMaxAngleY={"30"}>
        <div className="pa3"><img src={brain} alt="Smart Brain Logo" style={{paddingTop: "5px"}}></img></div>
      </Tilt>
    </div>
  );
}

export default Logo;