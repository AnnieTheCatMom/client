import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const [x, setX] = React.useState(null);

  React.useEffect(() => {
    console.log("Trying to fetch data..");
    fetch("/cat")
      .then((res) => res.json())
      .then((x) => {
        setX(x.res);
      });
    console.log(x);
  });

  return (
    <div className="App">
      <p> {!x ? "Loading..." : x} </p>
    </div>
  );
}

export default App;
