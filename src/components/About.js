import User from "./user";
import Userclass from "./Userclass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props); // Call the parent class's constructor with props
    console.log("constructor parent")
  }
  componentDidMount(){
    console.log("did mount parent");    
  }

  render() {
    console.log("parent render")
    return (
      <div>
        <h1>This is the about section of React.js</h1>
        <User name={"Dpak Kumar"} Contact={"6306*****0"} />
        <Userclass name={"Anand Kumar1"} Contact={"hello@gmail.com1"} />
      </div>
    );
  }
}

export default About;
