// this res category component

import ItemList from "./ItemList";
import { useState } from "./react";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  //  able to use for collapse and open of a // use state variccordian
  // const [showItems , setshowItems] = useState(false);
  // handle click funtion to control collapse and opening of accordian:
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/* accrodian header */}
      <div classname="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div classname="flex justify-between">
          {" "}
          <span classname="font-bold text-lg cursor-pointer">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇</span>
        </div>
        {/* accordian body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
