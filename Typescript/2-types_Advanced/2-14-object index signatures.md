object 자료에 타입을 미리 만들어주고 싶은데

1. object 자료에 어떤 속성들이 들어올 수 잇는지 아직 모르는 경우
2. 타입지정할 속성이 너무 많은 경우
   index signatures를 사용하면 편리하다. </br>

# ⚡️ index signatures

ojbect용 타입을 하나 만들고 싶다. 근데 아직 어떤 속성이 들어올지 모를땐 이렇게 작성해보자. </br>

```ts
interface StringOnly {
  [key: string]: string;
}

let obj: StringOnly = {
  name: "kim",
  age: "20",
  location: "seoul",
};
```

StringOnly 라는 interface를 하나 만들었다. </br>
근데 안에 타입을 적을 때 [생략 : string]: string 이렇게 적으면 </br>
모든 string으로 들어오는 Key값에 할당되는 value는 string이어야한다~라는 타입이 된다. </br>
**쉽게 말하면 {모든 속성 : string}** 이라는 뜻과 동일하다. </br>
이제 이 object에 들어오는 모든 속성은 우측에 string을 가져야한다. </br>
딱 코드 한 줄로 모든 속성 타입지정이 가능해서 편리할 수 있다. </br>

```ts
interface StringOnly {
  age: number; // 에러 발생
  [key: string]: string;
}

interface StringOnly {
  age: string; // 가능
  [key: string]: string;
}
```

[] 이 문법은 다른 속성과 함게 사용할 수 있지만 </br>
{ 모든 속성: string, age: number } 이것은 논리적으로 말이 되지 않아 금지시킨다. </br>

```ts
interface StringOnly {
  age: number; // 가능
  [key: string]: string | number;
}
```

{ 모든 속성: string | number, age: number } 이렇게 해주면 논리적으로 말이된다. </br>

</br>

## array 형태도 가능

자바스크립트에서 array와 object는 실은 별 다를게 없는 같은 자료형이다. </br>

```js
let obj = {
  0 : 'kim'
  1 : '20',
  2 : 'seoul'
}
console.log(obj[2]) //이러면 'seoul' 출력됨
```

object로도 array 처럼 사용이 가능하다 </br>
(object 자료도 대괄호쳐서 안에 있는 데이터를 뽑을 수 있다.) </br>

```ts
interface StringOnly {
	[key: number]: string,
}

let obj :StringOnly = {
  0 : 'kim'
  1 : '20',
  2 : 'seoul'
}
```

[] 여기 안에 key값의 타입을 number로 지정할 수도 있다.(대괄호 안엔 string 또는 number만 가능)</br>
그럼 이제 object의 키값이 숫자로 들어오는 경우 value로 string을 가져야한다는 타입이다.</br>
**쉽게 말하면 { 모든숫자속성:string}**이라는 뜻과 동일하다.</br>
그래서 array처럼 쓰고 싶은 object가 있으면 저렇게 타입지정도 가능하다는 소리이다.</br>
숫자 key만 넣을거면 그냥 array + tuple 타입 쓰는게 더 직관적일 수 있다.</br>

## Recursiv Index Signatures

아래와 같은 것을 타입지정할 생각 해본 적이 있나? </br>

```ts
let obj = {
  "font-size": {
    "font-size": {
      "font-size": 14,
    },
  },
};
```

object 안에 object 안에 object가 들어있다. </br>
실제로는 별로 쓸모가 없어보이지만 중첩된 object들을 한 번에 타입지정하려면 어떻게 해야할까? </br>
직접 interface 안에 {} 이걸 3번 중첩되게 만들어도 되긴 하지만 </br>

```ts
interface MyType {
  "font-size": {
    "font-size": {
      "font-size": number;
    };
  };
}
```

번거로울 경우 이런 테크닉을 사용할 수 있다. </br>

```ts
interface MyType {
  "font-size": MyType | number;
}

let obj: MyType = {
  "font-size": {
    "font-size": {
      "font-size": 14,
    },
  },
};
```

MyType을 만들었는데 </br>
'font-size' 속성은 MyType 이거랑 똑같이 생겼다고 타입을 만들었다. </br>
그럼 이제 타입을 번거롭게 길게 중첩해서 안써도 된다. </br>
그리고 object자료가 4중첩 5중첩 X중첩되어도 대응 가능하다. </br>
