기존 프로젝트에 타입스크립트를 도입하려면 </br>
그냥 대충 남들이 프로젝트에서 쓴다고 해서 따라쓰지말고 `이득을 따져보고 사용해야한다.` </br>

- 프로젝트 사이즈가 큰가
- 협업시 다른 사람이 짠 코드를 참조할 일이 많은가
- 장기적으로 유지보수에 도움이 되는가
- 나중에 팀원이 더 필요해도 인력수급이 쉽게 가능한가
- 팀원들 학습에 필요한 시간과 비용이 적게 드는가

## React 설치 명령어

```
npx create-react-app 프로젝트명 --template typescript
```

typescript 셋팅이 완료된 프로젝트 설치하는 방법 </br>
</br>

기존프로젝트에 타입스크립트만 더하고 싶으면</br>
기존 프로젝트 경로에서 터미널을 오픈한 후</br>

```
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

입력해주면 끝이다. 이제 `.js파일`을 `.ts파일`로 바꿔서 이용 가능하다. </br>
하지만 이렇게 하는 방법보단 그냥 새로 프로젝트 만드는것이 안전하다. </br>
</br>
그럼 프로젝트가 생성되는데 </br>
</br>

![](https://velog.velcdn.com/images/hosickk/post/4141e8b6-eec7-469c-8b21-b8c7c734ed6d/image.png)
일반 프로젝트와 다른 점은 컴포넌트 파일은 js가 아니라 tsx로 확장자를 사용해야된다는 점이다.ts랑 똑같은데 jsx 문법을 지원한다. </br>
코트 짜는 것은 일반 리액트와 큰 다른점이 없다. </br>
다만 함수, 컴포넌트, state, props 타입체크를 잘 해줘야 에러가 발생하지 않는다. </br>
그래서 리액트에선 TS 문법을 어디에 써야하는지 4개로 정리해보겠다. </br>
그냥 타입관련 버그가 생길 것 같은 곳에 타입지정을 하면 된다. </br>

## 1. 일반 변수, 함수 타입지정

그간 벨로그에 정리했던 내용들을 참고

## 2. JSX 타입지정

리액트에선 변수나 자료에 `<div></div>` 이런걸 담아서 쓸 수 있다. </br>
왜냐면 리액트에서 `<div></div>` 이렇게 쓰면 HTML이 아니라 JSX라고 부르는 자료가 된다. </br>
이런 자료를 타입지정하고 싶으면 JSX.Elemnet 라는 타입을 쓰면 된다. </br>

```ts
let 박스: JSX.Element = <div></div>;
let 버튼: JSX.Element = <button></button>;
```

## 3. function component 타입지정

```ts
function App() {
  return <div>안녕하세요</div>;
}
```

리액트의 컴포넌트는 위와 같이 생겼다 </br>
컴포넌트 타입지정은 함수니까 파라미터와 return 타입지정하면 된다. </br>
파라미터는 항상 props기 때문에 props가 어떻게 생겼는지 조사해서 타입지정하면 되고 </br>

```ts
type AppProps = {
  name: string;
};

function App(props: AppProps): JSX.Element {
  return <div>{message}</div>;
}
```

props 파라미터는 어떻게 생겼는지 조사해서 타입지정해주면 되고 </br>
컴포넌트는 return으로 JSX를 뱉으니 return 타입으로 JSX.Element 써주면 된다. </br>
근데 생략해도 자동으로 타입지정이 된다. </br>
