import React from "react";
import './Footer.css';
import { NavLink } from "react-router-dom";
// import { FaFacebook,FaTwitter,FaLinkedinIn } from 'react-icons/fa';
import VideoPlayer from 'react-video-js-player';

const Footer = () => {
return (
<div>
<footer class="footer-distributed">
 
 <div class="footer-left">
 <img src="JHT.png" alt="logo" className="i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-built i-amphtml-layout" i-amphtml-layout="fixed" style={{width: '200px', height: '47.39px' , marginLeft:"45px", loaderDelayOffset:'600ms !important'}}/>
 
 
 <p class="footer-links">
 <NavLink to="/home">Home</NavLink>
 ·
 <NavLink to="/trucktype">trucktype</NavLink>
 ·
 <NavLink to="/about">About</NavLink>
 ·
 <NavLink to="/contact">Contact</NavLink>
 </p>
 
 {/* <p class="footer-company-name">madcap solutions &copy; 2021</p> */}
 </div>
 
 <div class="footer-center">
 
 <div>
 <i class="fa fa-map-marker"></i>
 <p><span>Ragigudda cross honahalli road</span> shimoga, Karnataka</p>
 </div>
 
 <div>
 <i class="fa fa-phone"></i>
 <p>+91 9945891796</p>
 </div>
 
 <div>
 <i class="fa fa-envelope"></i>
 <p><a href="mailto:support@company.com">shoyabsmg@gmail.com</a></p>
 </div>
 
 </div>
 
 <div class="footer-right" style={{alignItems:"center"}}>
 
 <p class="footer-company-about" style={{marginBottom:"0"}}>
 {/* <span>| Website designed by MADCAP</span> */}
 <VideoPlayer src="Video.mp4" poster="poster.png" width="350" height="160" />

 
 </p>
 <a style={{display: "contents", fontStyle:"oblique"}} href="https://www.madcapsolutions.com/" target = "_blank">MADCAP Solutions</a>
 
 {/* <div class="footer-icons">
 
 <NavLink to="https://www.facebook.com/login/web/"><i class="fa"><FaFacebook /></i></NavLink>
 <NavLink to="#"><i class="fa"><FaTwitter /></i></NavLink>
 <NavLink to="#"><i class="fa"><FaLinkedinIn /></i></NavLink>

 
 </div>
  */}
 </div>
 </footer> 
 

 <div className="ast-small-footer footer-sml-layout-2">
    <div className="ast-footer-overlay">
        <div className="ast-container">
            <div className="ast-small-footer-wrap">
                <div className="ast-row ast-flex">
                {/* <div className="mad">
 <img src="madcaplogo.jpg" style={{width:"74px",height:"63px",marginLeft:"636px",marginBottom:"-50px",marginTop:"0px"}} alt="logo" />
 </div> */}
                    <div className="ast-small-footer-section ast-small-footer-section-1 ast-small-footer-section-equally ast-col-xs-12" style={{textAlign:"center", color:"#92999f",fontSize:"small",fontStyle:"italic"}}>
                    Copyright © 2021 All rights reserved <a style={{display: "contents", fontStyle:""}} href="https://www.madcapsolutions.com/" target = "_blank" >MADCAP Solutions</a>
                    </div>
                </div>          
            </div>
        </div>
    </div>
</div>

</div>
);
};
export default Footer;
