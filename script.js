const heading = React.createElement("h1", { id: "head" }, "hello there");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const parent = React.createElement("div", {id:"parent"}, [
  React.createElement("h1", {}, "hey there i am a h1 tag"),
  React.createElement("h2", {}, "hey there i am a h2 tag"),
]);
// root.render renders every thing  u a76re rendering inside the root defined by you and replace the current elements::
root.render(parent);