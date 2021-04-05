import React, { useState, useEffect } from "react";
import "./styles.css";

const useTitle = (initialTilte) => {
  const [title, setTitle] = useState(initialTilte);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };

  useEffect(updateTitle, [title]);
  return setTitle;
};
//이전에도 다뤗지만 이펙트 코드 설명하자면 [title]이 변경되면 앞의함수를 실행한다.

const App = () => {
  const tilteUpdator = useTitle("loading...");
  setTimeout(() => tilteUpdator("home"), 3000);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};

export default App;
