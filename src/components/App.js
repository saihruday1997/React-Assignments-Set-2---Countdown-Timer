import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  // let [timecount, setTimecount] = useState(0);
  let [currtime, setCurrtime] = useState(0);

  // let handleChange = (e) => {
  //   let text = e.target.value;
  //   if (!/^\d+$/.test(text)) {
  //     return;
  //   }

  //   setTimecount(text);
  // };

  let keydownFun = (e) => {
    if (e.keyCode !== 13) {
      return;
    }

    let text = e.target.value;

    let input = Math.floor(text);
    if (input < 0) {
      input = 0;
    }

    if (!/^\d+$/.test(text)) {
      input = 0;
    }

    setCurrtime(input);
  };

  useEffect(() => {
    let id = null;
    if (currtime > 0) {
      id = setInterval(() => {
        setCurrtime(currtime - 1);
      }, 1000);
    }

    return () => clearInterval(id);
  });

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input
            id="timeCount"
            type="text"
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
