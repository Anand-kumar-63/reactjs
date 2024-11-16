// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import  useRestaurantMenu  from "../utils/useRestaurantMenu";

const Restaurantmenu = () => {
  const [menuinfo , setmenuinfo] = useState([]);
  const {resID} = useParams();
// //  use effect to fetch data when one time render occurs::
//   useEffect(() => {
//     fetchMenu();
//   }, []);
// // fetching the data and coverting the data to json and then updating the menuinfo:
//   const fetchMenu = async () => {
//     const data = await fetch(MENU_API + resID);
//     const datajson = await data.json();
//     console.log(datajson);
//     setmenuinfo(datajson);
//   };

// we are creating a new component(Hook) for extracting the data form api and giving it a responsiblility ::
const giveninfo= useRestaurantMenu(resID);
setmenuinfo(giveninfo);
const { itemCards } = menuinfo?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card?.card;
console.log(itemCards);

// const {name,cuisines,costForTwoMessage,costForTwo,cloudinaryImageId,avgRating,deliveryTime} =
//  menuinfo?.data.cards?.[2]?.card?.card?.info;

  return (menuinfo === null)?<Shimmer />:(
    <div className="menu">
      <h1>kya h</h1>
      <h2>kya h be</h2>
      <ul>
        <li>hello</li>
        <li>biriyani</li>
        <li>lassi</li>
      </ul>
    </div>
  );
};

// export default Restaurantmenu;
