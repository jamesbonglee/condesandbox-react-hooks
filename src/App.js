import React, { useState, useEffect } from "react";
import "./styles.css";

const sayHello = () => console.log("hellow");

const App = () => {
  // useEffect(() => {
  //   sayHello();
  // });
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  useEffect(sayHello, []);
  // useEffect 는 componentDidMonut 와 componentWillUpdate 인데 업데이트 하게만듦
  //useEffect에서 2번째인자는 배열로 받아서 어떤걸 넣고 그게 (상태가)바뀐다면 1번째 인자를 실행시킴
  //빈배열이라면 누가 변화를 주던 상관없이 새로고침으로 한번 실행이외에는 실행되지않음(?)
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};

export default App;
