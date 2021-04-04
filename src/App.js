import React, { useState } from "react";
import "./styles.css";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    console.log(event.target);
  };
  return { value, onChange };
};

const App = () => {
  const name = useInput("Mr.");
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="name" {...name} />
      {/* <input placeholder="name" value={name.value} onChange={name.onChange} 코드와 동일 /> */}
    </div>
  );
};

export default App;
