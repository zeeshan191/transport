import React from 'react';
import './Contact.css';
import Form from './Form';

const Contact =() => {
  return (
  <>
   <div className="container5">
<div className="header">
  <h1>Get in Touch With Us !</h1>
</div>

<div className="container" style={{width:"74%"}}>
        <div className="service-items text-center">
          <div className="row">

            <div className="col-lg-4 col-md-6 single-item" style={{paddingLeft:"0px",paddingRight:"0px"}}>
              <div className="item">
              <div className="has_ma_el_bg_slider has_eae_slider elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-316aabc" data-id="316aabc" data-element_type="column">
              <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap" style={{display:"initial",height:"190px"}}>
			  <div className="elementor-icon-box-icon"> 
<span className="elementor-icon elementor-animation-"> 
<i aria-hidden="true" className="fas fa-map-signs"></i>	
</span>
</div>
                <div className="info">
                  <h4>JAI HIND Transport</h4>
                  <i className="flaticon-cogwheel"></i>
                  <p style={{fontWeight:"600"}}>
                  Ragigudda Cross Beside NEXA Showroom Honnalli Road Shimoga- 577201 karnataka - India.
                                </p>
              
                </div>
              </div></div>
            </div></div>
</div>

            <div className="col-lg-4 col-md-6 single-item" style={{paddingLeft:"0px",paddingRight:"0px"}}>
              <div className="item">
              <div className="has_ma_el_bg_slider has_eae_slider elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-316aabc" data-id="316aabc" data-element_type="column">
              <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap"  style={{display:"initial",height:"190px"}}>
			  <div className="elementor-icon-box-icon"> 
    <span className="elementor-icon elementor-animation-"style={{color:"#0C2A8F"}}> 
    <i aria-hidden="true" className="fas fa-envelope"></i>
    </span>
    </div>
                <div className="info">
                  <h4>Email Id</h4>
                  <i className="flaticon-analysis-1"></i>
                  <p style={{fontWeight:"600"}}>
                  shoyabsmg@gmail.com
                                </p>
             
                </div>
              </div></div></div>
            </div>
</div>



            <div className="col-lg-4 col-md-6 single-item" style={{paddingLeft:"0px",paddingRight:"0px"}}>
              <div className="item">
                <div className="info">
                <div className="has_ma_el_bg_slider has_eae_slider elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-316aabc" data-id="316aabc" data-element_type="column">
                <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap"  style={{display:"initial",height:"190px"}}>
				<div className="elementor-icon-box-icon">
     <span className="elementor-icon elementor-animation-"style={{color:"#0C2A8F"}}>
      <i aria-hidden="true" className="fas fa-phone-square-alt"></i>
      		</span>
              </div>
                  <h4>Contact Number</h4>
                  <i className="flaticon-interview"></i>
                  <p style={{fontWeight:"600"}}>
                  +91 9945891796
                                </p>
                                </div>
                </div>
              </div>
            </div>
          </div>
        </div></div></div>
      </div>
    
               <Form />
</div>
</>
);
};
export default Contact;
