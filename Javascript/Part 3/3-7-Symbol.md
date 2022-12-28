## Symbol

- ES6부터 추가된 Primltive 자료형 중 하나

### Symbol 자료형 만드는 법

```js
var 심볼 = Symbol("설명아무거나적기");
```

Symbol() 함수를 이용하면 되고 안에 아무 설명이나 적으면 된다. <br>
주석(설명) 하나만 달랑 저장할 수 있는 자료형이다.<br>

### Symbol은 언제 사용할까?

원래 Object 자료형에는 문자로만 key값을 입력할 수 있다.<br>
문자 아닌걸 입력해도 문자로 자동으로 치환된다.<br>
근데 ES6부터는 Symbol도 key값으로 입력할 수 있다.<br>
<br>

**person[심볼명] = 넣을자료;**
이렇게 쓰면 Object자료형에 Symbol을 이름으로 가진 자료를 저장 가능하다.

```js
var person = { name: "Kim" };
person.weight = 100;

var weight = Symbol("내 진짜 몸무게");
person[weight] = 200;

console.log(person);
```

위의 예제코드는 Symbol을 key값, 200을 value값으로 오브젝트에 집어 넣은 예제이다.<br>
출력해보면 { Symbol(내 진짜 몸무게) : 200 } 이라는 자료가 들어가 있다.<br>
이렇게 특이한 이름을 가진 자료를 Object안에 만들고 싶을 때 Symbol을 사용한다.<br>
<br>
이 자료는 특징이 있는데,<br>
for문에 등장하지 않는다는 것이다.<br>
보통 Object를 반복문을 돌릴 때 for in 이런걸 사용한다.<br>
그런데 Symbol은 반복문에서 감지하지 못한다.<br>
<br>
그래서 시크릿한 내용을 저장하고 싶을 때 Symbol을 이용해서 자료를 저장하면 된다.<br>

### 심볼을 직접 입력하려면

심볼을 오브젝트 만들 때 직접 입력할 수도 있다.

```js
var height = Symbol("My height");

var person = { name: "Kim", [height]: 182 };
```

Object 자료형에 직접 입력할 때는 대괄호안에 심볼명을 담아주면 된다.

### Symbol 자료형 특징 1. 설명은 설명일 뿐

Symbol() 안에는 간단한 설명을 저장할 수 있다고 했다. <br>
근데 같은 설명을 가졌다고 해서 같은 Symbol이 아니다.<br>
각각 다른 것이다.

```js
var a = Symbol("설명1");
var b = Symbol("설명1");
console.log(a === b);
```

위의 예제에서 a와 b 심볼은 설명이 같음에도 불구하고<br>
두개를 같다고 비교해보면 false가 남는다.<br>
Symbol은 Symbol()이라고 사용할 때마다 각각 유니크한 Symbol이 생성되서 그렇다.<br>

### Symbol 자료형 특징 2. Symbol.for()로 만드는 전역심볼

변수처럼 뭔가 같은값을 가지면 같은 변수로 취급해주는<br>
전역 심볼을 만들어쓸 수 있다.<br>
<br>

그러고 싶으면 Symbol() 대신에 Symbol.for()로 만들면 된다.

```js
var a = Symbol.for("설명1");
var b = Symbol.for("설명1");
console.log(a === b);
```

예제를 출력해보면 true라는 값이 출력된다.<br>
왜냐면 Symbol.for()로 새로운 Symbol을 만들 때<br>
설명이 같으면 이미 그 설명을 가지고 있는 Symbol을 그 자리에 집어넣기 때문이다.<br>
그래서 a와 b의 심볼은 각각 다른 곳에서 만들었음에도 불구하고 같은 Symbol이 된다.<br>

### Symbol 자료형 특징 3. 기본 내장 Symbol들

Array, Object 자료형을 만들 때 몰래 붙어있는 기본 Symbol 들도 있다.<br>
예를 들면 모든 array 자료형은 [Symbol.iterator]라는 이름을 가진 심볼이 안에 있다.<br>

```js
var array = [2, 3, 4];
console.log(array[Symbol.iterator]);
```

#### 우리가 몰랐던 이유

심볼을 몰래 자료를 저장할 때 쓰는 자료형이라고 했다. 그래서 반복물 이런걸 써도 전혀 출력되지 않는다.<br>

참고로 Symbol.iterator라는 심볼을 for of를 쓸 수 있게 도와주는 Symbol이다.<br>
그래서 ES6환경에선 저런 식으로 뭔가 내장 기능을 만들어내는구라 라고 이해하면 된다.<br>
