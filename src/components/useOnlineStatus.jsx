import { useEffect, useState } from "react"; 
 const OnlineStatus = () =>{
 const [onlineStatus,setonlinestatus] = useState(true);
//this custom hook will return online status::
useEffect(() =>{
window.addEventListener("offline" , ()=>{
  setonlinestatus(false);
})

window.addEventListener("online" , ()=>{
  setonlinestatus(true);
})
},[]);
//  return boolean value
  return onlineStatus;
 }
 export default OnlineStatus;


//  always start the name of custom hook file with the word "use" its a naming convention