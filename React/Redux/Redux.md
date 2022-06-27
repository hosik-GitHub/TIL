# ⚡️ Redux(리덕스)란?

---

> <span style="color:CornflowerBlue">Redux(리덕스)</span>란 JavaScript(자바스트립트) <span style="color:DarkOrange">상태관리 라이브러리이다.</span>

> <span style="color:CornflowerBlue">Redux(리덕스)</span>의 본질은 <span style="color:DarkOrange">Node.js 모듈이다.</span>

<span></span>

## ❗️Redux의 기본 개념 : 3가지 원칙

---

### 1. Single source of truth

- 모든 상태는 하나의 저상소(store)안에 하나의 객체 트리 구조로 저장된다.
- 하나의 어플리케이션 안에는 하나의 스토어가 있다.
- 스토어를 여러개 생성시 상태를 관리해서는 안된다. 그 대신 리듀소를 여러개 만들어 관리 가능
- 어플리케이션의 모든 상태는 하나의 저장소 안에서 하나의 객체 트리 구조로 저장

### 2. State is read-only

- 리액트에서는 setState 메소드를 활용해야만 상태 변경이 가능하다.
- 리덕스에서도 액션이라는 객체를 통해서만 상태를 변경할 수 있다.

### 3. Changes are made with pure

- 변경은 순수함수로만 가능하다.
  - 순수함수: 반환(reture)값이 전달 인자(argument) 값에만 의존하는 함수.
- 리듀서와 연관되는 개념이다.
- Store(스토어) - Action(액션) - Reducer(리듀서)
  ![](https://velog.velcdn.com/images/hosickk/post/56f28065-08e8-418d-8bdc-ed00e7fd9f97/image.gif)

#### 🧺 **Store (스토어)**

> Store (스토어)는 상태가 관리되는 오직 하나의 공간(저장소)이다.

- 컴포넌트와는 별개로 스토어라는 공간이 있어서 그 스토어 안에 앱에서 필요한 상태를 담는다.
- 컴포넌트에서 상태 정보가 필요할 때 스토어에 접근한다.

#### 🎬 **Action (액션)**

> Action(액션)은 상태 변화를 일으킬 때 참조하는 객체(애플리케이션에서 저장소로 보내는 데이터 묶음)

**자바스크립트 객체**

- 액션은 반드시 어떤 형태의 액션이 실행될지 나타내는 type 속성을 가져야한다.

```js
const ADD_TODO = 'ADD_TODO'
{
  type: ADD_TODO, // 반드시 type이 존재해야한다. 이 외는 자유
  text: 'Bulid my first Redux app'
}

// Action(액션) 생성자 => 액션을 만드는 함수(액션과 액션 생성자는 다르다)
function addTodo(text) {
  return {
   type: ADD_TODO,
   text: '리덕스 배우기'
  }
}
```

#### **Reducer (리듀서)**

- Action(액션)을 Store(스토어)에 바로 전달하는 것이 아니다.
- Action(액션)을 Reducer(리듀서)에 전달해야한다.
- Reducer(리듀서)가 주문을 보고 Store(스토어)의 상태를 업데이트하는 것이다.
- Action(액션)을 Reducer(리듀서)에 전달하기 위해서는 `dispatch()` 메소드를 사용해야한다.

> <span style="color:FireBrick">Action(액션) 객체</span>가 <span style="color:FireBrick">dispatch()</span> 메소드에 전달된다.

> <span style="color:FireBrick">dispatch(액션)</span>를 통해 <span style="color:FireBrick">Reducer</span>를 호출한다.

> <span style="color:FireBrick">Reducer</span>는 새로운 <span style="color:FireBrick">Store</span>를 생성한다.

#### **Dispatch**

✏️ Store의 내장함수 중 하나이며, 액션을 발생시키는 것(액션을 파라미터로 전달 => dispatch(Action))

- 액션 객체를 넘겨 상태를 업데이트하는 유일한 방법이다.
- 함수에서 액션을 파라미터로 전달하는데 그것을 디스패치 액션이라한다.

#### **Subscribe**

✏️ Store의

- subscribe 함수에 특정 함수를 전달하면, 액션이 디스패치 되었을때 마다 전달해준 함수가 호출된다.
  - 리액트에서는 `connect` 함수 또는 `useSelector` Hook 을 사용한다.
