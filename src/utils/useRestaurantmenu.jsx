import {useState , useEffect} from "react";
import { MENU_API } from "../utils/constants";

const Restaurantmenu =() =>{
const [resinfo , setresinfo] = useState([]);
// fetch data
useEffect(()=>{
fetchdata();
},[]);

// fetching the data and convertting into json:
const fetchdata = async() =>{
  const data = await fetch(MENU_API);
  const json = await data.json();

// passing it to state variables:
  setresinfo(json);
}
  return resinfo;
}
export default Restaurantmenu;