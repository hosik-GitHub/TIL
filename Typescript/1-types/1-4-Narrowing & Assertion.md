# ⚡️ Narrowing

---

이전에 만들었던 함수에 숫자 또는 문자를 집어넣으면 + 1 해주는 함수이다.

```ts
function 내함수(x: string | number) {
  return x + 1; // 에러남
}
```

근데 이런 에러를 나타낸다.
`Operator '+' cannot be applied to types 'string | number' and 'number'`
string | number 같은 union type에는 일반적으로 조작을 못하게 막아둬서 생기는 에러이다.</br>

이런 메세지를 보면 1. 타입을 하나로 Narrowing 해주거나 2. Assert 해주거나 둘 중 하나 해주면 된다.

---

## Type Narrowing

✏️ `if문 등으로 타입을 하나로 정해주는 것을 뜻한다.`

```ts
function 내함수(x: string | number) {
  if (typeof x === "number") {
    return x + 1;
  } else if (typeof x === "string") {
    return x + 1;
  } else {
    return 0;
  }
}
```

if문과 typeof 키워드로 현재 파라미터의 타입을 검사해서

> "이게 'number' 타입일 경우 이렇게 해주세요~"
> "이게 'string' 타입일 경우 이렇게 해주세요~"

이렇게 코드를 짜야 정상적으로 사용이 가능하다.
타입이 확실하지 않을 때 생기는 부작용을 막기 위한 장치라고 보면 된다.
가끔 이것을 `"defensive 하게 코딩한다"`라고 부르기도 한다.

근데 또 함수 안에서 if문을 쓸 때는 마지막에 `else{}`가 없으면 에러가 난다.</br>
return 하지 않는 조건문이 있다면 나중에 버그가 생길 수 있어서 에러를 내주는 것인데</br>
`"nolmplicitReturns":false,`

이것이 귀찮다면 tsconfig.js 파일에 이걸 추가하면된다. 근데 굳이 수정하는 것보다는 엄격하게 사용하려고 하는 것이 좋다.

- 꼭 typeof를 쓸 필요는 없고 타입을 하나로 확정 지을 수 있는 코드라면 어떤 것도 Narrowing 역할을 할 수 있다.
- in, instanceof 키워드도 사용가능하다.

---

## Type Assertion

✏️ ` 타입을 간편하게 assert 할 수도 있다.`

- "이 변수의 타입을 number로 생각해주세요" 이런 뜻으로 코드를 짜면
  타입스크립트 컴파일러가 수용해준다.
- **변수명 as string** 이런 식으로 as라는 키워드를 사용하면 된다.

```ts
function 내함수(x: number | string) {
  return (x as number) + 1;
}
console.log(내함수(123));
```

변수명 as number라고 쓰면
**"나는 이 변수를 number라고 하겠다"**라는 뜻이며 실제로 그렇게 타입을 변경해준다.</br>
❗️ 내가 "함수에 무조건 숫자가 들어올 것이다"라는 사실을 알고 있어야 안전하게 쓸 쑤 있는 문법이다.

### as 키워드 사용시 특징

1. as 키워드는 union type 같은 복잡한 타입을 하나의 정확한 타입으로 줄이는 역할을 수행한다.(number 타입을 as string 이렇게 바꾸려고 하면 에러가 발생될 것이다.)
2. 타입실드 임시 해제용이다. 실제 코드 실행결과는 as 있을 때나 없을 때나 거의 동일하다.

**Q. 근데 내함수('123') 이렇게 숫자말고 문자를 입력하면 어떻게 될까?**</br>
A. as number라고 썼긴 했지만 number 타입처럼 +1 해주진 않는다. 콘솔창에 결과를 출력해보면 '1231' 이렇게 출력이 될 것이다.</br>
❗️as는 그냥 주장만 하는거지 실제로 타입을 바꿔주는 것은 아니기 때문이다.</br>

as를 쓰면 간편하지만 정확히 코드를 짜려면 narrowing을 쓰자.</br>
as 키워드는 마음대로 타입을 개발자 마음대로 주장하는 역할이라 때문에 엄격한 타입체크기능을 잠깐 안쓰겠다는 뜻과 동일하다.</br>
그래서 as 문법은 이럴 때 사용하도록 하자!</br>

1. 타입에러가 왜 나는지 정말 모르겠는 상황에 임시로 에러해결용으로 사용하거나
2. 내가 어떤 타입이 들어올지 정말 확실하게 알고 있는데 컴파일러 에러가 방해할 때

아무때나 as 키워드를 붙이지 말자!</br>
대부분의 상황에선 as보다 훨씬 엄격하고 좋은 type narrowing으로 해결할 수 있다.</br>

> 옛날 assertion 문법은
> as 키워드 대신 <> 괄호를 이용했다

```ts
let 이름: number = 123;
(이름 as string) + 1; // 현재문법
<string>이름 + 1; // 옛날 문법
```

위에 있는 두 줄의 코드는 똑같은 의미이다.</br>
다만 html과 js가 혼연일체된 리액트에서 사용시 html태그와 헷갈릴 수 있기 때문에</br>
지금은 그냥 as 키워드를 주로 사용한다.</br>

> as는 이럴 때 유용하게 쓰기도 한다.</br>
> 가끔 타입을 강제로 부여하는 기계를 하나 만들어쓰고 싶은 때가 있다.</br>
> 그럴 때 함수에 데이터를 넣으면 as 타입명을 붙여서 return 하는 함수를 만들어서 사용하면 된다.</br>

```ts
type Person = {
  name: string;
};
function 변환기<T>(data: string): T {
  return JSON.parse(data) as T;
}
const jake = 변환기<Person>('{"name":"kim"}');
```

변환기라는 함수를 만들었는데</br>
이 함수에 자료를 입력하면 as 키워드로 타입을 하나 붙여준다.
