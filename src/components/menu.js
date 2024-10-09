import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import Shimmer from "./shimmer";

const Restaurantmenu = () => {
  const [menuinfo , setmenuinfo] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.75726989999999&lng=77.4971405&restaurantId=703870&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setmenuinfo(json.data);
  };

if(menuinfo === null) return <Shimmer />;

const { itemCards } = menuinfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;
// console.log(itemCard);
  return (
    <div className="menu">
      <h1>Name o fthe restaurant</h1>
      <h2>menu items</h2>
      <ul>
        <li>egg omelete</li>
        <li>biriyani</li>
        <li>lassi</li>
      </ul>
    </div>
  );
};

export default Restaurantmenu;
