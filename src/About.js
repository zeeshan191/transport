import React from 'react';
import './components/About.css'

const About =() => {
  return (
    <>
    <div className="container5">
    <div className="section-head1 text-center">
			<h3 className={{color:" #064b76"}}>AboutUs</h3>
		</div>
  <div className="row">
  <div className="col-md-7" style={{paddingRight:"10%", paddingLeft:"10%"}}>
  <p><span style={{fontWeight: "400"}}>JAI HIND Transport is a Heavy and ODC Transport Company formed in the year 1982 by Mr. Mohammed Niyamath Ulla, having experience in the field since 1982. Our company is majorly focused on the transportation of Break Bulk and Heavy Cargo, all across India.</span></p>
  <p><span style={{fontWeight: "400"}}>Experience is a very valuable asset to hold in the field of Transport and logistics as it gives a foresight and vastly helps calibrate the exact need and expenses of any assignment in hand, making for a smooth and forecastable procedure. This experience is what is the pride and jewel here at Jai Hind Transport, Transport staff is with more than 39 years of experience in the field.</span></p>
  <p><span style={{fontWeight: "400"}}>Extremely rough and hostile environment is where the capabilities of our company truly shine. Our expertise and capability of handling cargo having massive weights and huge dimensions and transportation projects in extremely tough and remote areas is what JAI HIND Transport in known for. </span></p>
  <p><span style={{fontWeight: "400"}}>Our main priority while serving our customers is given to the aspect of safety. Our customer centric behaviour, Professional approach and Ethical practices are part of our Code of Conduct.</span></p>
  </div>
  <div className="col-md-5">
  <img src="truck.jpg" width="620" height="500" style={{paddingLeft:"10%", paddingRight:"10%", width:"100%"}} alt="truck"/>
  </div>
  </div>
</div>
</>
);
}; 
export default About;