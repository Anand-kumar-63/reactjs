// functional Component of Header
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://i.pinimg.com/736x/9a/fa/a4/9afaa4a58b2c5e73cdbd7d66c0b2c220.jpg" />
      </div>
      <div className="navitems">
        <ul>
          <li>Services</li>
          <li>About</li>
          <li>Cart</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;