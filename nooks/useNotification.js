import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
  // useEffect(() => {});
};

const App = () => {
  const triggerNotif = useNotification("i love everything", {
    body: "acutally this is lie :)"
  });
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={triggerNotif}>notiF Btn</button>
    </div>
  );
};

export default App;
