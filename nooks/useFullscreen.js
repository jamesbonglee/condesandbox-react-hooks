import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };

  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };

  return { element, triggerFull, exitFull };
};

const App = () => {
  const isFullS = (callback) => {
    console.log(callback ? "we Full" : "we Small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(isFullS);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div>
        <img
          ref={element}
          src="http://ext.fmkorea.com/files/attach/new2/20210328/486616/923108885/3485220546/99b983892094b5c6d2fc3736e15da7d1.jpg"
        />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
      <h1>Hello</h1>
    </div>
  );
};

export default App;
