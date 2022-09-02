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

```ts
<Container a={<h4>안녕</h4>} />;

function Container(props) {
  return <div>{props.a}</div>;
}
```

참고로 props로 JSX를 입력할 수 있게 코드를 짜는 경우도 있다. </br>
그럴 땐 JSX.intrinsicElements 라는 이름의 타입을 사용 가능하다. </br>
`<div> <a> <h4>` 같은 기본 태그들을 표현해주는 타입인데 </br>
위 컴포넌트에 타입을 넣고 싶으면 </br>

```ts
type ContainerProps = {
  a: JSX.IntrinsicElements["h4"];
};

function Container(props: ContainerProps) {
  return <div>{props.a}</div>;
}
```

이런 식으로 넣을 수도 있다 </br>
이제 a라는 props자리에 `<h4>`만 넣을 수 있게 타입쉴드를 씌워놓은 것이다. </br>

## 4. state 문법 사용시 타입지정

state 만들 땐 그냥 자동으로 타입이 할당되어서 걱정할 필요는 없다. </br>
state 타입이 나중에 변화할 수 있다? 그런 경우는 흔치 않지만 그러면 미리 지정해라 </br>

```ts
const [user, setUser] = useState<string | null>("kim");
```

그냥 <> 열고 타입 넣으면 된다. </br>
Generic 문법을 이용해서 타입을 useState함수에 집어넣는 식으로 설정하면 된다. </br>

## 5. type assertion 문법 사용할 때

```ts
let code: any = 123;
let employeeCode = <number>code; // 안된다.
```

assertion 하고 싶으면 as 또는 <> 쓰면 되는데 </br>
리액트에서 컴포넌트로 오해할 수 있어서 꺾쇠 괄호는 리액트에서 쓰지 않는다. </br>
그래서 as 키워드만 사용한다. </br>
하지만 as 키워드는 타입스크립트 보완해제기 때문에 타입이 100% 확실할 때만 사용하도록 하자. </br>

### 결론

결론은 타입스크립트 쓴다고 뭔가 리액트 개발방식이 달라지는게 아니라 </br>

함수 변수 정의부분 타입지정을 할 수 있다는 것만 달라진다. </br>

"props엔 무조건 { name : string }만 들어올 수 있다" </br>

이런 문법을 작성하는게 끝이고 그냥 에디터 부가기능 수준일 뿐이다. </br>

여러분이 변수 함수 class 타입지정 하는 법을 잘 배우셨으면 누구나 응용가능하다. </br>
