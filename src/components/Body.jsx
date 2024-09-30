// functional component of Body

import reslist from "../utils/data";
import Cards  from "./cards";

const Body = () => {
  return (
    <div className="Body">
      <div className="searchbar">Search</div>
      <div className="res_cards">
        {/* <Cards  resdata= {reslist[0]}/>
        <Cards  resdata = {reslist[1]}/>
        <Cards  resdata = {reslist[2]}/> 
        <Cards  resdata = {reslist[3]}/> 
        <Cards  resdata = {reslist[4]}/> 
        <Cards  resdata = {reslist[5]}/> 
        <Cards  resdata = {reslist[6]}/> 
        <Cards  resdata = {reslist[7]}/>  */}
        {/* now make it a simpler code by using js map function*/}
        {
        reslist.map((restaurant,index) => (<Cards 
           key={index}
           resdata={restaurant}/> ))

        }

      </div>
    </div>
  );
};
export default Body;