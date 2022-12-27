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
