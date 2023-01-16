### ?. optional chaining

object 자료에서 원하는 데이터 꺼내고 싶으면 마침표를 찍으면 된다.
근데 마침표와 똑같은 역할을 하는 ?. 문법이 있다.

```js
var user = {
  name: "kim",
  age: 20,
};

console.log(user.name);
```

용도는 마침표와 똑같은데 정확한 기능은
?. 왼쪽에 있는게 null 혹은 Undefined 인 경우 마침표찍지 말고 undefined 남기라는 뜻이다.

### 쓰이는 곳

"중첩된 object 자료에서 에러없이 안전하게 데이터를 꺼낼 때" 사용하면 된다.

```js
var user = {
  name: "kim",
  age: { value: 20 },
};

console.log(user.age.value);
```

object 안에 object가 들어있는 경우를 말한다.
이 경우 마침표 몇번 찍어야 안에 깊숙히 들어있는 자료를 출력할 수 있는데
자료를 잘못 찾는 경우 에러가 난다.

```js
var user = {
  name: "kim",
  age: { value: 20 },
};

console.log(user.age1.value1); // 에러 발생
```

그 이뉴는 undefined, null 같은 것에다가 점찍으면 에러가 발생하기 때문이다.
에러가 나는 것을 방지하고 싶으면 .age1 이게 있으면 .value1 해달라고 if 문법을 쓰면된다.
