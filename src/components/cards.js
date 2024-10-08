const Cards = (props) => {
  const {resdata} = props

// Destructring the elemnents of data of  each restaurant:: 
  const{locality,name,cuisines,costForTwo,deliveryTime,avgRating}= resdata?.info;

  return (
    <div className="card">
      <img  id="Card_image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resdata.info.cloudinaryImageId} />
      {/*when destructure is not done  */}
      {/* <h3>{resdata.data.locality}</h3>
      <p>{resdata.info.name}</p>
      <h4>{resdata.info.cuisines.join("; ")}</h4>
      <h4>{resdata.info.costForTwo}</h4> */}

      {/* after destructure is done we can simplify our code */}
      <h3>{name}</h3>
      <p>{locality}</p>
      <h4>{cuisines.join("; ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}min</h4>
      <h5>{avgRating}</h5>

    </div>
  );
};

export default Cards;