import React from "react";
import "./Footer.css";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <div className="footer__container">
      <div className="footer">
        <div className="footer__icons">
          <div className="footer__icon">
            <FacebookSharpIcon />
          </div>
          <div className="footer__icon">
            <TwitterIcon />
          </div>
          <div className="footer__icon">
            <InstagramIcon />
          </div>
          <div className="footer__icon">
            <EmailIcon />
          </div>
          <div className="footer__icon">
            <YouTubeIcon />
          </div>
        </div>
        <div className="footer__copy">
          <p>
            ©<span>{year}</span>Copyright Ishita Mehra
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
