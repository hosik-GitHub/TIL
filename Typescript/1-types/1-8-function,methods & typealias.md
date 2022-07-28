# ⚡️ function type

---

- 함수에 들어갈 파라미터와 return으로 뱉을 값들을 타입 지정할 수 있다고 배워왔다.

- 함수 타입도 type alias로 저장해서 쓸 수 있다.

예를 들어

1. 숫자 두개를 파라미터로 입력할 수 있고
2. 숫자를 return 하는 함수를 별명지어서 사용하려면 아래와 같다.

```ts
type NumOut = (x: number, y: number) => number;
```

#### 화살표 함수 ()=>{}

- 자바스크립트로 함수를 만들때 arrow function 이라고 부르는 `=>` 문법을 써도 함수가 만들어진다.

```js
(파라미터)={} // arrow function 문법
function(파라미터){} // 일반 function 문법
```

차이는 하나가 있는데 this 값이 달라진다는 것 밖에 없다.</br>
</br>
arrow function의 장점은 기호 생략기능을 제공해준다는 점인데

1. arrow function에선 중괄호안에 return ..생략 코드밖에 없으면 중괄호 {} 생략해도 괜찮다.
2. 파라미터가 한개 밖에 없으면 소괄호() 생략해도 괜찮다.

그래서 예를 들어서 2를 넣으면 2를 곱해주어 return 해주는 함수를 만들고 싶으면

```js
(x) => 2 * x;
// 이렇게 사용이 가능하다.
```

이걸 함수 만들때 사용하려면</br>
**function 함수이름 :NumOut(){}**</br>
이런 식은 불가능하다. function 키워드에는 () 이거 내부랑 오른쪽에만 타입지정이 가능하기 때문이다.

그래서 아래와 같이 코드를 만든다.

```ts
type NumOut = (x: number, y: number) => number;
let ABC: NumOut = function (x, y) {
  return x + y;
};
```

---

## methods 안에 타입지정하기

✏️ `ojbect 자료 안에 함수도 마음대로 집어 넣을 수 있다.`

```ts
let 회원정보 = {
  name: "kim",
  age: 30,
  plusOne(x) {
    return x + 1;
  },
  changeName: () => {
    console.log("안녕");
  },
};
회원정보.plusOne(1);
회원정보.changeNamge();
```

- plusOne 그리고 changeName 함수를 object 자료에 집어 넣었다.
- arrow function, 일반함수 전부 object 안에 마음대로 집어 넣을 수 있다.
- 넣은 함수들은 똑같이 점찍어서 사용 가능하다.
- 넣는 이유는 함수도 자료안에 보관해서 쓰고 싶을 때가 있기 때문
