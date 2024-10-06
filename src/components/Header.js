import { useState } from "react";
import { Link } from "react-router-dom";
// functional Component of Header
const Header = () => {
  // state variable
  const [btnnameReact, setbtnnameReact] = useState("login");

  return (
    <div className="header">
      <div className="logo">
        <img src="https://i.pinimg.com/736x/9a/fa/a4/9afaa4a58b2c5e73cdbd7d66c0b2c220.jpg" />
      </div>
      <div className="navitems">
        <ul>
          <li><Link to="/Services">Services</Link></li>
          <li><Link to="/about">About</Link></li>
          <li>Cart</li>
          <li><Link to="/contact">Contact US</Link></li>
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
