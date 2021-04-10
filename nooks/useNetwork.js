import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const useNetwork = (onchange) => {
  const [status, setStatus] = useState(navigator.onLine);

  const handleChange = () => {
    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

const App = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "we just went online" : "we are offline");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div className="App">
      <h1>{onLine ? "Online" : "OFFline"}</h1>
    </div>
  );
};

export default App;
