import React from "react";
import ReactDOM from "react-dom/client";

// react.createElement => react element or object created by react=> root.render converts object into html elements
const heading = React.createElement("h1", { id: "head" }, "hello there");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("h1", {}, "hey there i am a h1 tag"),
//   React.createElement("h2", {}, "hey there i am a h2 tag"),
// ]);
// // root.render renders every thing  u a76re rendering inside the root defined by you and replace the current elements::
// root.render(parent);

// JSX - html like syntax:
const jsxhead = <h1>hey there i was here</h1>
root.render(jsxhead);