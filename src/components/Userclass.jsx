import React from "react";
class Userclass extends React.Component {
// props in CBC:
  constructor(props) {
    super(props);
// declare state variable in class based component:: this state variable is a big object
    this.state = {
      count: 0,
      count1: 1,
      count2: 2,
      count3: 3,
    };
  }

  render() {
    const{name , Contact} = this.props;
    return (
      <div classname="user">
        <h4>count:{count}</h4>
        <h4>count2:{count1}</h4>
      {/* buttom and using on click funtion updating state variable values */}
        <button onClick={()=>{
          this.setState({
            count:this.state.count+1,
            count1:this.state.count1+2,
          });
        }}>click Me</button>

        <div>Name: {name}</div>
        <div>Email: DeepakKumar@gamil.com</div>
        <div>Contact: {Contact}</div>
      </div>
    );
  }
}
export default Userclass;
