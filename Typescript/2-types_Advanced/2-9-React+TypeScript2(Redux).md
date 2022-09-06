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

   ## (신규방식 redux) state와 reducer 만들 때 타입지정 필요

신식 redux를 사용하고 싶으면 redux, react-redux에 이어서

```ts
npm install @reduxjs/toolkiy
```

이런 라이브러리를 추가로 설치해주면 된다. </br>
그럼 이제 조금 더 깔끔하게 코드를 짤 수 있다. </br>

위와 같은 예제로 `<button> 버튼을 누르면 state가 +1, -1 되는 예제를 만들어보자`

```ts
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { Provider } form 'react-redux';

const 초기값 = { count: 0, user : 'kim' };

const counterSlice = createSlice({
	name: 'counter',
  	initialState: 초기값,
  	reducers: {
    	increment (state) {
        	state.count += 1
        },
      	decrement (state) {
      		state.count -= 1
      },
      	incrementByAmount (state, aciton: any) {
      		state.count += action.payload
      }
    }
})

let store = configureStore({
	reducer: {
    	counter1 : counterSlice.reducer
    }
})

// state 타입을 export 해두는건데 나중에 쓸 데가 있다.
export type RootState = ReturnType<typeof store.getState>

// 수정방법 만든거 export
export let { increment, decrement, incrementByAmount } = counterSlice.actions
```

그리고 하단엔 `<Provider store ={store}>` 코드를 추가해주면 끝이단다. </br>

**적은 코드를 설명하자면**

1. createSlice()로 slice 라는걸 만들어준다. slice는 state와 reducer를 합쳐놓은 새로운 뭉텅이라고 보면된다.
2. slice 안에는 slice 이름, state초기값, reducer가 정확한 이름으로 들어가야한다. 마음대로 작명이 불가하다
3. state는 그냥 마음대로 만들면 되고 reducer는 함수 형태로 만들어주면 된다.
   첫 파라미터는 state, 둘째 actions가 자동으로 부여된다.
4. 다 만든 것들은 configureStore 안에 등록하면 된다.
5. 내가 만들어둔 reducer를 쓰고 싶으면 reducer 안의 함수명을 export 해주면된다.
6. 나머지는 셋팅 문법

** 타입지정은**

- state 초기값 타입지정
- reducer 안의 action 파라미터의 타입지정
- 나머지는 타입지정이 자동으로 된다.
  </br>

action 타입 지정 방법은 따로 있는데

```ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

(상단 생략)
  incrementByAmount (state, action: PayloadAction<number>){
      state.value += action.payload
  },
```

이렇게 타입지정을 하라고 권장한다. </br>
나중에 dispatch할 대 보내는 데이터가 있으면 그걸 payload 라고 부르는데 </br>
그 자료의 타입을 <> 안에 집어넣어서 타입지정하라는 이야기이다. </br>
문자를 payload로 보낼거면 string 집어넣고 그런 식이다. </br>

## (신규방식 redux) state를 꺼낼때

```ts
import { userDispatch, useSelector } from "react-redux";
import { RootState, increment } from "./index";

function App() {
  const 꺼내온거 = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {꺼내온거.counter1.count}
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        버튼
      </button>
    </div>
  );
}
```

1. useSelector 함수를 쓰면 state를 쉽게 꺼낼 수 있다.
   쓰는 법은 안에 콜백함수 ()=>{} 하나를 집어넣으면 되는데 그 함수의 첫 파라미터는 항상 state가 된다.
2. useDispatch 함수를 쓰면 쉽게 수정요청을 날릴 수 있다.

타입지정은 state와 dispatch에 해주면된다. </br>
**(1) useSelector() 안의 파라미터에 타입 지정** </br>
state가 어떻게 생겼는지 파악한 다음 타입을 알아서 지정해주거나 아니면 </br>
타입을 index.ts 이런 리듀서 만든 곳에서 미리 RootState라는 타입을 export 해두면 </br>
저렇게 import 해서 쉽게 타입지정이 가능하다. </br>
</br>

**(2) useDispatch() 사용할 때 타입지정이 가능한데** 그냥 예전 방식처럼 하던가 </br>
아니면 공식 문서에서는 </br>
index.ts에서 export type AppDispatch = typeof store.dispatch 해두고 </br>
App.tsx에서 import 해와서 `useDispatch<AppDispatch>()` 이렇게 타입을 지정하면 된다.
