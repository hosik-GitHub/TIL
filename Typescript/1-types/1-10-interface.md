# ⚡️ interface 문법

---

✏️ `interface 문법을 쓰시면 object 자료형의 타입을 보다 편리하게 지정가능하다.`</br>
예를 들어서 { color : 'red', width : 100 }</br>
이런 object를 만들고 싶은데 type을 미리 정의하고 싶으면 interface 키워드를 이렇게 만들어 볼 수 있다.

```ts
interface Square {
  color: string;
  width: number;
}
let 네모: Square = { color: "red", width: 100 };
```

- interface는 object랑 비슷한 모습으로 작성하면 된다.
- type alias와 용도와 기능이 똑같다.

1. 대문자로 작성하고,
2. { } 안에 타입을 명시해주면 된다.

만들어두면 앞으로 object 자료를 만들때 interface 만든걸 집어넣으면 간단하게 타입 지정이 가능하다.</br>
(참고로 한 줄이 끝나면 `,` 대신 `;` 도 가능하다)

---

# interface 장점

✏️ `extends도 가능하다.`
Student interface & Teacher interface가 필요하다고 가정해보자.</br>
Student 속성에는 name이 들어가야하고, Teacher는 name 속성과 age 속성이 들어가야한다.

```ts
interface Student {
  name: string;
}
interface Teacher {
  name: string;
  age: number;
}
// 위에 코드와 같이 작성을 하게 될 것이다.
// 하지만 이 코드에는 중복 사항이 보이게 된다.
// 그것을 해결해줄 수 있는 것이 extends 문법이다.
```

**extends 문법은 interface 여기에 복사해달라는 뜻이다.**

```ts
interface Student {
  name: string;
}
interface Teacher extends Student {
  age: number;
}
```

- Student interface를 extends 해달라고 적으면 Student 안에 있던걸 복사해서 Teacher에 넣어준다.
- 이제 Teacher 타입은 age, name 속성을 가지고 있다.

---

## type 키워드와의 차이점

type alias와 interface는 거의 똑같은 기능을 제공한다. </br>
그래서 차이점은 extends 문법이 약간 다르다 이런건데

```ts
interface Animal {
  name: string;
}
interface Cat extends Animal {
  legs: number;
}
```

➡ interface의 경우 일반적으로 이렇게 extends 한다.

```ts
type Animal = {
  name: string;
};
type Cat = Animal & { legs: number };
```

➡ type alias의 경우 extends는 안되고 & 기호를 쓰면 object 두개를 합칠 수 있다.</br>
이러면 Cat 타입은 name, legs 속성을 가질 수 있다.

```ts
interface Student {
  name: string;
}
interface Teacher {
  age: number;
}

let 변수: Student & Teacher = { name: "kim", age: 90 };
```

➡ 기호 쓰는걸 intersection이라고 부르는데 extends 와 유사하게 사용가능하다.</br>
(주의) extends 쓸 때 타입끼리 중복 속성이 발견될 경우 에러가 발생하는데 & 쓰면 때에 따라 아닐 수도 있다.
