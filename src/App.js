import React, { useState } from "react";
import "./styles.css";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  }
];

const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  const [currentIndex, setCurrentIndex] = useState(initialTab);

  return {
    currentIndex: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

// 맵의 매개변수 두번째는 인덱스이다
// const array1 = [1, 4, 9, 16];
// const map1 = array1.map((x,i) => console.log("test",x*2,i));
// // "test" 2 0
// // "test" 8 1
// // "test" 18 2
// // "test" 32 3

const App = () => {
  const { currentIndex, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      <h1>Hello</h1>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}

      <div>{currentIndex.content}</div>
    </div>
  );
};

export default App;

// index는 0또는1이 되어야하고 모든 버튼은 온클릭(이벤트)를가진다.
// 누군가 클릭하면 우리는 index가 무엇이든지 상관없이 changeItem(index)을 실행할것이고
// changeItem의 index는 index안에 있는 값인0또는 1로 바꿔준다. 그건 setCurrentIndex의 item을 바꿔줄것이다.
// 이것은 State를 바꿔줄거다. 그래서 currentIndex의 currentIndex를 바꿔줄것이고 모든 것을 새로고침 하는것이다.
// 그럼 이제 클릭하는 곳으로 가게 될것이다
