import {useState} from "react";

const User = (props) =>{
  const [count] = useState(0);
  const [count1] = useState(1);
  return(
    <div className="user">
    <div>Name:{props.name}</div>
    <div>Email: anand@gmail.com</div>
    <div>Contact: {props.Contact}</div>
    {/* <div>Count:{count}</div>
    <div>Count1:{count1}</div> */}
    </div>
  )
}
export default User;