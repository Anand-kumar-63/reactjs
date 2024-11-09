import reslist from "../utils/data";
import Cards from "./cards";
import { useEffect, useState } from "react";
import reslist from "../utils/data";
import Shimmer from "./shimmer";
import useOnlineStatus from "./useOnlineStatus";
// import Restaurantmenu from "../utils/useRestaurantmenu";

const Body = () => {
  // call back function use effect
  useEffect(() => {
    fetchdata();
    navigator.geolocation.getCurrentPosition(
      (loc) => {
        console.log(loc);
      },
      (err) => {
        console.log("An error occured while fetching location!");
      }
    );
  }, []);

  // when state variable updates , react trigerrs reconcilation cycle and it rereders all the body components and updates the UI::
  // this is a state variable - super powerfull variable:
  let [listofrestaurants, setlistofrestaurants] = useState([]);
  let [filteredlistofrestaurants, setfilteredlistofrestaurants] = useState([]);

  const fetchdata = async () => {
    const res = await fetch(
      // "https://www.swiggy.com/mapi/homepage/getCards?lat=28.75726989999999&lng=77.4971405"
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.75726989999999&lng=77.4971405&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    ); //   .then((response) => response.json())
    //   .catch((err) => console.log("error:", err));

    //  convert this data to json
    const json = await res.json();
    console.log(json);

    const restaurants =
      json?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    setlistofrestaurants(restaurants);
    setfilteredlistofrestaurants(restaurants);
  };

  // importing the custom hook and using it to update the list of restaurants and filteredlistofreastaurants
  // const { data , error } = Restaurantmenu();
  // useEffect(() => {
  //   if (data) {
  //     const restaurants1 = data?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
  //     setlistofrestaurants(restaurants1 || []);
  //     setfilteredlistofrestaurants(restaurants1 || []);
  //   }
  // }, [data]); // Dependency is now `data`

  // checking the online status of the webapp
  const onlinestatus = useOnlineStatus();
  if (onlinestatus === false)
    return <h1>looks like you are offline connect to the internet;</h1>;

  // state variable for search button
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
              const filteredrestaurants = listofrestaurants.filter((res) =>
                res.info.name.includes(kyah)
              );

              console.log(filteredrestaurants);
              setfilteredlistofrestaurants(filteredrestaurants);
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
            let filteredrestaurants = listofrestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            // console.log(filteredlistofrestaurants);
            // updating the list of restuarants::by passing the filtered values of restaurants by filter method::
            setfilteredlistofrestaurants(filteredrestaurants);
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
        {filteredlistofrestaurants.map((restaurant) => (
          <Cards key={restaurant.info.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
