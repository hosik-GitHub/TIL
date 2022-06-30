# ⚡️ 타입스크립트 기본 타입 정리 (primitive types)

---

- 자바스크립트에서 온 타입을 `Primitive type`이라고 한다.
- 오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형.
  ➡ `오브젝트` 혹은 `레퍼런스`라고 불리는 이 형태는 실제 값을 저장하지 않는다. 실제 값에 대한 정보를 저장해놓은 것이다.
  ex)문자열 - string, 숫자 - number 등
- Primitive 형의 내장함수를 사용하는 것은 자바스크립트 처리 방식 때문이다.

  - 자바스크립트는 기본적으로 레퍼런스 타입이다. 그 중 Primitive Type만 값인데, 실제로는 마치 객체인 것처럼 동작한다.
    Primitive Type을 내장함수를 쓸 경우에 순간적으로 객체로 바꿔서 처리하고 다시 Primitive Type로 돌려놓는다 (메모리를 아끼기 위해서)

- (ES2015) 기준 6가지
  1.  boolean
  2.  number
  3.  string
  4.  symbol(ES2015)
  5.  null
  6.  undefined

```ts
let name = "kim";
name.toString();
```

### 🥣 literal

- 값 자체가 변하지 않는 값을 의미
- 상수와 다른 것은 상수는 가리키는 포인터가 고정이라는 것이고, 리터럴은 그 자체가 값이자 그릇이다.
- literal 값으로 Primitive Type의 서브 타입을 나타낼 수 있다.

```js
35; // number 리터럴
'kim' // string 리터럴
true // boolean 리터럴

//object 리터럴
{
	name: 'kim',
    age: 32
}
```

- 또 `래퍼객체(Wrapper Object)`로 만들 수 있다.
  (자바스크립트에서는 이 Primitive Type을 마치 래퍼객체로 `new` 해서 만들 수 있다.)

```js
new Boolean(false); // typeof new Boolean(false) : 'object'
new String("world"); // typeof new String('world') : 'object'
new Number(42); // typeof new Number(42) : 'object'
```

> 하지만 자바스크립트에서는 **이런식으로 래퍼 객체(Wrapper Object)를 만드는 것을 추천하지 않는다.**
> 그 이유는 몇몇 상황에서 혼동을 야기하기 때문이다.

```js
console.log(typeof 0); // 'number'
console.log(typeof new Number(0)); // "object"
```

위와 같이 래퍼객체를 new 키워드를 통해 직접 만들어 데이터를 할당한다면 이것은 명시적인 객체가 되어버린다.
**래퍼 객체는 원시값을 가볍게 유지하며 사용하기 위함**이기 때문에 **의도적으로 만들어 사용하는 것은
필요하지 않는 이상 추천되지 않는다.**
또한, 트루시한 값과 펄시한값을 구분하는데에 있어 원치 않는 결과를 도출한다.

```js
if(0) {  // 0은 펄시한 값이라 false로 조건을 판단
  ...
}
let numObj = new Number(0);
if(numObj) {  // 오브젝트는 논리 평가시 항상 참을 반환한다.
  ...
}
```

위와 같은 여러가지 상황 때문에 `new` 를 이용한 객체를 권장하지 않는다.
하지만 `new` 를 사용하지 않고 그냥 `Number(str)` 처럼 묶어주는 것은 안의 인자를 숫자형 원시타입으로
만들어 주기만 하기 때문에 아주 유용하다.

---

## boolean

✏️ `true 또는 false를 나타내는 자료형`

- boolean은 Primitive Type, Boolean은 Wrapper Object의 생성자, 일종의 Class

```js
let isDone: boolean = false;
// Primitive Type하기  => boolean 소문자
isDone = true;
console.log(typeof isDone); // boolean
```

---

## Number

✏️ `Javascript와 같이 Typescript의 모든 숫자는 부동 소수점 값`

- Typescript는 16진수 및 10진수 리터럴 외에도, ECMAScript 2015에 도입된 2진수 및 8진수를 지원

```js
let decimal: number = 6; // 10진수 사용가능
let hex: number = 0xf00d; // 16진수 사용가능
let binary: number = 0b1010; // 2진수 사용가능
let octal: number = 0o744; // 8진수 사용가능
let notNumber: number = NaN; // NaN을 할당해도 전혀 문제 없다, NaN은 숫자의 한 형태이기 때문이다.
let underscoreNum: number = 1_000_000; // _를 이용해서도 사용가능하다, 1_000_000 = 1,000,000 = 백만
```

---

### 참고 자료

- https://laikhan-workshop.tistory.com/41
- https://velog.io/@wldns12378/26.-%EC%9B%90%EC%8B%9C%EA%B0%92%EC%9D%98-%EB%A9%94%EC%84%9C%EB%93%9C
- https://developer-talk.tistory.com/69
