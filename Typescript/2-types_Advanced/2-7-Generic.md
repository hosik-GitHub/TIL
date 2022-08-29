# ⚡️ Generic

---

함수 만들 때 `()` 여기에 파라미터를 입력하는데 </br>
타입스크립트를 쓰면 파라미터로 타입을 입력할 수도 있다. </br>
`<>` 여기에 집어넣으면 된다. </br>

## 함수 return 값의 타입이 애매하면

예를 들어 1. 아무렇게나 생긴 array 자료를 입력하면 2. array의 첫 자료를 그대로 출력해주는 함수를 만들었다고 해보자

```ts
function 함수(x: unknown[]) {
  return x[0];
}

let a = 함수([4, 2]);
// a의 타입은 위에서 unknown이라고 타입을 지정해줬지때문에 타입은 unknown이다.
console.log(a);
```

이러면 콘솔창에 4가 출력된다. </br>
</br>

근데 마우스를 올려서 의 타입을 확인해보면 숫자는 아니고 unknown 타입이다.</br>
왜냐면 지금 입력하는 array도 unknown 타입이라서 그렇다.</br>
여기서 중요포인트는 **`타입스크립트는 타입을 알아서 변경해주지 않는다는 것이다.`** </br>
스마트하게 숫자가 reutrn 되면 "number 타입입니다~" 문자가 return되면 "string 타입입니다~" 이렇게 해주지 않는다는 것이다. </br>

```ts
function 함수(x: unknown[]) {
  return x[0];
}

let a = 함수([4, 2]);
console.log(a + 1);
```

그래서 이런 연산도 에러가 발생하게 된다. </br>
a는 사람이 보기에 분명히 숫자가 맞지만 아직 타입은 unknown 타입이기 때문이다. </br>
우리가 함수의 return 타입지정을 :number 이런 걸로 강제로 바꾸기 전까지는 </br>
number 타입으로 변하지 않는다. </br>
</br>

그래서 함수에 불확실한 unknown, any, union 타입을 입력하면</br>
나오는 값도 unknown, any, union 타입이고, 이 때문에 일어나는 문제들이 많다.</br>
예를 들면 "함수가 10을 return 하는데 타입이 unknown 이라서 맘대로 조작을 못하네" </br>

#### 해결책으로

1. narrowing 잘하면 해결된다.
2. 애초에 타입을 파라미터로 함수에 미리 입력하는 방법도 있다. 그러면 원하는 곳에 가변적으로 타입지정 가능하다. 이것을 Generic이라고 부른다.

## Generic 적용한 함수 만들기

함수에 `<>` 이런 괄호를 열면 파라미터를 또 입력할 수 있다. </br>
근데 여기 안엔 타입만 입력할 수 있다. </br>

```ts
function 함수<MyType>(x: MyType[]): MyType {
  return x[0];
}

let a = 함수<number>([4, 2]);
let b = 함수<string>(["kim", "park"]);
```

그럼 이제 함수를 사용할 때도 `<>` 안에 파라미터처럼 타입을 입력할 수 있다. </br>
이제 `함수<number>()` 이렇게 쓰는 순간 MyType 이라는 변수에 number 라는게 들어간다고 보면된다. </br>
그럼 이제 `함수(x: number[]):number{}` 와 똑같이 동작한다. </br>

</br>
그러면 아까 unknown 가득한 예제와는 다르게 </br>
return 되는 타입이 number이다. </br>

#### Generic을 쓰면 정한 타입을 return 값으로 뱉는 함수를 제작 가능하다는 것이다.

`<>`문법만 잘 쓰면 된다.
