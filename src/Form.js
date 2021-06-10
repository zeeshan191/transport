import React, { Component } from 'react';
import './Form.css';
import Axios from 'axios'

class Form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      email: "",
      number: "",
      message: ""

    }
  }

  handlechangeall = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handlesubmit = (event) => {

    event.preventDefault();
    console.log('event :',event);
    // console.log('test :', event.number);
    console.log('test12 :', this.state.number);
    alert(`
  my name is ${this.state.fullname}. 
  My email id is ${this.state.email}
  My mobile number is ${this.state.number}.
  My message to your company is ${this.state.message}
  `);
  Axios.post("http://localhost:3003/getMessage", {
        message1 :"Name:"+this.state.fullname + "Email:"+this.state.email + "Number:"+this.state.number + "Message:"+this.state.message,
        numbers1 :8050323104,
      }).then((res) => {
        console.log("printing single set ", res);
      });
    // alert( JSON.stringify(this.state));
    console.log(JSON.stringify(this.state));
  }

  render() {
    return (
      <div className="contact-area overflow-hidden default-padding bg-gray" style={{ paddingTop: "35px" }}>
        <div className="form-container">
          <div className="form-row">
            <div className="col-lg-6 contact-form-box">

              <form onSubmit={this.handlesubmit} >
                <label> FullName </label><br />
                <input type="text" name="fullname" value={this.state.fullname} placeholder="Enter your FullName" autocomplete="off"
                  onChange={this.handlechangeall} /> <br />

                <label> Email </label><br />
                <input type="email" name="email" value={this.state.email} placeholder="Enter your Email" autocomplete="off"
                  onChange={this.handlechangeall} /> <br />

                <label> Mobile </label><br />
                <input type="number" name="number" value={this.state.number} placeholder="Enter your Mobile Number" autocomplete="off"
                  onChange={this.handlechangeall} /> <br />

                <label> Message </label><br />
                <textarea value={this.state.message} name="message" placeholder="Enter your Message"
                  onChange={this.handlechangeall} />   <br />

                <input type="submit" value="Send" />
              </form>
            </div>
            {/* <div className="col-log-6-info"> */}
              <img src="map.png" alt="Nature" style={{ width: "550px"}} />
            {/* </div> */}
          </div>
        </div>
      </div>
    )
  };

};

export default Form;