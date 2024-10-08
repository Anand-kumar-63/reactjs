// functional component of Body

// import reslist from "../utils/data";
import Cards from "./cards";
import { useEffect, useState } from "react";
import reslist from "../utils/data";
import Shimmer from "./shimmer";

const Body = () => {
  // call back function use effect
  // useEffect(() => {
  //   // fetchdata();

  //   navigator.geolocation.getCurrentPosition(loc => {
  //     console.log(loc);
  //   }, err => {
  //     console.log("An error occured while fetching location!");
  //   });
  // }, []);

  // const fetchdata = async () => {
  //   const res = await fetch(
  //     "https://www.swiggy.com/mapi/homepage/getCards?lat=28.75726989999999&lng=77.4971405"
  //   )
  //   //   .then((response) => response.json())
  //   //   .catch((err) => console.log("error:", err));
  //   // // convert this data to json
  //   const json = await res.json();
  //   console.log(json);
  //   // console.log(
  //   //   json?.data.success.cards[2].gridWidget.gridElements.infoWithStyle
  //   //     .restaurants
  //   // );

  //   const restaurants = json?.data.success.cards[2].gridWidget.gridElements.infoWithStyle.restaurants;
  //   // now use this real time data on website by updating the listofrestaurant::
  //   setlistofrestaurants(restaurants);
  //   // setfilteredrestaurants(restaurants);
  //   // filteredlistofrestaurants(restaurants);
  // };

  // console.log("rerdendered");
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
  //   }];

  // this is a state variable - super powerfull variable:
  let [listofrestaurants, setlistofrestaurants] = useState(reslist);
  let [filteredrestaurants , setfilteredrestaurants]= useState(reslist);

  // state variable for search button
  // when state variable updates , react trigerrs reconcilation cycle and it rereders all the body components
  const [kyah, setkyah] = useState([]);

  return listofrestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="filters">
        <div className="searchbar">
          <input
            type="text"
            id="text"
            value={kyah}
            onChange={(e) => {
              setkyah(e.target.value);
            }}
          />
          <button
            className="search_btn"
            onClick={() => {
              // whenever you clicked the search button ui gets updated:: filter the list of restaurant card and update the ui::
               filteredrestaurants = listofrestaurants.filter(
                (res) => res.info.name.includes(kyah));

                console.log(filteredrestaurants);
                setfilteredrestaurants(filteredrestaurants);
            }}
          >
            Search
          </button>
        </div>
        {/* updating the list of restaurants by using filter those restaurants having rating greater than 4 on clicking the button::*/}
        <button
          className="filter_btn"
          onClick={() => {
            // we are using array dot filtered method to filter the list of restaurants::
            let filteredlistofrestaurants = listofrestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            // console.log(filteredlistofrestaurants);
            // updating the list of restuarants::by passing the filtered values of restaurants by filter method::
            setlistofrestaurants(filteredlistofrestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

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
        {filteredrestaurants.map((restaurant) => (
          <Cards key={restaurant.info.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
