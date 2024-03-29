### for in 반복문은 Object에 사용

- object 자료형에 저장된 자료들을 하나씩 꺼내고 싶을 때 사용

```js
var 오브젝트 = { name: "Kim", age: 30 };

for (var key in 오브젝트) {
  console.log(오브젝트[key]);
}
```

(key라는건 변수명이다.) <br>
반복문은 오브젝트라는 재료 내부 데이터 갯수만큼 반복하게 되며<br>
반복할 때마다 key라는 변수는 name, age 이렇게 데이터의 key값이 된다.<br>
<br>
그럼 반복시마다 변경되는 key 값을 이용하면 오브젝트 내의 자료를 모두 출력할 수 있다.<br>
단순하게 오브젝트.key를 콘솔창에 출력하면 되는데, 변수명을 저렇게 점찍고 쓸 수는 없으니<br>
오브젝트[key]라고 사용하면 된다.<br>

### for in 반복문의 특징 1.enumerable한 것만 출력

object 자료형을 만들 때<br>
{ name: 'kim' } 이걸 저장하면 Kim 이라는 자료만 달랑 저장되는게 아니다.<br>
Kim과 함께 비밀스러운 속성들 3개가 저장된다.<br>

```js
var 오브젝트 = { name: "Kim", age: 30 };

console.log(Object.getOwnPropertyDescriptor(오브젝트, "name"));
```

비밀스런 속성 3개를 출력해보고 싶으면 위처럼 쓰면 된다.<br>

그럼 콘솔창에 아래와 같은게 출력되는데

```js
{value: "Kim", writable: true, enumerable: true, configurable: true}
```

이것이 Kim과 함께 몰래 저장되는 속성들이다.<br>
(그래서 Object 자료형이 좀 무겁다.)<br>
여기서 enumerable이라는게 있는데, 이게 true인 자료들만 for in 반복문이 출력할 수 있다.<br>
이걸 강제로 false로 만들면 for in 반복문이 거른다.<br>
<br>
\*eunmerable = '셀수있는'<br>

### for in 반복문의 특징 2. 부모의 prototype에 저장된 것도 출력해준다.

object의 부모의 유전자에 있는 속성도 반복문으로 출력해준다.

```js
class 부모 {}
부모.prototype.name = "Park";

var 오브젝트 = new 부모();

for (var key in 오브젝트) {
  console.log(오브젝트[key]);
}
```

Park이라는 자료는 부모가 가지고 있는 것인데도 출력해준다.<br>
이게 단점이다.<br>
이런게 싫다면 if문을 추가해주어야한다.<br>

```js
class 부모 {}
부모.prototype.name = "Park";

var 오브젝트 = new 부모();

for (var key in 오브젝트) {
  if (오브젝트.hasOwnProperty(key)) {
    console.log(오브젝트[key]);
  }
}
```

오브젝트.hasOwnProperty()라는 함수는<br>
오브젝트가 이 key값을 직접 가지고 있냐라고 물어보는 함수이다.<br>
갖고 있으면 true, 없으면 false를 뱉어준다.<br>
그래서 내가 가진 것만 반복시키고 싶으면 이걸 꼭 사용해야한다.<br>

### for of 반복문

```js
var 어레이 = [2, 3, 4, 5];
for (var 자료 of 어레이) {
  console.log(자료);
}
```

어레이 안에 있떤 모든 자료를 하나씩 콘솔창에 출력할 수 있다.<br>
array 자료형 뿐만 아니라<br>
array, 문자, arguments, NodeList, Map, Set 이라는 자료형에 적용할 수 있는 반복문이다.<br>
<br>

근데 정확히 말하면 iterable인 자료형들에만 적용가능한 반복문이다.<br>
iterable한 자료형이란<br>
[Symbol.iterable]() 이라는 일종의 메소드를 가지고 있는 자료형들을 뜻한다.<br>

```js
var 어레이 = [2, 3, 4, 5];
console.log(어레이[Symbol.iterator]());
```

array 자료형 뒤에 붙이면 뭔가 출력된다.<br>
문자도 그렇다.<br>
반복문 출력을 도와주는 일종의 함수라고 생각하면 된다.<br>
<br>
for of는 NodeList라는 곳에도 사용할 수 있는데<br>
우리가 흔히 document.getElementsByClassName()이나 document.querySelectorAll() <br>
이런 셀렉터로 찾은 요소들이 [] 대활호아넹 담겨오는데 array는 아니고 NodeList라는 자료형이라고 부른다.<br>
NodeList안에 있는 HTML요소들을 하나씩 꺼내서 처리할 때<br>
매우 자주 쓸 수 있는 반복문이다.<br>
(for of의 호환성의 주의)
