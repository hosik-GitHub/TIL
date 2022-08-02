# ⚡️ 필드값 타입지정

---

- calss 내부에는 모든 자식 ojbect들이 사용 가능한 속성 같은걸 만들 수 있다.
- 예를 들어서 모든 Person 클래스의 자식들에게 data 라는 속성을 부여해주고 싶으면

```ts
class Person {
  data = 0;
}

let john = new Person();
let kim = new Person();

console.log(john.data);
console.log(kim.data);
```

➡ class 중괄호 안에다가 변수처럼 만들면 된다.
그럼 Person의 모든 자식에게 data = 0을 하나씩 복사해준다.</br>
당연히 자식들은 object 자료형이니 `.data`</br>
class 안에 만드는 속성을 필드라고 한다.</br>

위에 코드에는 타입이 없다</br>
data라는 속성엔 number만 들어올 수 있다고 타입을 지정해보자

```ts
class Person {
  data: number = 0;
}

let john = new Person();
john.data = "1"; // 문자할당시 에러가 발생한다.
```

---

# ⚡️ constructor 타입지정

- class는 간단히 말하면 object 복사기계라고 했다.
- 예를 들어 { name: 블라, age: 블라 } 이렇게 생긴 object 자료를 복사해주는 것을 만들어보자
- ES6 신문법에선 constructor 함수를 쓰면 된다.

```ts
class Person {
  constructor() {
    this.name = "kim";
    this.age = 32;
  }
}
// 이렇게 생겼지만 타입스크립트에선 이 문법이 맞지 않는다.
// Error : Property 'name' does not exist on type 'Person'
// this를 사용하고 싶다면 미리 필드값으로 만들어줘야 에러가 발생하지 않는다.
```

```ts
class Person {
  name;
  age;
  constructor() {
    this.name = "kim";
    this.age = 32;
  }
}
```

- 필드 값으로 name, age가 미리 정의되어있어야 constructor 안에서도 사용 가능하다.
  </br>

```ts
class Person {
  name;
  age;
  constructor(a) {
    this.name = a;
    this.age = 32;
  }
}
```

> constructor 함수엔 변수를 집어 넣을 수 있다고 했다.
> 그러면 이제 **new Person('hello')** 할 때 소괄호안에 들어가는 'hello' 이런 자료가 저기 a라는 파라미터자리에 들어간다.
> 하지만 위 코트 a라는 파라미터에 타입지정은 미리 해줘야한다.

```ts
class Person {
  name;
  age;
  constructor(a: string) {
    this.name = a;
    this.age = 32;
  }
}
```

함수같이 생긴 것들은 함수처럼 타입지정하면 된다.</br>
class 내부라고 다른건 없다.</br>

```ts
class Person {
  name;
  age;
  constructor(a: "kim") {
    this.name = a;
    this.age = 32;
  }
}
// 혹은 함수 문법 중에 기본 파라미터라는 것이 있다 (default parameter)
// 파라미터에 값을 입력 안하면 자동으로 할당해주는 그런걸 지정 가능한데
// 파라미터 = 자료 이렇게 쓴다
```

- constructor 함수는 return 타입지정을 하면 안된다.
- constructor에 의해서 항상 object자료가 생산되기 때문에
- 필드와 constructor는 똑같은 기능을 한다.
- 근데 new Person() 사용할 때 파라미터로 뭔가 집어 넣고 싶다면 constructor으로 만들어야한다.
