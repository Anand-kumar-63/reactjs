import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
// functional Component of Header
const Header = () => {
  // state variable
  const [btnnameReact, setbtnnameReact] = useState("login");
   const OnlineStatus = useOnlineStatus();
  return (
    <div className="flex ">
      <div className="logo ">
        <img src="https://i.pinimg.com/736x/9a/fa/a4/9afaa4a58b2c5e73cdbd7d66c0b2c220.jpg" />
      </div>
      <div className="navitems">
        <ul>
          <li>Online Status: {OnlineStatus ?"🟢":"🔴"}</li>
          <li><Link to="/Services">Services</Link></li>
          <li><Link to="/about">About</Link></li>
          <li>Cart</li>
          <li><Link to="/contact">Contact US</Link></li>
          <li>
            <Link to="/grocery" className="links">
              Grocery
            </Link>
          </li>
        </ul>
        <button
          className="log_btn"
          onClick={() => {
            btnnameReact === "login"
              ? setbtnnameReact("logout")
              : setbtnnameReact("login");
          }}
        >
          {btnnameReact}
        </button>
      </div>
    </div>
  );
};

export default Header;
