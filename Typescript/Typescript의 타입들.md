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
<<<<<<< HEAD

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
=======
✏️ ``텍스트 형식을 참조하기 위해 "String"형식을 사용``
- Javascript와 마찬가지로, 문자열 데이터를 감싸기위해 ``"`` 큰따옴표나, ``'`` 작은따옴표를 사용한다.
```ts
let myName:string = "hosik";
myName = "kim";
```
### ES6부터는 Template String 기능이 생겼다
- 전에는 ``+`` 기호를 사용하여 문자열을 더해주었다.
- backkick(=backquote) ``` `` ```기호로 둘러쌓여있다.
- 포함된 표현식은 ``${expr}`` 와 같은 형태로 표현되어진다.
```ts
let fullName: string = "hosik"
let age:number = 20;
let sentence:string = `Hello My Name is ${fullNmae}.
	I'll be ${age + 1} years old in 7 months`
>>>>>>> 5de90826fece5bc22140223e80246d4cc20eae64

//console.log(sentence)
// Hello My Name is hosik.
// I'll be 33 years old in 7 months
```
<<<<<<< HEAD

---

## Symbol

✏️ `Symbol은 고유한 데이터로, 여러개의 Symbol에 동일한 description을 넣어도 각 다른 존재로 인식된다.`

=======
----
## Symbol
✏️ ``Symbol은 고유한 데이터로, 여러개의 Symbol에 동일한 description을 넣어도 각 다른 존재로 인식된다.``
>>>>>>> 5de90826fece5bc22140223e80246d4cc20eae64
- ECMAScript 2015에 새로 추가되었다.
- new Symbol로 사용 불가능하다.
- Symbol을 함수로 사용해서 symbol 타입을 만들어 낼 수 있다.

> 자바스크립트로 더 알아보자면
<<<<<<< HEAD

=======
>>>>>>> 5de90826fece5bc22140223e80246d4cc20eae64
```ts
const a = Symbol("id");
const b = Symbol("id");
console.log(a == b); // false
```
<<<<<<< HEAD

같은 문자열을 넣었는데 결과값이 fasle로 나오는 이유는?
➡ Symbol은 고유한 존재이기 때문에 문자열이 같아도 영향을 미치지 않기 때문이다.

Typescript로 알아보면 그전에 `tsconfig.json`에서 설정해주어야한다.

=======
같은 문자열을 넣었는데 결과값이 fasle로 나오는 이유는?
➡ Symbol은 고유한 존재이기 때문에 문자열이 같아도 영향을 미치지 않기 때문이다.

Typescript로 알아보면 그전에 ``tsconfig.json``에서 설정해주어야한다.
>>>>>>> 5de90826fece5bc22140223e80246d4cc20eae64
```json
"lib" : [
	"ES2015",
  	"DOM"
]
```
<<<<<<< HEAD

Typescript로 작성하면 아래의 코드와 같다.

```ts
console.log(Symbol("foo") === Symbol("foo")); // false
```

### Symbol은 어디서 쓸까?

- Primitive Type의 값을 담아서 사용한다.
- Symbol로 생성된 값은 고유하고 수정불가능한 값으로 만들어준다.
  ➡ ❗️**그래서 주로 접근을 제어하는데 쓰는 경우가 많다**

=======
Typescript로 작성하면 아래의 코드와 같다.
```ts
console.log(Symbol('foo') === Symbol('foo')); // false
```
### Symbol은 어디서 쓸까?
- Primitive Type의 값을 담아서 사용한다.
- Symbol로 생성된 값은 고유하고 수정불가능한 값으로 만들어준다.
➡ ❗️__그래서 주로 접근을 제어하는데 쓰는 경우가 많다__
>>>>>>> 5de90826fece5bc22140223e80246d4cc20eae64
```ts
const sym = Symbol();

const obj = {
<<<<<<< HEAD
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
=======
	[name]: "val"
};

console.log(obj[name]) // "val"
// 접근을 막거나, 접근이 필요한 경우에만 사용
```
> 만약 ``obj객체``에 ``name`` 속성 외에 다른 속성이 무수히 있다고 가정하고<br>
협업을 하다가 한 팀원이 ``obj객체``에 ``name`` 속성이 있는지 모르고
또 ``name`` 속성을 추가해서 덮어씌어버린다면 코드가 오류 나버린다!<br>
이 속성 값은 건들지 않게 하고 싶은 경우 ``Symbol``을 사용한다.
같은 속성 이름으로 값을 추가하더라도 ``Symbol``은 다른 존재로 인식 하기 때문에 충돌이 없기 때문이다.<br>
``string`` 값으로 속성을 추가 하면 바로 덮어 씌어버리기 때문에, ``Symbol``을 사용해야한다.<br>
이것이 ``string`` 과 ``symbol``의 차이

➡__즉, 다른 사람과 협업할 때, 중요한 속성 값을 보호하기 위함이다.__

--------
## Null & Undefined
✏️ `` 값이 없다는 의미 ``
### Null과 Undefined의 차이점은?
❗️__null은 Object자료형을 가지고 있고, undefined는 자료형이 없다.__
>``null`` ➡ 변수를 선언하고 빈 값을 할당한 상태(빈 객체)
``undefined`` ➡ 변수를 선언하고 값을 할당하지 않은 상태<br>
즉, ``undefined``는 자료형이 없는 상태이므로
``typeof``를 통해 자료형을 확인해보면 ``null``은``object``로,
``undefined``는 ``undefined``로 출력되는 것을 확인할 수 있다.
>>>>>>> 5de90826fece5bc22140223e80246d4cc20eae64

- Typescript에서 undefined와 null은 실제로 각각 undefined와 null이라는 타입을 가진다.
- voide와 마찬가지고 그 자체로 그다지 유용하지는 않다.
- 타입과 값 둘 다 소문자만 존재한다.
<<<<<<< HEAD

=======
>>>>>>> 5de90826fece5bc22140223e80246d4cc20eae64
```ts
// 이 변수들에 할당할 수 있는 것들은 거의 없다.

let u: undefined = undefiend;
let n: null = null;
```
<<<<<<< HEAD

하지만 `tsconfig`파일 설정을 한다면 달라진다.
**즉, null 과 undefined를 할당할 수 있다는 의미**
=======
하지만 ``tsconfig``파일 설정을 한다면 달라진다.
__즉, null 과 undefined를 할당할 수 있다는 의미__
>>>>>>> 5de90826fece5bc22140223e80246d4cc20eae64

null 과 undefined는 다른 모든 타입에 서브타입으로 존재한다.
만약 number에 number형이 아니라 null을 넣더라도, 사용할 수 있다는 의미이다.

<<<<<<< HEAD
**null과 undefined를 할당할 수 있게 하려면, `union type`을 사용해야한다.**

하지만 `컴파일 옵션` 즉, `ts파일을 ➡ js파일로 변경하는 옵션 `에서 `strictNullChecks`옵션을 사용하면서,
컴파일을 한다면 그 때는 `null`과 `undefined`는 모든 하위 탑에 존재하지 않게 된다.

> \_\_+) 즉, 컴파일 옵션에서 `strictNullChecks`를 사용하면, null과 undefined는 void나 자기 자신에게만 할당할 수 있다.
> ❗️void에 유일하게 undefined를 할당할 수 있다. null은 안된다.
=======
__null과 undefined를 할당할 수 있게 하려면, ``union type``을 사용해야한다.__

하지만 ``컴파일 옵션`` 즉, ``ts파일을 ➡ js파일로 변경하는 옵션 ``에서 ``strictNullChecks``옵션을 사용하면서,
컴파일을 한다면 그 때는 ``null``과 ``undefined``는 모든 하위 탑에 존재하지 않게 된다.
> __+) 즉, 컴파일 옵션에서 ``strictNullChecks``를 사용하면, null과 undefined는 void나 자기 자신에게만 할당할 수 있다.
❗️void에 유일하게 undefined를 할당할 수 있다. null은 안된다.
>>>>>>> 5de90826fece5bc22140223e80246d4cc20eae64

```ts
let myName: string = null;
// 오류가 발생한다.
```
<<<<<<< HEAD

오류를 없애기 위해선 `tsconfig.json`에서 `"strict": "true"`를 주석해주어야한다.
➡ 하지만 위 방법은 좋은 방법은 아니다.

**union type을 이용해야한다.**
➡ `|` 이렇게 작성하는 타입이다.
ex)`let union: string | null | undefined = 'hosik';`
➡ 합집합과 같은 의미이다.

=======
오류를 없애기 위해선 ``tsconfig.json``에서 ``"strict": "true"``를 주석해주어야한다.
➡ 하지만 위 방법은 좋은 방법은 아니다.

__union type을 이용해야한다.__
➡ ``|`` 이렇게 작성하는 타입이다.
ex)``let union: string | null | undefined = 'hosik';``
➡ 합집합과 같은 의미이다.
>>>>>>> 5de90826fece5bc22140223e80246d4cc20eae64
```ts
// let u : undefined = null; // (X)

let v: void = undefined; // (O)
// void는 타입으로만 존재하기 때문에
// let v: void = void; 로 넣을 수 없다.
// undefined는 타입이기도 하지만 값이기 때문에 넣을 수 있다.
// null은 안된다.

<<<<<<< HEAD
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
=======
let union: string | null | undefined = 'hosik';
```
> 여기까지가 ``Primitive Types``는 끝이다.

--------
## Object
✏️``객체: 이름(name)과 값(value)으로 구성된 프로퍼티(property)의 정렬되지 않은 집합``
- ``primitive Type``과 다르게 직접 값을 가지고 있지 않고, 그 값을 가리키는 정보를 가지고 있는 성질을 가지고 있다.
```ts
// Created by object literal
const person1 = {name: 'hosik', age: 32};
>>>>>>> 5de90826fece5bc22140223e80246d4cc20eae64

// person1 is not "object" type
// 타입스크립트에선 person1은 Object 타입이 아니다.
// person1 is "{name: 'hosik', age: 32}" type
// person1은 "{name: 'hosik', age: 32}" 이러한 타입으로 나온다.

// Created by object.create
// Object: 소문자가 아닌 대문자 오브젝트
// Object: 전역객체, 내장전역객체 - runtime에 제공되는 미리 준비된 것
// 여기서 Object는 primitive Type이 아닌 것
// 그래서 인자로 들어오는 타입은 오브젝트 or null인 합집합으로 이루어져 있다.
<<<<<<< HEAD
const person2 = Object.create({ name: "hosik", age: 32 });
```

#### Object.create(null | Object)

> `primitive Type`을 제외하고 올 수 있는 모든 것을 `Ojbect`라고 한다.
> `primitive Type`: number, string, boolean, bigint, symbol, null or undefined
> 예를 들어 `{}`객체 형태 또는 `[]`배열 형태가 있다.

---

### 참고 자료

=======
const person2 = Object.create({name: 'hosik', age: 32});
```
#### Object.create(null | Object)
> ``primitive Type``을 제외하고 올 수 있는 모든 것을 ``Ojbect``라고 한다.
``primitive Type``: number, string, boolean, bigint, symbol, null or undefined
예를 들어 ``{}``객체 형태 또는 ``[]``배열 형태가 있다.

----




### 참고 자료
>>>>>>> 5de90826fece5bc22140223e80246d4cc20eae64
- https://laikhan-workshop.tistory.com/41
- https://velog.io/@wldns12378/26.-%EC%9B%90%EC%8B%9C%EA%B0%92%EC%9D%98-%EB%A9%94%EC%84%9C%EB%93%9C
- https://developer-talk.tistory.com/69
