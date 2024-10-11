import React from "react";
import { Component } from "react";
import Contact from "./contact";
class Userclass extends React.Component {
// props in CBC:
  constructor(props) {
    super(props);
// declare state variable in class based component:: this state variable is a big object
    this.state = {
     info:{
      Name: "dummy",
      Contact: "comdust",
      Email: "andgmail.com",
     }
    };
  
    console.log("constructor 1");
    

  }
  // (component did mount is called when render phase and dom updating(with dummy data) ends in this we fetch data from api)
  async componentDidMount() {
    // console.log(this.props.name + 'Child Component Did Mount');
    // * API call
    const data = await fetch(
      "https://api.github.com/users/Sreenivasulu-Kalluru"
    );
    const json = await data.json();
// this to update the Ui with fetched data::
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  // (component did update) is called when the dom is updated by fetched data::
  componentDidUpdate(){
    console.log("componetdidupadte");
  }
// (component will update) is callled when you changes the page ---you are demounting the UI of current component::
  componentWillUnmount() {
  console.log("component will update")
}
  render() {
    const{Name , Contact } = this.state.info;
    console.log("rendered 1");
    return (
      <div className="user">
     
        {/* <h4>count:{this.state.count}</h4>
        <h4>count2:{this.state.count1}</h4>
      {/* buttom and using on click funtion updating state variable values */}
        {/* <button onClick={()=>{
          this.setState({
            count:this.state.count+1,
            count1:this.state.count1+2,
          });
        }}>click Me</button> */} 

        <div>Name: {Name}</div>
        <div>Email: DeepakKumar@gamil.com</div>
        <div>Contact: {Contact}</div>
      </div>
    );
    
  }
}
export default Userclass;

// RENDER CYCLE OF THIS CLASS BASED COMPONENT::
/* ****************************************************************
 * ----- Mounting CYCLE -----
 *   Constructor (dummy)
 *   Render (dummy)
 *    DOM  IS UPDATED--->{<HTML Dummy></HTML>}
 *   Component Did Mount
 *       <API Call>
 *       <this.setState> - State variable is updated
 *
 * ----- UPDATE CYCLE -----
 *       render(API data)
 *      DOM IS UPDATED--->{<HTML (new API data)>}
 *      Component Did Update
 * 
 * IF YOU CHANGES THE PAGE--->Component Will Unmount
 *
 *
 * Life Cycle Diagram Website Reference: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 */
