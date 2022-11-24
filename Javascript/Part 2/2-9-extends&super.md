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
