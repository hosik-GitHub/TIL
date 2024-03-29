# ⚡️getter, setter

자바스크립트 getter, setter 문법은 <br>

- 오브젝트 내의 함수들을 괄호없이 쓸 수 있게 만들어주는 키워드
- 데이터의 무결성을 보존하기 위해 쓰는 키워드

### 함수로 object 데이터를 꺼내는 방법

```js
var 사람 = {
  name: "Kim",
  age: 30,
};
```

내년 나이를 출력해보고 싶으면 어떻게 할까?<br>
내년 나이를 출력해주는 함수를 만들면<br>

```js
var 사람 = {
  name: "Kim",
  age: 30,
  nextAge() {
    return this.age + 1;
  },
};
```

이렇게 함수를 만들어놓으면<br>
사람.nextAge() 이렇게 사용하면 내년 나이가 31이라고 출력될 것이다.<br>
<br>

함수를 만들어 사용하는 이유는<br>

- object 안의 데이터가 복잡할 수록 함수 만들어놓는게 데이터를 꺼내기가 쉽다.
- 내부에 있는 name, age 변수를 건드리지 않아서 실수를 방지할 수 있어서 안전하다.
  특히 매우 긴 object 안에 원하는 자료 몇개만 뽑고 싶을 때 함수를 만들어 놓으면 매번 기능 개발해줄 필요가 없다.
  <br>
  다른 언어에선 코드가 class 단위로 동작하는데<br>
  class 안에 가끔 외부로부터 보호하고 싶은 변수들이 있다.<br>
  그럴 때 저런 함수를 많이 만들어 사용한다. <br>

### 함수로 Object 데이터를 수정하는 방법

데이터 수정을을 위한 함수를 만들면

```js
var 사람 = {
  name: "Kim",
  age: 30,
  setAge(나이) {
    this.age = 나이;
  },
};
```

setAge()라는 함수를 오브젝트 내에 추가했다.<br>
그리고 이 함수는 파라미터를 한개 입력할 수 있는데 그 파라미터를 그대로 this.age에 집어넣어주는 역할을 한다.<br>
**사람.setAge(40)** 이렇게 쓰면 자유롭게 나이 변경이 가능하다.<br>
<br>
사람.age = 40 이렇게 쉽게 안하고 사람.setAge(40) 굳이 이렇게 하는 이유는<br>

- 내부에 있는 name, age 변수를 직접 건드리지 않아서 실수를 방지할 수 있다.<br>

```js
사람.setAge("150");
```

▲ 나이에 숫자를 집어넣어야하는데 이렇게 실수로 문자로 집어넣으면 <br>
그냥 잘 저장된다. 즉 데이터가 오염된다는 소리다.<br>
나중에 나이에 1을 더하고 싶을 때 에러가 발생할 수 있다.<br>
<br>

그렇기 때문에 데이터 수정하는 함수를 사용하면 데이터의 오염없이 안전하게 더해줄 수 있다.

```js
var 사람 = {
  name: "Kim",
  age: 30,
  setAge(나이) {
    this.age = parseInt(나이);
  },
};

사람.setAge("200"); //문자 넣었는데도 숫자 200으로 저장됨
```

▲ setAge()라는 함수안에 기능을 하나 추가했다.<br>
parseInt()라는 함수는 '150' 같은 문자를 숫자 150으로 바꿔주는 자바스크립트 내장함수다.<br>
이렇게 문자를 집어넣어도 숫자로 바꿔주는 안전장치도 이렇게 쉽게 개발이 가능한 것이다.<br>

### 함수 쓰기 복잡하다면 get/set 키워드

함수를 만들어쓴다면 단점이 있다.<br>
setAge(40) 이렇게 소괄호까지 써야되고 뭔가 데이터 집어넣기 너무 복잡해진다.<br>
그렇다면 get/set 키워드를 함수 옆에 추가하면 된다.<br>

```js
var 사람 = {
  name: "Kim",
  age: 30,
  set setAge(나이) {
    this.age = parseInt(나이);
  },
};

사람.setAge = 40; //set 키워드를 추가하면 이렇게 함수를 사용가능
```

▲ setAge() 함수 만들 때 왼쪽에 set이라는 키워드를 추가하면<br>
이제 등호로 데이터를 입력하거나 할 수 있다. 이렇게 함으로써 보기도 쉽고 좀 더 직관적이다<br>
그래서 set을 사용한다. 그리고 set 붙은 함수들은 setter라구 부른다.<br>

```js
var 사람 = {
  name: "Kim",
  age: 30,
  get nextAge() {
    return this.age + 1;
  },
};

console.log(사람.nextAge); //get 키워드를 추가하면 이렇게 함수를 사용가능
```

▲ nextAge()라는 함수를 만들 때 get 키워드를 사용가능하다.<br>
그러면 이제 소괄호 없이 nextAge를 사용해서 데이터를 꺼낼 수 있다.<br>
get 붙은 함수들은 getter라고 부른다.<br>

#### get/set 사용하는 기준

데이터를 뽑아주는, 가져와주는, get 해주는 함수들은 get 쓰면 되고<br>
데이터를 입력해주는, 수정해주는, set 해주는 함수들은 set을 쓰면 된다.<br>
그리고 여기에 규칙도 있는데<br>
set 함수는 데이터를 입력해서 수정해주는 함수니까 파라미터가 한개 꼭 존재해야하고<br>
get 함수는 파라미터가 있으면 안되고 함수 내에 return을 가져야한다.<br>

### class에서 사용하는 get/set

class 안에서 함수 만들 때 get/set 키워드를 이용해서 getter/setter 식으로 함수를 만들 수 있다.

```js
class 사람 {
  constructor() {
    this.name = "Park";
    this.age = 20;
  }
  get nextAge() {
    return this.age + 1;
  }
  set setAge(나이) {
    this.age = 나이;
  }
}

var 사람1 = new 사람();
```

class 안의 함수들을 getter/setter로 만들고 쓰고 싶으면 위 코드 참고<br>
이제 새로 뽑힌 object인 사람1은 `사람1.netxAge;` , `사람1.setAge = 50;` 이렇게 사용할 수 있다.<br>
<br>
class에서 getter/setter 용도는 위에서 설명한 내용과 똑같다.<br>
새로 뽑힌 오브젝트들은 내용을 편리하게 수정할 때 사용한다.<br>
굳이 get/set 키워드가 없어도 상관없다.<br>
