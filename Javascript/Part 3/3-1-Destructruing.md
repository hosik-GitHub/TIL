# ⚡️ Destructruing

Array, Object 자료형에 있는 중요한 자료들을 변수로 꺼내고 싶을 때 사용

### Array 안에 있는 데이터를 변수에 담는 방법

[2,3,4]라는 array가 있는데, <br>
여기안에 있는 3개의 데이터들을 전부 밖으로 꺼내서 변수에 담아보자<br>

```js
var array = [2, 3, 4];
var a = array[0];
var b = array[1];
```

위의 코드를 더 쉽게할 수 있는 방법<br>

```js
var [a, b, c] = [2, 3, 4];
```

[2,3,4]라는 자료랑 비슷한 모양으로 변수를 선언해주면 된다.<br>
그럼 a,b,c 변수가 세개 생성되는데 각각 2,3,4라는 자료를 가진다.<br>
<br>
array에서 데이터 끄집어내서 변수 생성 끝이다.<br>

### 디폴트 값도 줄 수 있다.

당연히 왼쪽 오른쪽 갯수가 다르면 변수가 제대로 만들어지지 않는다.

```js
var [a, b, c] = [2, 3];
```

위 코드와 같이 쓰면 c라는 변수는 값이 할당이 안되어 undefiend가 할당되어있다.<br>
<br>
이걸 방지하고 싶으면<br>
값이 아무것도 안들어오는 변수들은 기본값을 가질 수 있게 만들 수 있다.<br>

```js
var [a, b, c = 5] = [2, 3];
```

그럼 c는 아무 값도 안들어오는 경우 5라는 기본값을 할당해준다.<br>
함수를 배웠을 때 사용하던 default 파라미터 문법과 똑같이 사용하면 된다.<br>

### Object 안에 있는 데이터를 변수에 담는 방법

object도 좌우를 똑같이 맞춰주면 변수가 생성된다.

```js
var { name: a, age: b } = { name: "Kim", age: 30 };
```

a,b라는 변수가 생성되고 kim과 30이라는 자료를 각각 할당해준다.<br>
<br>
조금 더 쉽게 변수를 뽑을 수 있는데<br>
변수 이름을 오브젝트 안의 key 이름과 똑같이 맞춰줄 때는 이렇게만 써도 된다.<br>

```js
var { name, age } = { name: "Kim", age: 30 };
```

name : name을 name 이렇게 하나로 생략이 가능하다.<br>
이렇게 하면 name, age라는 변수가 생성되고<br>
각각 Kim, 30이라는 값을 할당해준다.<br>
object에서 변수 꺼내기 끝이다.<br>

- array랑 똑같이 등호로 디폴트값도 적용 가능하다.<br>

### 변수를 object로 집어넣고 싶은 경우

```js
var name = "Kim";
var age = 30;

var obj = { name: name, age: age };
```

변수를 object 자료형에 집어넣고 싶은 경우 이런 식으로 쓰면 된다.<br>
하지만 destructuring 문법을 이용하면 <br>

```js
var name = "Kim";
var age = 30;

var obj = { name, age };
```

name : name 이렇게 key값과 value값이 동일하면<br>
name 이렇게 하나로 생략이 가능하다.<br>

### 함수 파라미터 변수 만들 때도 똑같이 적용 가능

함수가 하나 있는데 이 함수는 두개의 파라미터를 입력할 수 있다.<br>
여기에 object 내의 Kim, 그리고 age 자료들을 입력하고 싶으면?<br>

```js
function 함수(name, age) {
  console.log(name);
  console.log(age);
}

var obj = { name: "Kim", age: 20 };
함수(obj, name, obj, age);
```

destructuring 문법

```js
function 함수({ name, age }) {
  console.log(name);
  console.log(age);
}

var obj = { name: "Kim", age: 20 };
함수(obj);
```

아마 obj.name, obj.name 이걸 두개 뽑지 않고도 넣을 수 있다.<br>
왜냐면 파라미터는 실은 변수 만드는거랑 똑같은 행위기 때문에 변수 만드는 문법을 그대로 적용할 수 있는 것이다.<br>
<br>
파라미터를 입력할 때<br>
{name, age} = {name:'Kim',age:20}<br>
이거 한거랑 똑같다.(많이 사용하진 않는다)<br>
<br>
함수 파라미터로 array 내의 데이터들을 집어넣고 싶으면?<br>

```js
function 함수(name, age) {
  console.log(name);
  console.log(age);
}

var array = ["Kim", 30];
함수(array[0], array[1]);
```

destructuring 문법

```js
function 함수([name, age]) {
  console.log(name);
  console.log(age);
}

var array = ["Kim", 30];
함수(["Kim", 30]);
```

파라미터인 [name, age]를 만들 때 ['Kim',30] 이걸 그대로 대입해서 만드는 것이다<br>
그럼 각각 name과 age에는 Kim과 30이라는 데이터가 들어간다.<br>
