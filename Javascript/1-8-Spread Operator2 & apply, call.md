### 3. array를 파라미터 형태로 집어넣고 싶을 때

```js
function 더하기(a, b, c) {
  console.log(a + b + c);
}
더하기(1, 2, 3);
```

파라미터를 3개 받아와서 전부 더해주는 더하기라는 함수를 만들었다. <br>
그런데 여기 파라미터를 집어넣을 때 직접 1,2,3이라고 작성해서 넣는게 아니라 <br>
이미 존재하는 array에 있던 내부 자료들을 집어넣고 싶으면 어떻게할까? <br>

```js
function 더하기(a, b, c) {
  console.log(a + b + c);
}
var 어레이 = [10, 20, 30];
```

어레이라는 자료 안에 있는 모든 숫자 10,20,30을 더하기() 함수의 파라미터로 집어넣으려면? <br>

```js
function 더하기(a, b, c) {
  console.log(a + b + c);
}
var 어레이 = [10, 20, 30];
더하기(...어레이);
```

▼ spread 연산자가 없던 시절엔 이런 식으로 작성했다.

```js
function 더하기(a, b, c) {
  console.log(a + b + c);
}
var 어레이 = [10, 20, 30];
더하기(...어레이); // spread
더하기.apply(undefined, 어레이); // 예전방식
```

# ⚡️ apply, call

```js
var person = {
	인사 : function(){
    	console.log(this.name + '안녕'
    }
}

var person2 = {
	name : '손흥민'
}
```

person이라는 오브젝트에는 인사라는 함수를 만들어 넣었고 <br>
person2는 name : '손흥민' 이라는 자료만 넣었다 <br>
그런데 person에 만들어놓은 person.인사()라는 함수를 person2에서도 사용하고 싶다. <br>
그러면 어떻게 해야할까? <br>
<br>
person2에다가 직접 인사()라는 함수를 코딩해서 집어넣으면되는데<br>
그게 불가능한 경우가 있다 그럴 때 apply를 사용하면 된다.<br>
**apply는 이 함수를 실행하는데 저기 오브젝트에다가 적용해서 실행해주세요**라는 뜻이다.<br>

```js
var person = {
	인사 : function(){
    	console.log(this.name + '안녕'
    }
}

var person2 = {
	name : '손흥민'
}

person.인사.apply(person2);
```

▲ 맨 마지막줄에 적은 코드가 뭔 의미냐면<br>
person.인사()라는 함수를 쓰는데 person2라는 오브젝트에 적용해서 실행해라<br>
또는 person.인사()라는 함수를 쓰는데 person2라는 오브젝트에 있는 함수처럼 실행해라~ 라는 뜻이다.<br>

apply 함수의 사용법은<br>
**실행할함수.apply(적용할곳);**이라고 보면 된다.<br>

# ⚡️ call

```js
var person = {
  인사: function () {
    console.log(this.name + "안녕");
  },
};

var person2 = {
  name: "손흥민",
};

person.인사.apply(person2);
person.인사.call(person2);
```

▲ apply와 call은 실행 결과도 똑같고 사용법도 똑같다. <br>
하지만 차이점이 하나 있는데, 내가 person.인사()에 파라미터를 넣어서 실행하고 싶은 경우에는 <br>
**person.인사.apply(person2, 파라미터);** <br>
**person.인사.call(person2, 파리미터);** <br>
이렇게 실행해야하는데 이 때 apply는 파라미터를 [array]로 한꺼번에 집어넣을 수 있고 <br>
call은 그냥 1,2,3 이렇게 일반 함수처럼만 집어넣을 수 있다. <br>

```js
var person = {
  인사: function () {
    console.log(this.name + "안녕");
  },
};

var person2 = {
  name: "손흥민",
};

person.인사.apply(person2, [1, 2, 3]);
person.인사.call(person2, 1, 2, 3);
```

▲ 파라미터 집어넣는 방법만 좀 차이가 있지 아무튼 call, apply의 실행내용은 똑같다. <br>
apply함수는 저렇게 어레이 내의 데이터를 파라미터로 한꺼번에 집어넣을 수 있다는 유용한 기능을 제공하기 때문에 <br>
이전 개발자들이 파라미터가 많은 함수를 만들 때 자주 사용했었다. <br>

```js
function 더하기(a, b, c) {
  console.log(a + b + c);
}

var 어레이 = [10, 20, 30];
더하기(...어레이); //요즘방식 넣기
더하기.apply(undefined, 어레이); //옛날방식 넣기
```

아까 함수에 array 집어넣는 예제가 이해가 될 것이다.

```js
더하기.apply(undefined, 어레이);
```

**더하기() 함수를 실행하는데 undefined에 적용해서 실행하고 파라미터로 어레이를 집어넣어라**는 뜻이다.

#### Q. undefined에 적용?

A. 아무곳에도 적용해서 실행하지 않게하기 위해 적은 내용이다. 그냥 쌩으로 더하기() 함수가 실행된다. <br>
왜냐면 더하기() 함수는 어디에도 적용할 필요가 없기때문이다. 근데 비워두면 문제가 생기기 때문에 아무 값이나 집어넣은 것이다.<br>
