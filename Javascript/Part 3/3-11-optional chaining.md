### ?. optional chaining

object 자료에서 원하는 데이터 꺼내고 싶으면 마침표를 찍으면 된다. <br>
근데 마침표와 똑같은 역할을 하는 ?. 문법이 있다.<br>

```js
var user = {
  name: "kim",
  age: 20,
};

console.log(user.name);
```

용도는 마침표와 똑같은데 정확한 기능은 <br>
?. 왼쪽에 있는게 null 혹은 Undefined 인 경우 마침표찍지 말고 undefined 남기라는 뜻이다. <br>

### 쓰이는 곳

"중첩된 object 자료에서 에러없이 안전하게 데이터를 꺼낼 때" 사용하면 된다. <br>

```js
var user = {
  name: "kim",
  age: { value: 20 },
};

console.log(user.age.value);
```

object 안에 object가 들어있는 경우를 말한다. <br>
이 경우 마침표 몇번 찍어야 안에 깊숙히 들어있는 자료를 출력할 수 있는데 <br>
자료를 잘못 찾는 경우 에러가 난다. <br>

```js
var user = {
  name: "kim",
  age: { value: 20 },
};

console.log(user.age1.value1); // 에러 발생
```

그 이뉴는 undefined, null 같은 것에다가 점찍으면 에러가 발생하기 때문이다. <br>
에러가 나는 것을 방지하고 싶으면 .age1 이게 있으면 .value1 해달라고 if 문법을 쓰면된다. <br>

```js
var user = {
  name: "kim",
  age: { value: 20 },
};

console.log(user.age1?.value1); // 에러 발생 X
```

if문이 쓰기 귀찮으면 ?. 을 사용하면 된다. <br>
"왼쪽에 있는게 null, undefined면 마침표 찍지 말고 undefined를 남겨주세요"라는 뜻이라 <br>
에러가 발생하지 않는다. <br>

```js
var user = {
  name: "kim",
};

console.log(user?.name1);
```

?. 는 에러를 해결해주는 문법이 아니라 에러나지 않게 감추는 문법이다. <br>

### ?? nullish coalescing operator( nullish 병합 연산자)

```js
var user;

console.log(user ?? "로딩중");
```

`??`를 사용하면 짧은 문법으로 여러 피연산자 중 그 값이 ‘확정되어있는’ 변수를 찾을 수 있다.<br>
`a ?? b`의 평가 결과는 다음과 같다.<br>

- a가 null도 아니고 undefined도 아니면 a
- 그 외의 경우는 b

React, Vue를 사용하다보면 데이터 늦게 도착하는 일이 빈번한대<br>
그런 라이브러리를 쓸 때 유용한 문법이다.<br>
