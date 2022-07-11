> 변수 만들 때 타입 정하기(타입 실드 씌우기)

타입스크립트는 변수 만들 때 변수의 타입을 지정가능하다.

```ts
let 이름: string = "kim";
```

**변수명**: **타입** 이렇게 정하면 된다.
방금 우리는 변수에 실드를 씌운 것이다.
이제 **이름**이라는 변수는 string 타입이 되며
갑자기 숫자 이런걸 할당하려고 하면 실드로 튕겨낸다. (즉 에러가 나게 된다.)

> 타입은 여러가지가 있다.

자주 쓰는 Primitive types 들을 소개하자면
string, number, boolean 등이 있다.

```ts
let 이름: string = "kim";
let 나이: number = 20;
let 결혼여부: boolean = false;
```

(대문자 String이 아닌 소문자 string이다)
추가로 null, undefined도 있지만 굳이 사용하진 않는다.

> array 또는 ojbect 자료 안에도 타입 지정 가능

여러 자료를 한 곳에 저장하고 싶을 때 arry 또는 object 자료형을 사용한다.
근데 그 안에 들어갈 자료들도 전부 타입지정이 가능하다.

```ts
let 회원들: string[] = ["kim", "park"];
```

array 자료안에 들어갈 타입은 **타입명[]** 이렇게 지정하면 된다.
그럼 array 자료에 각각 string이라는 타입 실드를 장착한 것이다.

```ts
let 내정보: { age: number } = { age: 20 };
```

object 자료안에 들어갈 타입은 내가 만들 object와 똑같은 모습으로 지정하면 된다.
뭔가 이상해보이지만 **변수명 오른쪽에 오는 것들은 전부 타입지정 문법** 이다.
외우면 이상하지 않다.
위와 같이 age 속성에 number 실드를 씌워준 것이다.

```ts
let 이름: string = "kim";
이름 = 30;
```

타입을 잘 지정해준다면 타입이 실수로 변경될 때 이런 경고성 에러가 난다.
`Type 'number' is not assignable to type 'string'.(2322)`
엄격하게 타입을 지켜서 코드짜는걸 도와주는 에러이다.
(물론 이 에러는 ts에서만 나는 에러고 실제 변환된 .js 파일에선 별일이 없다)

> 하지만 오늘의 프로 팁은
> 타입을 굳이 적지 필요는 없다.
> **왜냐면 변수 생성시 타입스크립트가 타입을 자동으로 부여해주기 때문이다.**

```ts
let 이름 = "kim";
let 나이 = 20;
```

이렇게만 써도 자동으로 이름변수는 string, 나이 변수는 number를 가지고 있다.
(변수명에 마우스를 올려보면 바로바로 확인이 가능하다.)
array, object 만들 때도 자동으로 알아서 된다. 굳이 복잡하게 타입을 명시할 필요가 없다.

```ts
let 이름;
이름 = "kim";
```

심지어 변수만 만들고
나중에 가서 여기에 'kim'을 할당해도 타입이 자동으로 string으로 변한다.

Q. 다음과 같이 생긴 자료의 타입을 지정해보도록 하자.

```ts
let project = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};
// project 변수 우측에 적으면된다.
// member 안에 문자로 가득한 array만 들어올 수 있고
// days는 숫자, started는 true/false만 들어올 수 있다.
```

A.

```ts
let porject = {
    member : string[],
    days : number,
    started : boolean,
} = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
}
```
