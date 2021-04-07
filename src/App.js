import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const usePreventLeave = () => {
  const lestener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };

  const enablePrevent = () => {
    window.addEventListener("beforeunload", lestener);
  };

  const disablePrevent = () => {
    window.removeEventListener("beforeunload", lestener);
  };
  return { enablePrevent, disablePrevent };
};

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={enablePrevent}>protect</button>
      <button onClick={disablePrevent}>unprotect</button>
    </div>
  );
};

export default App;

// 다음은 usePreventLeave입니다. 이는 어떤 문서작업이나 작업을 할시 sava되지 않았을때 브라우저를 닫으려 할때

// 이 부분을 먼저 볼텐데 enablePrevent은 window.addEventListener("beforeunload", function);
// 이런 코드가 있는데 브라우저 닫을 시 한번 더 그 의사를 재차 묻고 싶을때
// 사용하는 이벤트가 "beforeunload" 입니다. 따라서 Protect 버튼 클릭이
// beforeunload 이벤트가 활성화 되어서 브라우저 닫을때
// confirm 창으로 닫을 껀지 한번 더 물어보는 것이고 unProtect는 이를 비활성화 시키는
// 버튼입니다. 그리고 listner 안의 있는 코드는 event.preventDefault()는
// 이벤트를 중지시키는 코드입니다. 코드를 저렇게 사용한 이유는 HTML 명세서에
// 따르면 작성자는 Event.returnValue를 사용하는 대신 Event.preventDefault()
// 메서드를 사용해야 합니다. 그러나, 일부 브라우저에서는 지원되지 않는다고 명시되어
// 있기 때문입니다.
