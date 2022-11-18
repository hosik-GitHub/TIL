# ⚡️ constructor

## 자바스크립트로 학생 출석부 만들기

```js
var 학생1 = { name : 'Kim', age : 15 };
var 학생2 = { name : 'Park', age : 15 };
...
```

이렇게 쭉 30명을 만들어야한다. 어떻게 하는게 가장 빠른 방법일까? <br>
오브젝트를 직접 중괄호쳐서 하드코딩 30개 하는 것보다는 <br>
비슷한 오브젝트들이니 복사를 하는게 좋을 것이다. <br>
근데 = 등호를 이용해서 var 학생2 = 학생1 복사하면 큰일나니 <br>
오브젝트를 복사해서 찍어낼 수 있는 새로운 문법을 사용해보자. <br>

```js
//var 학생1 = { name : 'Kim', age : 15 };

function 기계() {
  this.name = "Kim";
  this.age = 15;
}
```

object 자료 복사 기계 만들 땐 function이라는 함수 만드는 키워드를 빌려서 이용하면 된다. <br>
function을 하나 만들고 거기 안에 this.name과 this.age를 집어넣어주면 된다. <br>
이게 오브젝트 생성 기계이다.<br>
this는 새로 생성되는 오브젝트를 뜻한다.(인스턴스라고 한다.) <br>
<br>

#### Q. 그렇다면 this.name = 'Kim'은 무슨 뜻일까?

그냥 간단한 object 자료 추가/수정문법이다.<br>
새로 생성되는 오브젝트.name은 'Kim'을 넣어주세요~라는 뜻이었다.<br>
this를 이용해서 새로 복사될 object가 가질 값들을 디자인해놓으면된다.<br>
<br>

이제 기계에서 새로운 오브젝트를 뽑고 싶으면 아래와 같이 하면된다.

```js
//var 학생1 = { name : 'Kim', age : 15 };

function 기계() {
  this.name = "Kim";
  this.age = 15;
}

var 학생1 = new 기계();
var 학생2 = new 기계();
```

new라는 키워드를 쓴 다음 오른쪽에 기계(constructor) 이름을 쓴다면<br>
기계로부터 새로운 오브젝트를 하나 뽑아낼 수 있다.<br>
그리고 그러 변수에 저장하면 이제 자유롭게 오브젝트를 뽑아서 사용할 수 있다.<br>
<br>
비슷한 + 독립적인 object 자료를 여러개 만들 때 코드의 양이 줄어든다.<br>
그래서 사용하는 문법이다.<br>
특히 오브젝트안에 들어갈 내용이 복잡하고 많을 때 사용해보자<br>
<br>

## 오브젝트에 함수가 들어가야 한다면

심지어 함수도 오브젝트에 추가할 수 있다고 했다. <br>
그니까 예를 들면 모든 학생 오브젝트 안에 sayHi()라는 함수를 추가해야한다고 치자. <br>
학생1.sayHi()라고 사용하면 **콘솔창에 "안녕하세요 'Kim'입니다"라고 이름이 포함된 인삿말을 출력**해주어야한다.<br>

```js
var 학생1 = {
    name : 'Kim',
    age : 15
    sayHi : function(){
        console.log('안녕하세요' + this.name + ' 입니다');
    }
};

학생1.sayHi();
```

근데 학생1이란느 곳에다가만 하드코딩하는게 아니라 <br>
앞으로 모든 학생들이 sayHi()를 쓸 수 있게 만들고 싶으면 어떻게 해야할까? <br>
당연히 오브젝트 생성 기계에 추가를 하면 된다. <br>

기계에 sayHi()를 추가해보자

```js
function 기계() {
  this.name = "Kim";
  this.age = 15;
  this.sayHi = function () {
    console.log("안녕하세요" + this.name + " 입니다");
  };
}
var 학생1 = new 기계();
var 학생2 = new 기계();

학생2.sayHi();
```

기계에 저렇게 this.sayHi를 추가하면 이제 기계로부터 생성되는 모든 학생들이 sayHi()를 가지고 있다.<br>
그럼 학생1, 학생2 전부 sayHi()를 쓸 수 있게 된다.<br>

## 학생 오브젝트를 뽑을 때 각각 다른 name, age 값을 부여하고 싶다면?

지금까지 뽑은 오브젝트들의 문제가 있다.<br>
학생1이나 학생2나 name이 똑같아서 실용성이 없는 것 같다<br>
그렇다면 실제 name 속성을 각각 다르게 해서 뽑고싶으면 어떻게 해야할까?<br>
그것은 함수에 파라미터를 추가할 수 있음을 떠올리면 된다.<br>

```js
function 기계(이름) {
  this.name = 이름;
  this.age = 15;
  this.sayHi = function () {
    console.log("안녕하세요" + this.name + " 입니다");
  };
}
var 학생1 = new 기계("Park");
var 학생2 = new 기계("Kim");
```

함수에 파라미터를 추가한다면 앞으로 기계라는 함수를 쓸 때마다<br>
파라미터자리에 뭔가 데이터를 넣어서 실행할 수 있는 것이다.<br>
그래서 마지막줄 기계()를 쓸 때 데이터를 넣었다.<br>
<br>
그 'Park'이라는 데이터는 파라미터자리에 들어가서 함수가 실행되게 되며<br>
그럼 새로 생성되는 오브젝트의 name속성은 'Park'이 된다.(this.name = 'Park')<br>
그럼 이제<br>
학생1은 { name : 'Park', age: 15 }<br>
학생2는 { name : 'Kim', age: 15 }<br>
이렇게 출력된다.<br>
생성되는 오브젝트마다 각각 다른 값을 부여하고 싶다면 저렇게 함수의 파라미터를 이용하면된다.<br>
age도 바꾸고 싶다면 파라미터 한개를 더 추가하면 된다.<br>