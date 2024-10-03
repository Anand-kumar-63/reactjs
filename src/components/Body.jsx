// functional component of Body

import reslist from "../utils/data";
import Cards from "./cards";
import { useEffect, useState } from "react";
import reslist from "../utils/data";

const Body = () => {
  // call back function use effect
 useEffect(()=>{fetchdata();},[]);

  const fetchdata = async () => {
    const fuck = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    ).then(response=>(response.json())).catch(err=>console.log("error:",err));
    // // convert this data to json
    // const json = await data.json();
    // console.log(json);
    console.log(fuck);

    // now use this real time data on website by updating the listofrestaurant::
    setlistofrestaurants(fuck?.data?.cards[2]?.card?.card?.gridElements?.infoWithstyle?.restaurants || []);
  };
  
  // this is a Normal js variable
  // let listofrestaurants = [
  //   {
  //     info: {
  //       id: "150586",
  //       name: "Accord International",
  //       cloudinaryImageId: "ntcsuou2650qimnkrc3m",
  //       locality: "Parasia Road",
  //       areaName: "Vishnu Nagar",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["North Indian", "South Indian", "Continental", "Beverages"],
  //       avgRating: 4.3,
  //       parentId: "26828",
  //       totalRatingsString: "570",
  //     },
  //   },

  //   {
  //     info: {
  //       id: "150584",
  //       name: "Accord National",
  //       cloudinaryImageId: "ntcsuou2650qimnkrc3m",
  //       locality: "Parasia Road",
  //       areaName: "Vishnu Nagar",
  //       costForTwo: "₹200 for two",
  //       cuisines: ["North Indian", "South Indian", "Continental", "Beverages"],
  //       avgRating: 3.5,
  //       parentId: "26828",
  //       totalRatingsString: "570",
  //     },
  //   },
  // ];

  // state variable - super powerfull variable:
  let [listofrestaurants, setlistofrestaurants] = useState(reslist);
  return (
    <div className="Body">
      {/* updating the list of restaurants by using filter those restaurants having rating greater than 4 on clicking the button::*/}
      <button
        className="filter_btn"
        onClick={() => {
          filteredlistofrestaurants = listofrestaurants.filter(
            (res) => res.info.avgRating > 4
          );
          console.log(filteredlistofrestaurants);
          // updating the list of restuarants::by passing the filtered values of restaurants by filter method::
          setlistofrestaurants(filteredlistofrestaurants);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="res_cards">
        <div>
          {" "}
          {/* <Cards  resdata= {reslist[0]}/>
        <Cards  resdata = {reslist[1]}/>
        <Cards  resdata = {reslist[2]}/> 
        <Cards  resdata = {reslist[3]}/> 
        <Cards  resdata = {reslist[4]}/> 
        <Cards  resdata = {reslist[5]}/> 
        <Cards  resdata = {reslist[6]}/> 
        <Cards  resdata = {reslist[7]}/>  */}
        </div>

        {/* now make it a simpler code by using js map function*/}
        {listofrestaurants.map((restaurant, index) => (
          <Cards key={index} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
