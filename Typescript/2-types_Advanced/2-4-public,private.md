# ⚡️ public, private 키워드로 사용제한두기

---

타입스크립트는 class 안에서 public 키워드를 사용 가능하다.</br>
원하는 속서 왼쪽에 붙이면 그 속성은 아무데서나 수정이 가능하다.</br>

```ts
class User {
  public name: string;

  constructor() {
    this.name = "kim";
  }
}

let 유저1 = new User();
유저1.name = "park"; // 가능
```

**public이 붙은 속성은 자식 object들이 마음대로 사용하고 수정가능하다.**</br>
실은 public 붙이든 안붙이든 똑같긴 하다.</br>
왜냐면 필드값을 같은걸 만들면 public이 몰래 왼쪽에 부여되기 때문이다.</br>
</br>
(참고) public 키워드는 class 내의 prototype 함수에도 붙일 수 있다.</br>
</br>

**근데 private 키워드를 붙이면 수정이 불가능해진다.**</br>
무조건 class{} 중괄호 안에서만 수정 및 사용이 가능하다.</br>
심지어 class로 부터 생산된 자식 object에서도 private 붙은건 사용 불가능하다.</br>
(class 중괄호의 내부가 아니기 때문이다.)</br>

```ts
class User {
  public name: string;
  private familyName: string;

  constructor() {
    this.name = "kim";
    let hello = this.familyName + "안뇽"; // 가능
  }
}

let 유저1 = new User();
유저1.name = "park"; // 가능
유저1.familyName = 456; // 에러남
```

secretld 라는 속성에는 private 키워드를 추가했더니 아무데서나 수정이 불가능해졌다.</br>
**private 붙은 속성들은 오직 class{} 안에서만 수정이 가능**하다.</br>
이렇게 속성을 외부에서 숨기고 싶을 때 private 키워드를 이용한다.</br>
실은 오리지널 자바스크립트 문법에서도 `#`이걸 속성옆에 붙이면 private 속성이 된다.</br>
</br>
(참고) private 키워드는 class 내의 함수에도 붙일 수 있다.</br>
</br>

> **Q. private 부여된 속성을 class 밖에서 수정해야할 경우?**

1. private 속성을 수정하는 함수를 class 안에 만들어서
2. 함수를 실행시키면 된다.

```ts
class User {
  public name: string;
  private familyName: string;
  constructor() {
    this.name = "kim";
    let hello = this.familyName + "안뇽";
  }
  changeSecret() {
    this.familyName = "park";
  }
}
let 유저1 = new User();
유저1.familyName = "park"; //에러남
유저1.changeSecret(); //가능
```

1. changeSecret() 함수를 class 안에 만들었다.
   이 함수는 familyName을 수정해주는 함수
2. 그러면 이제 class 바깥에서도 changeSecret() 함수를 이용하면 간접적으로 familyName을 수정가능하다.
   함수 불러도 에러안나고 수정 잘된다.
   중요한건 아니니 참고 정도로 알아두자

### Q.private를 활용법

A. 개발을 하다보면 소중하게 지켜주고 싶은 중요한 변수나 속성들이 있다.</br>
예를 들면 위의 예제에선 `familyName ` 이런건데 이걸 외부에서 실수로 수정하거나 그러면 큰일날 것 같은 그런 속성들이다.</br>
이걸 외부에서 실수로 수정하지 않도록 지켜주고 싶으면 `private`를 붙여보길 바란다.</br>
그리고 이걸 쓰면 함수를 만들어서 수정해야하니 약간의 안전장치를 더해서 개발이 가능하다.</br>
버그를 예방해주는 키워드이며, react-redux를 하다보면 자주 보게 될 패턴이다.</br>
</br>

# Public, private 키워드 쓰면 이런 것도 가능하다.

constructor 안에서 this.name = name 이런걸 생략할 수 있다.

```ts
class Person {
  name;
  constructor(name: string) {
    this.name = name;
  }
}
let 사람1 = new Person("john");

class Person {
  constructor(public name: string) {}
}
let 사람1 = new Person("john");
```

위 두개의 코드는 같은 역할을 하는 코드이다.</br>
"constructor 파라미터에 public 붙이면 this.name = name 이거 생략가능하다" 라는걸 참고하면 되며</br>
이제 Person으로부터 새로 생산되는 object들은 name 속성을 가질 수 있다.
