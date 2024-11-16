// import {useState , useEffect} from "react";
// import { MENU_API } from "./constants";

// const useRestaurantmenu =(resID) =>{
// const [resinfo , setresinfo] = useState([]);
// // fetch data
// useEffect(()=>{
// fetchdata();
// },[]);

// // fetching the data and convertting into json:
// const fetchdata = async() =>{
//   const data = await fetch(MENU_API + resID);
//   const json = await data.json();

// // passing it to state variables:
//   setresinfo(json);
// }
//   return resinfo;
// }
// export default useRestaurantmenu;

import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resID) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, [resID]); // Refetch if resID changes

  const fetchData = async () => {
    try {
      const response = await fetch(MENU_API + resID);
      if (!response.ok) throw new Error("Failed to fetch data");
      const json = await response.json();
      setRestaurantInfo(json);
    } catch (error) {
      console.error("Error fetching restaurant menu:", error);
      setRestaurantInfo(null);
    }
  };
 console.log(restaurantInfo);
  return restaurantInfo;
};

export default useRestaurantMenu;
