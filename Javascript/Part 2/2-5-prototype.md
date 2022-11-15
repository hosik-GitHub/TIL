# ⚡️ prototype

저번에 다뤘던 내용은 객체지향 용어로 **상속(Ingeritance)**이라고 한다.<br>
기계라는 constructor가 가진 Name, age 속성들을 그대로 물려받아서 오브젝트를 하나 뽑아주는게
재산 물려주는 상속과 비슷하다고 해서 상속이라고 부른다.<br>
(그래서 상속해주는 것은 부모, 상속받는 오브젝들은 자식이라고 많이 비유해서 부른다.)<br>
<br>
근데 자바스크립트엔 constructor 말고도 상속기능을 구현할 수 있는 장치가 하나 더 있다.<br>
그것이 prototype이다.<br>

## 기계를 만들면 prototype이라는 항목이 기계 안에 몰래 생성된다.

```js
function 기계() {
  this.name = "Kim";
  this.age = 15;
}
var 학생1 = new 기계();
var 학생2 = new 기계();

console.log(기계.prototype);
```

갑자기 알게된 prototype이라는 비밀 공간은 왜 존재하고 어디에 쓰는 거냐면<br>
이것이 바로 **부모의 유전자역할**을 해주는 일종의 비밀 공간이라고 보면된다.<br>
<br>
prototype은 자식들이 물려받을 수 있는 유전자라고 생각하면된다.<br>
기계.prototype은 기계의 유전자이다.<br>
기계.prototype에 뭔가 변수나 함수가 들어가있다면<br>
기계로부터 생성되는 새로운 오브젝트들(자식들)은 전부 그걸 그대로 물려받아 쓸 수 있다.<br>

```js
function 기계() {
  this.name = "Kim";
  this.age = 15;
}

기계.prototype.gender = "남";
var 학생1 = new 기계();
var 학생2 = new 기계();

console.log(학생1.gender); //'남'이 출력
```

기계의 prototype이라는 곳에 { gender: '남' } 이라는 Key/value 한쌍을 저장했다.<br>
(prototype은 저렇게 오브젝트 자료형 다루듯이 하면 된다.)<br>
<br>
기계의 prototype, 즉 유전자에 gender: '남'이라는 데이터를 추가한 것이다.<br>
이제 학생1, 학생2 같은 기계로부터 생성되는 모든 자식들은 gender라는 속성을 사용할 수 있다.<br>
<br>
(참고)

- prototype에는 값을 여러개 부여할 수도 있고 심지어 함수도 집어넣을 수 있다.
  object 자료처럼 다뤄주면 된다.
- prototype에 추가된 데이터들은 자식들이 직접 가지는게 아니라 부모만 가지고 있다.

## 작동원리

prototype에 추가한 데이터는 자식들이 자유롭게 가져다 쓸 수 있는지 궁금하다고 가정해보자<br>
<br>
자바스크립트는 오브젝트에서 데이터를 뽑을 때 확인하는 순서가 있다.<br>
예를 들면<br>

```js
function 기계() {
  this.name = "Kim";
  this.age = 15;
}
기계.prototype.gender = "남";
var 학생1 = new 기계();

console.log(학생1.gender);
```

▲ 학생1.gender라고 사용하면 '남'이 출력된다. 그 이유는 <br>
자바스크립트는 오브젝트에서 값을 출력할 때 이런 순서로 물어본다. <br>
(1) 학생1에 직접 gender라는 값이 있는가? <br>
(2) 그럼 부모 유전자에 gender라는 값이 있는가? <br>
(3) 그럼 부모의 부모 유전자에 gender라는 값이 있는가? <br>
(4) 그럼 부모의 부모의 부모의 유전자에 .. 그게 있는가?<br>
<br>

자바스크립트는 이런 알고리즘으로 작동한다.<br>
그냥 쉽게말하자면 오브젝트에서 값을 뽑을 때<br>

1. 내가 직접 가지고 있는지 검사<br>
2. 내가 가지고 있지 않으면 부모 유전자들을 차례대로 검사<br>

그래서 학생1이라는 오브젝트가 gender라는 값을 가지고 있지 않지만<br>
부모의 유전자(기계.prototype)에 있는 gender라는 걸 출력할 수 있는 이유이다.<br>
<br>

## 작동원리2 : 자바스크립트 내장함수 toString()을 쓸 수 있는 이유

자바스크립트 array, object 들에는 불일 수 있는 내장함수들이 많다.<br>
sort, push, toString, map, forEach 등 이런 것들을 array에 붙여서 사용 가능하다.<br>

```js
var arr = [1, 2, 3];
console.log(arr.toString()); // 가능
```

내가 만든 array에 arr.toString() 이렇게 붙일 수 있는 이유는<br>
내가 만든 array의 부모 유전자가 toString()을 가지고 있게 때문이다.<br>

#### 내가 만든 array는 부모 기계로 부터 뽑은게 아닌데 무슨 소리냐?

array나 object 자료형 만들 때 부모가 있긴 있다.

```js
var arr = [1, 2, 3];
var arr = new Array(1, 2, 3);
```

▲ 위 코드 두줄은 같은 완전 똑같은 의미이다.<br>
위는 인간이 array 만드는 방식, 밑은 컴퓨터가 array 만드는 방식이다.<br>
new 키워드를 항상 이용해서 array/object를 만들어준다.<br>
<br>
그럼 new Array()란?<br>
Array라는 기계로부터 자식을 하나 새로 뽑아주세요란 뜻이다.<br>
그래서 Array로부터 생성된 자식들은 Array의 유전자에 부여되는 함수, 데이터들을 자유롭게 사용할 수 있다.<br>
Array라는 기계의 유전자가 진짜 있는지 확인은 콘솔창에 출력해보면 된다.

```js
console.log(Array.prototype);
```

이렇게하면 어떤 것이 출력될까? 평소에 쓰던 sort, map, push, forEach 이런 것들이 등장한다.<br>
그래서 Array의 자식들은 전부 이런 함수들을 쉽게 가져다 쓸 수 있었던 것이다.<br>
<br>
object 자료형도 똑같이 new Object() 이런 식으로 만들어주기 때문에 부모의 prototype에 있던 함수들을 자유롭게 사용가능하다.<br>
이것이 내장함수들의 비밀이다.<br>

#### Q. 그럼 prototype으로 상속시키는거랑 constructor로 상속시키는거랑 무슨 차이일까?

A. 자식들이 값을 직접 소유하게 만들고 싶으면 constructor로 상속시키면 되고<br>
부모만 가지고 있고 그걸 참조해서 쓰게 만들고 싶으면 prototype으로 상속시키면된다.<br>
보통은 그래서 상속할 수 있는 함수 같은 것들은 prototype으로 많이 만들어 놓는다.<br>
