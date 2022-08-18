# ⚡️Never type이란?

✏️ `함수에 붙이는 return type으로 사용가능하다.`
하지만 좀 특이한 점이 있다.

```ts
function 함수(): never {}
```

어떤 함수가</br>
조건 1) 절대 return을 하지 않아야하고</br>
조건 2) 함수 실행이 끝나지 않아야한다. (endpoint가 없어야한다는 뜻)</br>
그런 함수에 붙일 수 있는 타입이다.</br>
실은 조건1, 2는 같은 소리인데 모든 자바스크립트 함수 맨 밑엔 return undefined라는 숨겨진 코드를 가지고 있다.</br>
그래서 조건2가 맞으면 1도 맞다.</br>
</br>

```ts
function 함수() {
  console.log(123);
}
```

이런 함수들에 never를 붙일 순 없다.</br>
왜냐면 조건 1번은 만족 하지만 2번은 만족하지 않는다.</br>
2번 조건은 함수 내부 코드 실행이 끝나지 않는 함수여야한다.</br>
</br>

```ts
function 함수(): never {
  while (true) {
    console.log(123);
  }
}
```

이런 함수엔 붙일 수 있다.</br>
`while 문법은 () 소괄호안에 조건식이 true일 경우 계속 내부 코드를 실행해라~`라는 뜻이다.</br>
무한히 실행되어 끝이 안나기 때문에 never 타입 사용이 가능하다.</br>
</br>

```ts
function 함수(): never {
  throw new Error("에러메세지");
}
```

이런 함수에도 붙일 수 있다.</br>
`throw new Error() 문법은 그냥 강제로 에러내라~`라는 뜻인데</br>
에러가 나면 전체 코드실행이 중단되니까 2번 조건도 나름 충족하는 것이기 때문에</br>
never 사용이 가능하다.</br>

> 그래서

1. 무언가 return 하지 않고
2. 끝나지도 않는 함수를 표현하고 싶을 때 never 타입을 지정하면 되는데
   2번 조건의 함수를 만들 일이 거의 없기 때문에 never 타입은 쓸 일이 없다.
   무언가 return 하고싶지 않을 경우 그냥 void 타입을 이용하면 되며
   배우는 이유는 **가끔 코드 이상하게 짜다보면 자동으로 등장하기** 때문이다.
   이 때 never 이게 뭘 의미하는지 이해만 잘하면 된다.

---

## 파라미터가 never 타입이 되는 경우도 있다.

```ts
function 함수(parameter: string) {
  if (typeof parameter === "string") {
    parameter + 1;
  } else {
    parameter;
  }
}
```

위 함수는 뭔가 이상한 함수이다.</br>
지금 narrowing을 이용해서 파라미터의 타입이 string이면 뭔가 해달라고 작성했는데</br>
else 문이 존재한다. 타입이 string이 아닐 경우 이거 해달라는 뜻이다.</br>
근데 else문은 말이 되지 않는다 지금 파라미터가 string 밖에 못들어오기 때문이다.</br>
</br>
이런 잘못된 Narrowing을 사용했을 때 파라미터의 타입이 never로 변한다.</br>
파라미터에 마우스를 올려보면 이런 건 있을 수 없다, 일어나면 안된다고 알려주는 느낌이다.</br>
그럴 때 never 타입이 발견되는 경우 코드를 수정하는 것이 좋다.</br>

---

## 자동으로 never 타입을 가지는 경우

자바스크립트는 함수를 만드는 방법이 2개 있다.</br>

```js
function 함수() {}

let 함수2 = function () {};
```

위는 **함수 선언문**,</br>
밑은 **함수 표현식**이라고 부른다. 똑같이 함수를 만들 수 있는 문법이다.</br>

```js
function 함수() {
  throw new Error();
}

let 함수2 = function () {
  throw new Error();
};
```

함수 선언문이 아무것도 return 하지 않고 끝나지도 않을 경우 void 타입이 자동으로 return 타입으로 할당되며</br>
함수 표현식이 아무것도 return 하지 않고 끝나지도 않을 경우 never 타입이 자동으로 return 타입으로 할당된다.</br>
</br>
또는 tsconfig.json에서 strict 옵션을 켜둘 경우</br>
함부로 any 타입을 지정해주지 않는 경우가 있다.</br>
그럴 때 array 같은거 대충 타입지정 안하고 만들면</br>

```ts
let arr = [];
```

원래는 any[] 이런 타입이 되는데 any를 갈질 수 없어서</br>
never[] 이런 타입이 발견되기도 한다.</br>
아무튼 쓸 일이 별로 없기 때문에 이럴 때도 등장한다고 알아두자!</br>
