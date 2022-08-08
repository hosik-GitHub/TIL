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

---

# 타입이름 중복선언시

```ts
interface Animal {
  name: string;
}
interface Animal {
  legs: number;
}
```

➡ interface의 경우 타입이름 중복선언을 허용해주며 중복시 extends 한 것이랑 동일하게 동작한다.</br>
이러면 Animal 타입은 name, legs 속성을 가질 수 있다.</br>
(장점)type 선언을 자주 쓰는 외부 라이브러리 이용시 type 선언을 내가 덮어쓰기, override 하기 편리하다.</br>

```ts
type Animal = {
  name: string;
};
type Animal = {
  legs: number;
};
```

- type의 경우 중복선언을 허용하지 않는다.(이 경우 에러가 발생한다.)
  그래서 일반적인 상환에선 type를 자주 활용하면 되는데</br>
  다른 사람이 내 코드를 이용하는 상황이 많으면 inferface로 유연하게 만드는 것이 좋다.</br>
  그래서 타입스크립트로 작성된 라이브러리들은 interface로 타입정해놓은 곳이 많다.</br>
  혹은 object 자료형은 전부 interface로 만들고 다른 자료형은 type 키워드로 만들고 이런 것들도 괜찮다.</br>
  `type과 interface 문법을 잘 알고 있으면 기준은 정하기 나름이다.`

---

# extend 할 때 ojbect 안의 속성이 중복될 경우

```ts
interface Animal {
  name: string;
}
interface Dog extends Animal {
  name: number;
}
```

Animal을 복사해서 Dog interface를 만들었다</br>
근데 name 속성이 중복되는데 이렇게 코드를 작성하게되면 에러가 발생한다.</br>

```ts
interface Animal {
  name: string;
}
interface Dog {
  name: number;
}

let 변수: Dog & Animal = { name: "명멍" };
```

& 연산자 Dog, Animal을 합쳐봤다.</br>
근데 name 속성이 중복되는데 이것 또한 에러가 발생하게 된다.</br>
interface 말고도 type 키워드도 똑같은 현상이 일어난다.</br>
</br>
(주의) 근데 name :string, name :number 라서 에러가 나는 것이지</br>
둘다 name :string 타입이면 에러가 나지 않는다. 하나로 합쳐준다.</br>
