import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const useConfirm = (message = "", callback, rejection) => {
  if (typeof callback !== "function") {
    return;
  }
  const confrimAction = () => {
    // window.confirm 이 alret창과 동일한것으로 보이고
    // 버튼클릭으로 창이떳을때, 확인을하면 true로 받으니간
    // 조건문에 충족하게되어 콜백을 실행하게 된다
    if (window.confirm(message)) {
      callback();
    } else {
      rejection();
    }
  };
  return confrimAction;
};

const App = () => {
  const deleteWorld = () => console.log("deleting");
  const abort = () => console.log("abort");
  const confirmDelete = useConfirm("are u sure?", deleteWorld, abort);

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={confirmDelete}>delete the world</button>
    </div>
  );
};

export default App;
