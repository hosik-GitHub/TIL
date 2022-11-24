# ⚡️ class

class 라는 문법은 <br>
constructor, prototype을 이용한 상속기능을 만들 수 있게 도와주는 문법이다.<br>
기존 function부터 시작하던 문법과 기능상 차이는 크게 없고 약간 더 보기 쉽게 표현해줄뿐이다.<br>

## ES6 class 키워드로 구현하는 constructor 기계만들기

지난 정리에 constructor라는건 오브젝트 뽑는 기계라고 정리했었다.<br>
ES6 class라는 신문법으로 constructor를 만드려면 아래 코드를 참고<br>

```js
class 부모 {
  constructor() {
    this.name = "Kim";
  }
}

var 자식 = new 부모();
```

예전 function 부모(){} 이렇게 기계를 만드는 문법과 똑같은 문법이다.<br>
이제 new 키워드를 이용해서 방금 만든 부모라는 기계에서 오브젝트를 새로 생성할 수 있는 것이다.<br>
constructor()라고 쓴 부분에 예전처럼 this.name 하시면 새로 생성되는 오브젝트들에 값을 부여 할 수 있다.<br>

### 상속가능한 함수를 추가하려면?

1. 함수를 this.sayHi 이렇게 constructor 안에 추가하는 방법<br>
2. 기계의 prototype에 추가하는 방법<br>
   ▼ 1번은

```js
class 부모 {
  constructor() {
    this.name = "Kim";
    this.sayHi = function () {
      console.log("hello");
    };
  }
}

var 자식 = new 부모();
```

그럼 새로 생성되는 자식은 sayHi() 함수를 직접 가지게 되며 자유롭게 쓸 수 있다.<br>

▼ 2번처럼 prototype에 추가하려면

```js
class 부모 {
  constructor() {
    this.name = "Kim";
  }
  sayHi() {
    console.log("hello");
  }
}

var 자식 = new 부모();
```

오브젝트에 함수 추가하듯이 하면 된다.<br>
그럼 자식은 sayHi()라고 썼을 때 부모의 prototype에 있던 sayHi() 함수를 쓸 수 있다.<br>
(혹은 부모.prototype.sayHi = function(){} )<br>

### 참고로 알아두는 Object.getPrototypeOf()

이 함수 안에 오브젝트를 넣으면 부모 prototype을 출력해준다.<br>
이 오브젝트가 대체 누구로부터 prototype을 상속받고 있는지를 알려주는 함수<br>
`__proto__`라는 키워드와 비슷한 역할을 한다고 보면 된다.<br>

### constructor안에 파라미터 추가하기

ES6 방식으로 constructor 만들 때 파라미터를 추가하려면 이렇게 하면 된다.

```js
class 부모 {
  constructor(이름, 나이) {
    this.name = 이름;
    this.age = 나이;
  }
}
var 자식 = new 부모("Park", 30);
```

이런 식으로 하면 파라미터를 넣어서 constructor를 만들 수 있다.<br>
(자식을 생성할 때 파라미터 두개를 입력할 수 있음)<br>

### prototype 내에 함수 여러개 추가하기

```js
class 부모 {
  constructor(이름, 나이) {
    this.name = 이름;
    this.age = 나이;
  }
  sayHi() {
    console.log("안녕");
  }
  sayHello() {
    console.log("안녕하세요");
  }
}

var 자식 = new 부모("Park");
```
