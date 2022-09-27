## 삼항연산자 개념

자바스크립트 기본 문법 중에 삼항연산자라는 것이 있다 <br>
if문 대용품인데 평소에 if가 들어갈 수 없는 곳들에 간략하게 if문을 넣을 수 있는 방법이다. <br>

```ts
조건문 ? 참일때실행할코드 : 거짓일때실행할코드;
3 > 1 ? console.log("맞아요") : console.log("아님");
```

이렇게 if문처럼 사용한다. <br>

# ⚡️ 조건부로 타입 만들기

```ts
type Age<T> = T;
```

예를 들어 이런 코드가 있다고 가정해보자 <br>
이러면 이제`Age<number>` 이렇게 쓰면 그 자리에 number가 남는다. <br>
(타입변수에도 타입파라미터 넣기 가능) <br>
<br>
근데 이렇게 바꿔보자<br>
"타입파라미터 자리에 string 타입을 집어넣으면 string 부여해주고 그게 아니면<br>
전부 unknown 부여"<br>
이럴때 if문을 사용하여 만약 T가 string이면 string, 그게 아니면 unknown으로 남기도록 할 수 있다.<br>
<br>

타입 조건식은 주로 **extends 키워드와 삼함연산자를** 이용한다. <br>
"extends는 왼쪽이 오른쪽의 성질을 가지고 있냐"라는 뜻으로 사용할 수 있기 때문에<br>
나름 조건식 용도로 사용가능하다. 비유하자면 수학에서 쓰는 ⊂ 기호 역할이다.<br>

```ts
type Age<T> = T extends string ? string : unknown;
let age: Age<string>; // age는 string 타입
let age2: Age<number>; // age는 unknown 타입
```

"T라는 파라미터가 string 성질 가지고 있냐? 그러면 string 남기고 아니면 unknown 남겨라" <br>
그랬더니 정말 `<string>` 집어넣으면 string, `<number>` 이렇게 집어넣으면 unknown을 남겨준다. <br>
이게 if문을 쓰는 방법이다. <br>
아직 타입이 확실하지 않은 <타입파라미터> 다룰 때 많이 사용한다. <br>

> **Q. 파라미터로 array 자료를 입력하면 array의 첫 자료의 타입을 그대로 남겨주고,
> array 자료가 아니라 다른걸 입력하면 any 타입을 남겨주는 타입은 어떻게 만들까?**

```ts
let age1: FirstItem<strin[]>;
let age2: FirstItem<number>;
```

이러면 age1의 타입은 string, age2의 타입은 any가 되어야한다. <br>
FirstItem이라는 타입을 만들어보자. <br>

```ts
type FirstItem<T> = T extends any[] ? T[0] : any;
let age1: FirstItem<strin[]>;
let age2: FirstItem<number>;
```

## infer 키워드

조건문에 사용할 수 있는 특별한 infer 키워드가 있다. <br>
infer 키워드는 지금 입력한 타입을 변수로 만들어주는 키워드이다. <br>

```ts
type Person<T> = T extends infer R ? R : unknown;
tyep 새타입 = Person<string> // 새타입은 string 타입
```

1. infer 키워드는 조건문 안에서만 사용가능하다.
2. infer 우측에 자유롭게 작명해주면 타입을 T에서 유추해서 R이라는 변수에 집어넣어라~ 라는 뜻이다.
   그래서 위 예제에서 `<string>` 이렇게 타입파라미터 자리에 string 집어넣으면 R은 string이 된다.
3. R을 조건식 안에서 맘대로 사용 가능하다.
   <br>

이런 식으로 **타입파라미터에서 타입을 추출해서** 쓰고 싶을 때 쓰는 키워드라고 보면 된다. <br>
<br>
근데 무슨 용도로 쓰는지 알아야 나중에 코드를 짤 때 활용이 가능한데 어디에 쓰냐면<br>
<br>

1. array 안에 있던 타입이 어떤 타입인지 뽑아서 변수로 만들어줄 수 있다.<br>

```ts
type 타입추출<T> = T extends (infer R)[] ? R : unknown;
type NewType = 타입추출<boolean[]>; // NewType은 boolean 타입
```

이런 식으로도 사용할 수 있는데 <br>
(infer R)[] 이렇게하면 array가 가지고 있던 타입부분만 뽑아서 R 변수에 할당할 수 있다. <br>
<br>

2. 함수의 return 타입이 어떤 타입인지 뽑아서 변수로 만들어줄 수 있다.

```ts
type 타입추출<T> = T extends () => infer R ? R : unknown;
type NewType = 타입추출<() => number>; // NewType은 number 타입
```

타입파라미터에 <함수>를 집어넣었다. 그 타입파라미터에 있는 retrun 타입을 뽑아서 R이라는 변수에 담는 코드이다. <br>
일정한 규칙이 있다기 보다 그냥 타입을 추출하는 식으로 이해하면 된다. <br>
<br>
하지만 이런 것도 직접 만들어쓸 필요는 없고<br>
RetrunType<> 이런 예약 타입이 있는데 여기에 함수타입을 집어넣으면 return 타입만 뽑아서 알려준다.<br>
