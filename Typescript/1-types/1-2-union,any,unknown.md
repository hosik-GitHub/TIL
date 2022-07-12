변수에 들어올게 string일지 number일지 아직 애매하다면 방법이 몇가지 있다.

## ⚡️ Union type

"이 변수에 string 또는 number가 들어올 수 있다"라고 타입을 정의하고 싶으면 `|` 연산자를 쓴다.<br>
OR 연산자 같은 느낌인데 이런 타입을 전문용어로 Union type라고 부른다.

```ts
let 이름: string | number = "kim";
let 나이: string | number = 100;
```

괄호를 쳐도 무관하다.
이러면 name, age 변수엔 string 또는 number만 들어올 수 있다.<br>
그리고 **할당하는 순간 타입은 string 또는 number 중 하나로 변환한다.**
<br>
그렇다면 array, object 자료 만들 대 union type(OR 연산자)을 쓰려면 어떻게 해야할까?

Q.

```ts
var 어레이: number[] = [1, "2", 3];
var 오브젝트: { data: number } = { data: "123" };
```

위 코드에 정의된 어레이와 오브젝트는 지금 타입 때문에 에러가 난다.<br>
**array와 object 자료에 number 또는 string** 이 들어올 수 있게 타입을 고쳐보자

A.

```ts
var 어레이: (number | string)[] = [1, "2", 3];
var 오브젝트: { data: number | string } = { data: "123" };
```

특징은 변수에 정의된 Union 타입은 할당과 동시에 OR 연산자 역할이 사라진다.<br>
array, object에 정의된 Union 타입은 OR 연산자가 유지된다.

<<<<<<< HEAD
## ⚡️ any 타입이란?

=======
> any 타입이란?
>>>>>>> bb1a2e122681bed2705b2fb53be69ebf569b5b25
아무 자료나 집어넣을 수 있는 타입이다.<br>
쉽게 비유하면 실드해제라고 생각하면 좋다.

```ts
let 이름: any = "kim";
이름 = 123;
이름 = undefiend;
이름 = [];
```

asdadadas
any 타입은 실드 해제 문법이기 때문에 갑자기 타입을 바꿔도 에러가 나지 않는다.<br>
any 타입은 자주 범용해서는 안되는데 그 이유는 버그가 생겼을 때 추적하기 어렵게 때문이다.<br>
타입 실드를 안씌우면 타입스크립트는 사용하는 이유가 없기 때문에 비상시 쓰는 **변수 타입체크 해제기능** <br>
이런 용도로 사용하게 된다.

<<<<<<< HEAD
## ⚡️ unknown 타입이란?

=======
> unknown 타입이란?
>>>>>>> bb1a2e122681bed2705b2fb53be69ebf569b5b25
요즘 타입스크립트에서는 unknown 타입을 사용한다.<br>
any와 똑같이 모든 타입을 집어넣을 수 있다

```ts
let 이름: unknown = "kim";
이름 = 123;
이름 = undefined;
이름 = [];
```

위와 같이 사용해도 에러가 나지 않는다.<br>
아직 어떤 타입이 들어올지 모를 경우, 다양한 타입을 집어넣어야할 경우 사용해보자.
중요한 특징은

1. unknown 타입엔 모든 자료를 다 집어 넣을 수 있다.
2. 자료를 집어 넣어도 타입은 그대로 unknown이다.

```ts
let 이름: unknown;
let 변수1: string = 이름;
let 변수2: boolean = 이름;
let 변수3: number = 이름;
```

당연히 unknown 타입을 다른 곳에 집어넣으려고 하면 그쪽 실드가 발동해서 에러가 발생한다.(any는 그렇지 않다.)<br>
그 이유는 타입스크립트는 정확하고 확실한 걸 좋아한다.<br>
숫자가 아닌걸 뺄셈할 수 없기 때문이다. 타입스크립트에서 뺄셈은 number류의 타입만 할 수 있고<br>
.name과 같은건 object류의 타입만 할 수 있다고 미리 정의가 되어있다.
<br>
결론은 아직 뭘 집어 넣을지 모르겠는데 약간의 안정성을 도모하고 싶다면 unknown타입을 사용해보자.<br>
하지만 코드를 짜다가 any, unknown과 같은 타입은 부여할 경우가 거의 없다.

Q1. 이 코드에서 에러가 나는 이유는?

```ts
let 나이: string | number;
나이 + 1;
```

분명 자바스크립트에선 문자에도 +1이 가능하고 숫자에도 +1이 가능하다.<br>
하지만 위 코드는 에러가 발생한다.
<br>
Q2. 이 코드에서 에러가 나는 이유는?

```ts
let 나이: unknown = 1;
나이 + 1;
```

위 코드도 분명히 나이라는 변수는 1인데 +1가 되지 않는다.<br>

A. 둘 다 같은 이유

- 타입스크립트는 언제나 타입이 확실한걸 좋아한다고 위에서 말했듯이 지금 변경하려는 변수의 타입이 확실해야 연산을 수행한다.<br>
  그래서 -1은 확실하게 왼쪽에 있는게 number 타입일 때만 가능하다.<br>
- unknown 또한 number타입이 아니다.
- string|number 또한 number 타입이 아니다.(union type은 새로운 타입을 하나 만든 것이다.)
- +1 또한 마찬가지이다.
  <br>
  unknown 타입인 변수를 조작하려면 <br>
  내가 조작할 변수의 타입이 무엇인지 확실하게 체크하는 narrowing 또는 assertion 스킬을 사용해야한다.<br>
  그것이 타입스크립트의 근간이 되는 코딩방법이고,<br>
  변수에 뭐가 들어있을지 애매한, 추측해야하는 상황이 나오는 시점에선 반드시 사용해야한다.

<br>
<br>
Q. 다음 변수에 4개에 타입을 지정해보자.

```ts
let user = "kim";
let age = undefined;
let married = false;
let 철수 = [user, age, married];
// (조건)age 변수엔 undefined 말고 숫자도 들어올 수 있다.
```

<br>
A.

```ts
let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | number | undefiend | boolean)[] = [user, age, married];
```

<br>
Q. 학교라는 변수에 타입을 지정해보자.

```ts
let 학교 = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
```

A.

```ts
let 학교: {
  score: (number | boolean)[];
  teacher: string[];
  friend: string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
```
