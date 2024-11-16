import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import UserContext from "../utils/Usercontext";
// functional Component of Header
const Header = () => {
  // state variable
  // data from context file
  const {loggedInUser}= useContext(UserContext);

  const [btnnameReact, setbtnnameReact] = useState("login");
   const OnlineStatus = useOnlineStatus();
  return (
    <div className="flex flex-row">
      <div className="">
        <img className="w-28 h-28 m-0" src="https://i.pinimg.com/736x/9a/fa/a4/9afaa4a58b2c5e73cdbd7d66c0b2c220.jpg" />
      </div>
      <div className="flex py-0 h-28 pl-96 m-0 bg-slate-300 w-[95%]">
        <ul className="flex p-4 m-4 gap-4">
          <li className="p-2">Online Status: {OnlineStatus ?"🟢":"🔴"}</li>
          <li className="p-2"><Link to="/Services">Services</Link></li>
          <li className="p-2"><Link to="/about">About</Link></li>
          <li className="p-2">Cart</li>
          <li className="p-2"><Link to="/contact">Contact US</Link></li>
          <li className="p-2">
            <Link to="/grocery" className="links">
              Grocery
            </Link>
          </li>
        </ul>
        <button 
          className="bg-cyan-100 px-6 h-8 my-10 rounded-md hover:bg-sky-200"
          onClick={() => {
            btnnameReact === "login"
              ? setbtnnameReact("logout")
              : setbtnnameReact("login");
          }}
        >
          {btnnameReact}
        </button>
        <div>user:{loggedInUser}</div>
      </div>
    </div>
  );
};

export default Header;
