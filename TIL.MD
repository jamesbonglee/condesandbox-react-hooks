```c
const App = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={incrementItem}>increment</button>
      <button onClick={decrementItem}>decrement</button>
    </div>
  );
};
```

### 훅사용한 함수형 과 스테이트사용하는 클래스형 차이

```c
class ugly extends React.Component {
  state = {
    item: 1
  };
  render() {
    const { item } = this.state;
    return (
      <div className="ugly">
        <h1>Hello {item}</h1>
        <h2>ugly happen!</h2>
        <button onClick={this.incrementItem}>increment</button>
        <button onClick={this.decrementItem}>decrement</button>
      </div>
    );
  }
  incrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item + 1
      };
    });
  };
  decrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item - 1
      };
    });
  };
}
```


#### 맵의 매개변수 두번째는 인덱스이다
```c
 const array1 = [1, 4, 9, 16];
 const map1 = array1.map((x,i) => console.log("test",x*2,i));

// "test" 2 0
// "test" 8 1
// "test" 18 2
// "test" 32 3
```


useTabs의 내용


 index는 0또는1이 되어야하고 모든 버튼은 온클릭(이벤트)를가진다. 누군가 클릭하면 우리는 index가 무엇이든지 상관없이 changeItem(index)을 실행할것이고, changeItem의 index는 index안에 있는 값인0또는 1로 바꿔준다. 그건 setCurrentIndex의 item을 바꿔줄것이다. 이것은 State를 바꿔줄거다. 그래서 currentIndex의 currentIndex를 바꿔줄것이고 모든 것을 새로고침 하는것이다. 그럼 이제 클릭하는 곳으로 가게 될것이다


//https://velog.io/@tiahwang/%EA%B0%95%EC%9D%98%EB%85%B8%ED%8A%B8-Hooks-useState-jwcnmr99




https://ko.reactjs.org/docs/hooks-overview.html

notification부분은MDN으로 API문서 보기가능