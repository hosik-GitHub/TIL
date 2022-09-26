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

이러면 age1의 타입은 string, age2의 타입은 any가 되어야한다.
FirstItem이라는 타입을 만들어보자.

```ts
type FirstItem<T> = T extends any[] ? T[0] : any;
let age1: FirstItem<strin[]>;
let age2: FirstItem<number>;
```
