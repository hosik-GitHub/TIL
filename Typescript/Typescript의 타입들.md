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

## String

✏️ `텍스트 형식을 참조하기 위해 "String"형식을 사용`

- Javascript와 마찬가지로, 문자열 데이터를 감싸기위해 `"` 큰따옴표나, `'` 작은따옴표를 사용한다.

```ts
let myName: string = "hosik";
myName = "kim";
```

### ES6부터는 Template String 기능이 생겼다

- 전에는 `+` 기호를 사용하여 문자열을 더해주었다.
- backkick(=backquote) ` `` `기호로 둘러쌓여있다.
- 포함된 표현식은 `${expr}` 와 같은 형태로 표현되어진다.

```ts
let fullName: string = "hosik";
let age: number = 20;
let sentence: string = `Hello My Name is ${fullNmae}.
	I'll be ${age + 1} years old in 7 months`;

//console.log(sentence)
// Hello My Name is hosik.
// I'll be 33 years old in 7 months
```

---

## Symbol

✏️ `Symbol은 고유한 데이터로, 여러개의 Symbol에 동일한 description을 넣어도 각 다른 존재로 인식된다.`

- ECMAScript 2015에 새로 추가되었다.
- new Symbol로 사용 불가능하다.
- Symbol을 함수로 사용해서 symbol 타입을 만들어 낼 수 있다.

> 자바스크립트로 더 알아보자면

```ts
const a = Symbol("id");
const b = Symbol("id");
console.log(a == b); // false
```

같은 문자열을 넣었는데 결과값이 fasle로 나오는 이유는?
➡ Symbol은 고유한 존재이기 때문에 문자열이 같아도 영향을 미치지 않기 때문이다.

Typescript로 알아보면 그전에 `tsconfig.json`에서 설정해주어야한다.

```json
"lib" : [
	"ES2015",
  	"DOM"
]
```

Typescript로 작성하면 아래의 코드와 같다.

```ts
console.log(Symbol("foo") === Symbol("foo")); // false
```

### Symbol은 어디서 쓸까?

- Primitive Type의 값을 담아서 사용한다.
- Symbol로 생성된 값은 고유하고 수정불가능한 값으로 만들어준다.
  ➡ ❗️**그래서 주로 접근을 제어하는데 쓰는 경우가 많다**

```ts
const sym = Symbol();

const obj = {
  [name]: "val",
};

console.log(obj[name]); // "val"
// 접근을 막거나, 접근이 필요한 경우에만 사용
```

> 만약 `obj객체`에 `name` 속성 외에 다른 속성이 무수히 있다고 가정하고<br>
> 협업을 하다가 한 팀원이 `obj객체`에 `name` 속성이 있는지 모르고
> 또 `name` 속성을 추가해서 덮어씌어버린다면 코드가 오류 나버린다!<br>
> 이 속성 값은 건들지 않게 하고 싶은 경우 `Symbol`을 사용한다.
> 같은 속성 이름으로 값을 추가하더라도 `Symbol`은 다른 존재로 인식 하기 때문에 충돌이 없기 때문이다.<br> > `string` 값으로 속성을 추가 하면 바로 덮어 씌어버리기 때문에, `Symbol`을 사용해야한다.<br>
> 이것이 `string` 과 `symbol`의 차이

➡**즉, 다른 사람과 협업할 때, 중요한 속성 값을 보호하기 위함이다.**

---

## Null & Undefined

✏️ `값이 없다는 의미`

### Null과 Undefined의 차이점은?

❗️**null은 Object자료형을 가지고 있고, undefined는 자료형이 없다.**

> `null` ➡ 변수를 선언하고 빈 값을 할당한 상태(빈 객체)
> `undefined` ➡ 변수를 선언하고 값을 할당하지 않은 상태<br>
> 즉, `undefined`는 자료형이 없는 상태이므로
> `typeof`를 통해 자료형을 확인해보면 `null`은`object`로,
> `undefined`는 `undefined`로 출력되는 것을 확인할 수 있다.

- Typescript에서 undefined와 null은 실제로 각각 undefined와 null이라는 타입을 가진다.
- voide와 마찬가지고 그 자체로 그다지 유용하지는 않다.
- 타입과 값 둘 다 소문자만 존재한다.

```ts
// 이 변수들에 할당할 수 있는 것들은 거의 없다.

let u: undefined = undefiend;
let n: null = null;
```

하지만 `tsconfig`파일 설정을 한다면 달라진다.
**즉, null 과 undefined를 할당할 수 있다는 의미**

null 과 undefined는 다른 모든 타입에 서브타입으로 존재한다.
만약 number에 number형이 아니라 null을 넣더라도, 사용할 수 있다는 의미이다.

**null과 undefined를 할당할 수 있게 하려면, `union type`을 사용해야한다.**

하지만 `컴파일 옵션` 즉, `ts파일을 ➡ js파일로 변경하는 옵션 `에서 `strictNullChecks`옵션을 사용하면서,
컴파일을 한다면 그 때는 `null`과 `undefined`는 모든 하위 탑에 존재하지 않게 된다.

> \_\_+) 즉, 컴파일 옵션에서 `strictNullChecks`를 사용하면, null과 undefined는 void나 자기 자신에게만 할당할 수 있다.
> ❗️void에 유일하게 undefined를 할당할 수 있다. null은 안된다.

```ts
let myName: string = null;
// 오류가 발생한다.
```

오류를 없애기 위해선 `tsconfig.json`에서 `"strict": "true"`를 주석해주어야한다.
➡ 하지만 위 방법은 좋은 방법은 아니다.

**union type을 이용해야한다.**
➡ `|` 이렇게 작성하는 타입이다.
ex)`let union: string | null | undefined = 'hosik';`
➡ 합집합과 같은 의미이다.

```ts
// let u : undefined = null; // (X)

let v: void = undefined; // (O)
// void는 타입으로만 존재하기 때문에
// let v: void = void; 로 넣을 수 없다.
// undefined는 타입이기도 하지만 값이기 때문에 넣을 수 있다.
// null은 안된다.

let union: string | null | undefined = "hosik";
```

> 여기까지가 `Primitive Types`는 끝이다.

---

## Object

✏️`객체: 이름(name)과 값(value)으로 구성된 프로퍼티(property)의 정렬되지 않은 집합`

- `primitive Type`과 다르게 직접 값을 가지고 있지 않고, 그 값을 가리키는 정보를 가지고 있는 성질을 가지고 있다.

```ts
// Created by object literal
const person1 = { name: "hosik", age: 32 };

// person1 is not "object" type
// 타입스크립트에선 person1은 Object 타입이 아니다.
// person1 is "{name: 'hosik', age: 32}" type
// person1은 "{name: 'hosik', age: 32}" 이러한 타입으로 나온다.

// Created by object.create
// Object: 소문자가 아닌 대문자 오브젝트
// Object: 전역객체, 내장전역객체 - runtime에 제공되는 미리 준비된 것
// 여기서 Object는 primitive Type이 아닌 것
// 그래서 인자로 들어오는 타입은 오브젝트 or null인 합집합으로 이루어져 있다.
const person2 = Object.create({ name: "hosik", age: 32 });
```

#### Object.create(null | Object)

> `primitive Type`을 제외하고 올 수 있는 모든 것을 `Ojbect`라고 한다.
> `primitive Type`: number, string, boolean, bigint, symbol, null or undefined
> 예를 들어 `{}`객체 형태 또는 `[]`배열 형태가 있다.

---

## Array

✏️ `같은 타입의 요소들을 모아놓은 자료형`

- ❗️배열 안에 있는 요소, 요소들은 같은 타입이다.
- 원래 자바스크립트에서 array는 객체이다.
- 사용방법
  - Array<타입>
  - 타입[]

```ts
let list: number[] = [1, 2, 3]; // 이 방식이 더 많이 사용된다.
let list: Array<number> = [1, 2, 3];
// Array<number>는 js나 ts에서 충돌 날 위험이 있기 때문이다.

let list: (number | string)[] = [1, 2, 3, "4"];
// union으로 위에처럼 가능하다.
// 하지만 ["Mark", 39]의 자료처럼 첫번째는 String, 두번째는 Number의 경우에는
// Array가 아닌 Tuple을 사용한다.
```

---

## Tuple

✏️ `배열과 비슷하지만, 자료형에 대한 순서가 있을 때 사용되는 자료형`

> `["Mark", 39]`의 자료처럼 첫번째는 `String`, 두번째는 `Number`의 경우에는 `Array`가 아닌 `Tuple`을 사용한다.

```ts
let x: [string, number];

x = ["hosik", 32]; // 순서와 타입, 길이 모두 일치해야한다.
// x = [32, "hosik"] // Error => 순서가 다르기 때문에

// x[2]; // Error => 2번째 인덱스에는 아무것(undefined)도 없기 때문에

const person: [string, number] = ["hosik", 32];

const [] = person; // destructuring (분해할당)
// person에 있는 요소를 가지고 나와서 [] 변수 안에 넣는다.
// 순서가 중요하다 => [first, second]
const [first, second] = person;
```

---

## Any

✏️ `어떤 것이나 된다는 의미를 가진 타입`

- 정말 어떤 것이든 들어올 수 있는 경우가 있고, 아닌 경우가 있을 수도 있다. 개발자가 타이핑하다가
  귀찮아진 경우나 어떤 타입인지 모를 때 무심코 쓰게 된다면, 전체적인 문제가 발생할 수 있다.

❗️**즉, Any는 정확히 알고 써야한다.**

```ts
function returnAny(message): any {
  console.log(message);
}

const any1 = returnAny("리턴은 아무거나");

any1.toString(); // 타입에러 뜨지 않음 => any이기 때문이다.
```

- any를 최대한 쓰지 않는 것이 핵심이다.
- 왜냐하면 [컴파일 타입](https://ko.wikipedia.org/wiki/%EC%BB%B4%ED%8C%8C%EC%9D%BC_%ED%83%80%EC%9E%84)에 타임체크가 정상적으로 이루어지지 않기 때문이다.
- 그래서 컴파일 옵션 중에는 any를 써야하는데 쓰지 않으면 오류를 뱉도록 하는 옵션이 있다.
  ➡ `noImpicitAny`
- 편의를 위해서 any를 지정하는 순간, 안정선을 잃을 수 있다.

#### Any의 전파력을 알 수 있는 코드

```ts
let looselyTyped: any = {};

let d = looselyTyped.a.b.c.d;
// looselyTyped는 any이기에 .a.b.c로 타고 갈 경우에도 any로 지정이 된다.
// 그로 인해 오류가 발생하지 않는다.

function leakingAny(obj: any) {
  // const a = obj.num; // a의 타입: any
  const a: number = obj.num; // a의 타입: number
  const b = a + 1; // b의 타입 : any => b의 타입 : number

  return b;
}

const c = leakingAny({ num: 0 });
// c.indexOf('0')
```

---

## Unknown

✏️`Any가 가지고 있던 타입에 불안정한 요소를 주는 그러한 부분을 해소시키고자 나온 대체 자료형`

- 응용프로그램을 작성할 때는 모르는 변수의 타입을 묘사해야할 수도 있다.
  ➡ 모르는 변수를 `any`라고 지정했었던 것
  이러한 경우에는 api를 얻어서 오는 동적컨텐츠 일 수 있다.
- 컴파일러와 코드를 작성하는 다른 사람에게 이 변수가 무엇이든 될 수 있음을 알려주는 타입을 제공하기 위해 쓰인다.

```ts
declare const maybe: unknown;

// const aNumber: number = maybe; (x)
if (typeof maybe === "number") {
  // typeof typeguard
  const aNumber: number = maybe; // (o)
}

if (maybe === true) {
  // typeguard
  const aBoolean: boolean = maybe; // (o)
  // const aString: string = maybe; // (x)
}

if (typeof maybe === "string") {
  // typeof typeguard
  const aString: string = maybe; // (o)
  // const aBoolean: boolean = maybe; // (x)
}
```

> [declare란?](https://it-eldorado.tistory.com/127)
> 변수, 상수, 함수, 또는 클래스가 어딘가에 이미 선언되어 있음을 알리는 모듈

> [Type Guard란?](https://chanhuiseok.github.io/posts/ts-2/)
> 컴파일러가 타입을 예측할 수 있도록 타입을 좁혀 주어서(narrowing) 좀 더 type safety함을 보장할 수 있는 것

- ❗️**Type Guard를 통해서 type을 한정시켜야지만 쓸 수 있는 형태가 unknow이다❗️**
- Typescript 3.0 버전부터 지원
- any와 짝으로 any보다 Type-safe한 타입
  - any와 같이 아무거나 할당할 수 있다.
    ➡ unknow 자리에는 어떤 것이든 할당하게 하지만, unknow을 어디엔가 사용하게 하려면,
    컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나 타입을 확정해주지 않으면 다른 곳에 할당 할 수 없고 사용할 수도 없다.
- unknow 타입 사용시 runtime error를 줄일 수 있을 것 같다.
  - 사용 전에 데이터의 일부 유형의 검사를 수행해야 함을 알리는 API에 사용할 수 있을 것 같다.

---

## never

✏️ `보통 return에서 사용된다.`

```ts
function error(msg: string): never {
  throw new Error(msg);
  // throw를 하면 이 밑으로는 내려오지 않게 된다.
}
// never는 아무것도 리턴되지 않는다라는 의미
// return이나 함수의 body부분이 끝나지 않아야 한다.

function fail() {
  return error("failed");
}

function infiniteLoop(): never {
  while (true) {}
  // while 밑으로 내려오지 않는다.
}
```

- never 타입은 모든 타입의 subtype이며, 모든 타입에 할당 할 수 있다.
- 하지만 never에는 그 어떤 것도 할당할 수 없다.
- any조차도 never에겐 할당할 수 없다
  - 잘못된 타입을 넣는 실수를 막고자 할 때 사용하기도 한다.

```ts
let a: string = 'hello';

if(typeof a !== 'string') {
  // string이 아닌 것을 빼면 never
  let b: never = a;
}

// 조건문 타입 추후에 알 예정이다.
type Indexable<T> = T extends string ? T & { [index: string]: any} : never;

type ObjectIndexable<T> = Indexable<{}>'
// T extends string: T가 만약에 String이면
// T & { [index: string]: any }:
// T를 [index: string]: any 이렇게 만들어서 보내고
// 아니라면 never라는 타입을 보내라는 뜻

// const b: Indexable<{}> = ''; // 오류 => never 타입
```

---

## Void

✏️ `어떤 타입도 가지고 있지 않는 빈 상태를 의미하는 자료형.`

- 값은 없고, type만 있어서 void라는 값을 쓸 수는 없다.
- 소문자로 사용
- 일반적으로 어떤 변수 안에다가 voide라는 것을 annotation하는게 아니고, 값을 반환하지 않는 일종의 undefined를 리턴하는 상태일 때 return타입으로 사용된다.
- 함수의 반환타입으로 사용

```ts
function returnVoid(message: string) {
  console.log(message);

  return;
}
const r = returnVoid("리턴이 없다"); // const r: void

function returnVoid(message: string): void {
  console.log(message);

  return undefined;
}
```

### 참고 자료

- https://laikhan-workshop.tistory.com/41
- https://velog.io/@wldns12378/26.-%EC%9B%90%EC%8B%9C%EA%B0%92%EC%9D%98-%EB%A9%94%EC%84%9C%EB%93%9C
- https://developer-talk.tistory.com/69
