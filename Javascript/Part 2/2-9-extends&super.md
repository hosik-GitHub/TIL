## class를 상속한 class를 만들고 싶을 때 쓰는 extends

```js
class 할아버지 {
  constructor(name) {
    this.성 = "Kim";
    this.이름 = name;
  }
}
```

위 코드에서 new 할아버지() 이런식으로 새로운 object를 쉽게 생성할 수 있다.<br>
그런데 이 class가 너무나도 유용한 나머지 이것과 유사한 class를 하나 더 만들고 싶다.<br>
그러면 직접 class를 하나 더 만들어서 내용을 복붙하면 될까?<br>
class안에 복사할 내용이 너무나도 많으면 코드가 길어진다.<br>

그래서 extends라는 문법을 사용하는데<br>
이걸 이용해서 class를 만들면 기존에 있던 class의 내용을 그대로 복붙해서 만들어낼 수 있다.<br>
**"다른 class를 상속해서 만들 수 있게 도와주는 문법"**<br>

그래서 할아버지 class를 상속하는 아버지 class를 만들어보자

```js
class 할아버지 {
  constructor(name) {
    this.성 = "Kim";
    this.이름 = name;
  }
}

class 아버지 extends 할아버지 {}
```

extends는 이렇게 쓰면된다.<br>
그럼 이제 할아버지라는 class를 그대로 복붙한 아버지라는 class가 생성된다.<br>
진짜 class가 생겼는지 확인해보고싶다면, `new 아버지();`를 테스트해보면된다.<br>

**new 아버지('만수');** 이렇게 하면 성과 이름을 가진 object 자료가 하나 생성된다.<br>

### 근데 아버지라는 class에는 새로운 속성을 추가하고 싶으면

당연히 아버지 constructor안에 내용을 추가하면 된다.

```js
class 할아버지 {
  constructor(name) {
    this.성 = "Kim";
    this.이름 = name;
  }
}

class 아버지 extends 할아버지 {
  constructor() {
    this.나이 = 50;
  }
}
```

이렇게 하면 new 아버지() 했을 때 생성된 오브젝트들은 {성, 이름, 나이} 속성들을 가질 것 같지만
super를 써야한다고 에러가 발생한다.

```js
class 할아버지 {
  constructor(name) {
    this.성 = "Kim";
    this.이름 = name;
  }
}

class 아버지 extends 할아버지 {
  constructor() {
    super();
    this.나이 = 50;
  }
}
```

super()라는 함수는<br>
**"extends로 상송죽인 부모 class의 constructor()"**를 의미한다.<br>
쉽게 말하면 할아버지 class의 constructor()와 똑같다는 소리다.<br>
그래야 이제 에러없이 this.나이 이런 것들을 추가할 수 있다.<br>

근데 할아버지 class의 constructor()에는 name 파라미터를 입력할 수 있었다.<br>
그것도 똑같이 따라서 명시해주어야 할아버지가 가진 모든 속성들을 정확히 상속받을 수 있다.<br>

```js
class 할아버지 {
  constructor(name) {
    this.성 = "Kim";
    this.이름 = name;
  }
}

class 아버지 extends 할아버지 {
  constructor(name) {
    super(name);
    this.나이 = 50;
  }
}
```

할아버지 constructor()에 name이라는 파라미터가 있던걸 그대로 아버지 constructor()에도 따라했다.<br>
이제 new 아버지(); 할 때 파라미터를 입력하면 this.이름 속성에 들어가게된다.<br>

> **Q. 위 코드 하단에 var a = new 아버지('만수'); 이렇게 적으면 a라는 변수는 어떤 내용을 가지고 있을까?**

1. a라는 변수는 아버지라는 class로부터 새로 생성된 오브젝트<br>
2. 그래서 할아버지가 가지고 있던 성, 이름 그리고 아버지가 가지고 있던 나이를 전부 물려받았다.<br>
3. 그리고 this.이름 자리에는 '만수'를 넣어 실행했다<br>
   그래서 { 성: 'Kim', 이름 : '만수', 나이 : 50 } 이라는 오브젝트가 된다.

### 할아버지에 메소드(함수)를 추가한다면

할아버지 class 안에 함수를 추가한다면 아버지 class의 자식들도 물려받아 쓸 수 있을까?

```js
class 할아버지 {
  constructor(name) {
    this.성 = "Kim";
    this.이름 = name;
  }
  sayHi() {
    console.log("안녕 나는 할아버지");
  }
}

class 아버지 extends 할아버지 {
  constructor(name) {
    super(name);
    this.나이 = 50;
  }
}

var a = new 아버지("만수");
```

그럼 이제 a라는 오브젝트는 sayHi() 함수를 쓸 수 있다<br>
a라는 오브젝트가 a.sayHi() 이렇게 사용한다면<br>

1. a라는 오브젝트에 sayHi가 있는지 물어보고<br>
2. 없으면 아버지.prototype에 sayHi가 있는지 물어보고<br>
3. 없으면 할아버지.Prototype에 sayHi가 있는지 물어보고<br>
   이런 식으로 sayHi를 실행하기 위해 부모님을 뒤져본다.<br>

근데 sayHi()라는건 할아버지.prototype에 추가된 함수이기 때문에<br>
a라는 오브젝트는 sayHi() 함수를 실행할 수 있다.<br>

### class간에 함수를 상속하고 싶으면?

아버지라는 class에 함수를 만들고 싶다.<br>
근데 할아버지 class에 있던 sayHi()라는 함수가 너무나도 유용한 나머지<br>
이걸 그대로 아버지 class에 가져와서 활용하고 싶다.<br>
그러면 이 때도 super를 사용하면 된다.<br>

```js
class 할아버지 {
  constructor(name) {
    this.성 = "Kim";
    this.이름 = name;
  }
  sayHi() {
    console.log("안녕 나는 할아버지");
  }
}

class 아버지 extends 할아버지 {
  constructor(name) {
    super(name);
    this.나이 = 50;
  }
  sayHi2() {
    console.log("안녕 나는 아버지");
    super.sayHi();
  }
}

var a = new 아버지("만수");
```

super라는걸 저렇게 prototype 함수 안에서 쓰면 아까의 super와 약간 다른 의미가 된다.<br>
여기서 super는 **부모 class의 Prototype**을 의미한다.<br>

1. constructor 안에서 쓰면 부모 class의 constructor<br>
2. prototype 함수 안에서 쓰면 부모 class의 prototype<br>

> **Q. 위 코드에서 a.sayHi2()를 실행하면 무엇이 콘솔창에 출력될까?**
> a.sayHi2() 사용한다면 아버지.prototype에 있던 sayHi2 함수가 동작한다.<br>
> 그 함수는 일단 console.log('안녕 나는 아버지')를 실행하고<br>
> 둘째 줄에서 super.sayHi()를 실행한다. 이건 다른말로 할아버지.prototype.sayHi()와 똑같기 때문에 console.log('안녕 나는 할아버지')를 실행
