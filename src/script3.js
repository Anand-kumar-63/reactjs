import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const root = ReactDOM.createRoot(document.getElementById("root"));
// functional Component of APP 
const Applayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};
// Rendering everything inside root
root.render(<Applayout />);
