import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  // let [timecount, setTimecount] = useState(0);
  let [currtime, setCurrtime] = useState(0);

  let keydownFun = (e) => {
    if (e.keyCode !== 13) {
      return;
    }

    let text = e.target.value;

    let input = Math.floor(text);
    if (input < 0) {
      input = 0;
    }

    setCurrtime(input);
  };

  useEffect(() => {
    setTimeout(() => {
      if (currtime > 0) {
        setCurrtime(currtime - 1);
      }
    }, 1000);
  });

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input
            id="timeCount"
            type="number"
            onKeyDown={(event) => keydownFun(event)}
          />{" "}
          sec.
        </h1>
      </div>
      <div id="current-time">{currtime}</div>
    </div>
  );
};

export default App;
