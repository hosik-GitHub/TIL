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
