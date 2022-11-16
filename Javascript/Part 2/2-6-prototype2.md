이전에 정리했던 prototype은 여러가지 특징이 있다. <br>

### 1. prototype은 constructor 함수에만 몰래 생성된다.

일반 object, array 만들어도 거기엔 prototype이 없다.<br>
그럼 일반 object 같은걸 상속하고 싶으면 어떻게 해야할까?<br>
constructor 함수를 만들던가 Object.create()를 쓰거나 class를 쓰거나<br>
셋 중 하나를 사용하면 된다.<br>

### 2. 내 부모님 유전자를 찾고 싶다면 `__proto__`를 출력해보면 된다.

부모로부터 생성된 자식 object들은 `__proto__`라는 속성이 있다.<br>
이걸 출력해보면 부모의 prototype이 출력된다.<br>
그래서 `__proto__`는 부모의 prototype과 같은 의미이다.<br>

```js
function 기계() {
  this.name = "Kim";
  this.age = 15;
}
var 학생1 = new 기계();
console.log(학생1.__proto__);
console.log(기계.prototype);
```

`학생1.__proto__`, `기계.prototype` 을 각각 출력해보면 똑같은 값이 나온다.<br>
"`__proto__`는 부모 prototype을 의미한다" 라고 알아두면 된다.<br>
그냥`__proto__`는 내 부모 유전자가 뭔지 유전자 검사하고 싶을 때 쓸 수 있는 그런 값이라고 생각하면된다.<br>

### `__proto__`를 직접 등록하면 object끼리 상속기능을 구현 가능하다.

`__proto__`는 부모의 prototype을 의미한다고 했다.<br>
그럼 어떤 object에다가 `__proto__`를 강제로 하나 설정해버리면 어떻게 될까?<br>

```js
var 부모 = { name: "Kim" };
var 자식 = {};

자식.__proto__ = 부모;
console.log(자식.name);
```

지금 부모와 자식 object를 하나씩 만들었다.<br>
그리고 셋째줄에서 자식의 `__proto__`에 부모를 집어넣었다.<br>
그럼 자식의 부모 유전자는 { name : 'Kim' }이라는 오브젝트가 되는 것이다.<br>
그렇게 되면 자식은 이제 자식.name 속성을 자유롭게 사용할 수 있다.<br>

### 4. 콘솔창에 prototype 정보들이 항상 출력된다.

```js
function 기계() {
  this.name = "Kim";
  this.age = 15;
}
기계.prototype.gender = "남";

var 학생1 = new 기계();
```

콘솔창에 학생1을 출력해보면 콘솔창에 name도 나오고 age도 나올텐데<br>
이상한 `__proto__` 이런 것도 나온다.<br>
![](https://velog.velcdn.com/images/hosickk/post/c5560a00-511b-42b9-87a3-62ce695ab493/image.png)
▲ `__proto__`가 부모의 유전자라고 위에서 언급했다.<br>
그래서 이걸 항상 까볼 수 있다. 기계.prototype이랑 똑같은 내용이 출력될 것이다.<br>
그리고 기계.prototype의 `__proto__`도 조회가능하다.<br>
<br>
이렇게 쭉 내부모의 부모까지 탐색할 수도 있다.<br>
탐색해보면 모든 object 자료형의 조상은 Object()라는 기계이며(일명 Object.prototype)<br>
모든 array 자료형의 조상도 Object()이다. (중간에 Array()라는 부모도 있다.)<br>
모든 함수 자료형의 조상도 Object()이다.<br>
