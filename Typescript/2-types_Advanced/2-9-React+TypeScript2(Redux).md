# ⚡️ redux를 쓰는 이유

1. state를 한 곳에서 관리할 수 있어서 컴포넌트들이 props없이 state 다루기 쉽다.
2. 수정방법을 미리 reducer라는 함수로 정의해놔서 state 수정시 발생하는 버그를 줄일 수 있어서 사용한다.

- redux 공식 toolkit 라이브러리를 써서 이쁘게 코드짜는 신규방식 redux
- 예전처럼 ifans switch문 쓰는 전통방식 redux

둘 다 타입지정 어떻게 하는지 알아보자. </br>

## (전통방식 redux) state와 reducer 만들 때 타입지정 필요

redux를 사용하고 싶으면 `npm install redux react-redux` 이 명령어로 설치하면된다. </br>
redux는 걱정할 필요없이 type 정의가 미리 잘되어 있어서 그냥 설치하면 된다. </br>
</br>

예제로 `<button> 버튼을 누르면 state가 +1, -1 되는 예제를 만들어보자` </br>
그러려면 state가 하나 필요하고, +와 -하는 방법을 정의해둔 reducer도 필요하다 </br>
보기 쉽게 index.ts에 필요한 모든 코드를 적은 것을 한 번 보자. </br>

```ts
import { Provider } from 'react-redux';
import { createStore } from 'redux';

interface Counter {
	count : number
}

const 초기값 :Counter = { count: 0 };

function reducer(state = 초기값, action :any) {
	if(action.type === '증가') {
    	return { count : state.count + 1 }
    } else if (action.type === '감소') {
    	return { count : state.count - 1 }
    } else {
    	return initialState
    }
}

const store = createStore(reducer);

// store의 타입 미리 export 해두기
export type RootState = ReturnType<typeof store.getState>

ReactDOM.render(
  <React.StrictMode>
  	<Provider store={store}>
		<App />
	</Provider>
</React.StrictMode>
document.getElementById('root')
)

```

적은 코드를 설명 하자면

1. 지금 initialState = { count: 0 } 이렇게 생긴 state 초기값을 만들었고
2. function reducer를 만들어서 state가 변경되는 방법을 미리 정의해뒀다.
   변경 방법은 증가, 감소 두 개 이다
3. createStore 해당 문법은 기본 셋팅 문법이다.
   </br>
   reducx 쓸 때는 똑같이 state 초기값과 reducer 함수의 타입지정을 잘하면 된다.</br>
