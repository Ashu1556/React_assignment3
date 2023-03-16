import React from "react";
import "./header.css";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Header = () => {
  return (
    <div className="header">
      <div className="header11">
        <p>Logo</p>
      </div>
      <div className="header1">
        <p style={{ marginRight: "1em" }}>Home</p>
        <p style={{ marginRight: "1em" }}>About</p>
        <p>Contact</p>
      </div>

      <div className="header12">
        <FacebookTwoToneIcon
          style={{ width: "50px", height: "50px", marginRight: "1em" }}
        />
        <TwitterIcon
          style={{ width: "50px", height: "50px", marginRight: "1em" }}
        />
        <InstagramIcon
          style={{ width: "50px", height: "50px", marginRight: "1em" }}
        />
      </div>
    </div>
  );
};

export default Header;
