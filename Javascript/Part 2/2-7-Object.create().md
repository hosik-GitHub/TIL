Prototype, this, class가 어렵다면 ES5 방식으로 하는 방법도 있다.<br>
ES5 출시 때 나온 Object.create()라는 문법이 있는데<br>
내가 상속을 이용해서 오브젝트를 만들고 싶다면 이것보다 더 쉬운 문법이 없다.<br>

## Object.create() 사용하기

objcet.create(부모object);<br>
이렇게 사용하면 이 자리에 오브젝트 자료형 하나가 남는다.<br>
그리고 소괄호 안에 적은 부모object가 유전자(prototype)가 되는 것이다.<br>

```js
var 부모 = { name: "Kim", age: 50 };
var 자식 = Object.create(부모);

console.log(자식.age); //50나옴
```

위와 같이 쓴다는 이야기이다.<br>
그럼 자식이라는 object는 부모를 prototype으로 두게 된다.<br>
그럼 자식.name 해도 'Kim'이 출력되고, 자식.age 해도 50이 출력된다.<br>

## 자식이 age를 바꾸고 싶으면?

위 코드중 age를 20으로 바꿔보자.

```js
var 부모 = { name: "Kim", age: 50 };
var 자식 = Object.create(부모);
자식.age = 20;

console.log(자식.age); //20 나옴
```

그냥 자식이라는 object에 age:20 이라는 값을 부여했을 뿐이다.<br>
그럼 이제 자식.age 할 때마다 20이 출력된다.<br>

#### Q. 부모로부터 상속받은 50이라는 age가 출력되지 않은 이유는 무엇일까?

> 자바스크립트 오브젝트 자료형에서 특정 자료를 꺼낼 때 묻는 순서가 있다고 정리하였다.
> 자식.age를 꺼내주세요~ 라고 하면

1. 자식이라는 object가 직접 age를 가지고 있으면 그걸 출력
2. 없으면 자식의 부모 prototype을 뒤져서 age가 거기 있으면 그걸 출력
3. 거기도 없으면 부모의 부모 prototype을 ...(생략)
   이런 순서로 age를 출력한다.
   그래서 지금 자식은 20이라는 값이 출력되는 것이다.

## 손자도 쉽게 만들 수 있다.

자식의 자식도 쉽게 만들 수 있다는 이야기이다.<br>
부모가 가진 속성, 자식이 가진 속성을 전부 물려받는 손자를 만들어보자.<br>

```js
var 부모 = { name: "Kim", age: 50 };
var 자식 = Object.create(부모);
자식.age = 20;

var 손자 = Object.create(자식);

console.log(손자.age);
```

이게 상속의 상속을 받는 방법이다.<br>
갑 추가도 object 다루듯이 하면 되고, 함수 추가하는 것도 그냥 등호로 넣으면 되니까 쉽다.<br>
<br>

하지만 요즘엔 class, 그리고 extends 문법을 이용해서 상속의 상속기능을 만들어낸다.<br>
![](https://velog.velcdn.com/images/hosickk/post/d23c59da-b86a-446b-a6d0-f8a473aefb9b/image.png)
▲ 특히 옛날 리액트 문법으로 짜여진 코드를 볼 때 extends 문법을 볼 수 있다.
