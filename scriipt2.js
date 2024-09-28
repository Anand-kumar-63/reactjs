import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
// heading element using raect
// React.createElment=> ReactElement(object) => converts into htmlelement(on render)
const heading = React.createElement("h1", {}, "hey i was here");
root.render(heading);
console.log(heading);

//                        JSX-a html like syntax used to create html elements in react::
// jsx(element is traspiled before it reaches the js engine)=>done by parcel=> by babel package (bable is js transpiler)
// jsx element is ultimately converted into create.element => reactelement(object) => converts into htmlelement(on render)
// REACT ELEMENT
const jsxheading = (
  <h1 id="heading" className="head">
    hey i am hitesh chaudhary
  </h1>
);
// for multiple lines use beackets() so that jsk know where the elements is starting and ending
const jsxhead = <h2 id="head2">hey i am heading 2</h2>;
root.render(jsxheading);

// setTimeout(() => {
//   root.render(jsxhead);
// }, 2000);

console.log(jsxheading);

// REACT COMPONENTS
// react functional components- is js a function that returns a peice of JSX code or Returns a React Element::
const HeadComponent = () => (
  <div id="container">
    <h3 id="head3">Hey! I am a Functional Component</h3>
  </div>
);
// composition of function :
const Title = () => (
  <div id="title">
    <HeadComponent />
    <h1>HEY! I am Title Component</h1>
  </div>
);

// Assuming 'root' is your React root element (created via ReactDOM.createRoot)
root.render(<Title />);

// enter the react elements inside functional components::
// you can all a function inside a component because what is functional component at the end it is a function which retruns a jsx code or a react element :: 
const tilo = <span id="tilo">Hey I am TILO REACT Element</span>;
const tilllo = 1000;
const Header = () => (
  <div id="han-id">
    {tilo}
    {Title()}
    <Title />
    {tilllo}
    <p>hello i am what?</p>
  </div>
);

root.render(<Header />);
