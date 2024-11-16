const Cards = (props) => {
  console.log(props);
  const { resData } = props;

  // Destructring the elemnents of data of  each restaurant::
  // console.log("Data:", resData);
  const { locality, name, cuisines, costForTwo, deliveryTime, avgRating } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] h-auto bg-gray-200 rounded-lg hover:bg-gray-300 transition-all">
      <img
        className="w-[250px] h-[150px] rounded-lg"
        id="Card_image"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
      />
      {/*when destructure is not done  */}
      {/* <h3>{resData.data.locality}</h3>
      <p>{resData.info.name}</p>
      <h4>{resData.info.cuisines.join("; ")}</h4>
      <h4>{resData.info.costForTwo}</h4> */}

      {/* after destructure is done we can simplify our code */}
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <p>{locality}</p>
      <h4>{cuisines.join("; ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}min</h4>
      <h5>{avgRating}</h5>
    </div>
  );
};


// * Higher Order Component

// * input - RestaurantCard => RestaurantCardPromoted
// we have to make a higher order component that takes the cards as a input and return it back with a label on it::

export const withpromotedlabel = (Cards) =>{
return () =>{
  return (
    <div>
      <label>Promoted</label>
      <Cards {...props}/>
    </div>
  )
}
};
export default Cards;
