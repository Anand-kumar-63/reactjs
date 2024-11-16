import { useState } from "react";
import { useParams } from "react-router-dom";
// import Shimmer from './Shimmer';
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const dummy = "Dummy Data";
  // we build our own custom hook to extract the data of a particular restaurant by giving the resId usnig use params () hooks
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;
  const {
    name,
    cuisines,
    costForTwoMessage,
    cloudinaryImageId,
    avgRating,
    deliveryTime,
  } = resInfo?.data.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;
  console.log(itemCards);
  console.log( resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]);
  // in whole data we are gonna filter out all the item catgory 
  // when we click on a restaurant at home page restaurantmenu is opened we are filtering out all the cards on the restaurant menu page those have type === itemscatagory
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordions in this map aver all the category and return accordian for each category of that particular restaurant 
      like accordian for reccomended and othrs*/}
      {categories.map((category, index) => (
        // Controlled Component 
        <RestaurantCategory 
        // props for this accordian restaurant category: 
          data={category?.card?.card}
          key={category?.card?.card.title}
          showItems={index === showIndex ? true : false}
        //  we have to control this state variable using my child component to get the index of the object clicked   
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
