# ⚡️ default

함수를 만들 때 파라미터값을 실수로 안적거나 했을 경우 <br>
파라미터에 기본값(default 값)을 줄 수 있다. <br>

```js
function 더하기(a, b = 10) {
  console.log(a + b);
}

더하기(1);
```

위 코드를 실행하면 콘솔창에 11이 뜬다.<br>
지금 더하기() 함수는 파라미터를 두개 입력할 수 있다.<br>
하지만 실수인지 일부러인지 1이라는 파라미터 하나밖에 쓰지 않았다.<br>
그럴 때 저렇게 b = 10 선언해뒀던 default 파라미터값인 10이 b에 할당되게 된다.<br>
그래서 콘솔창에 a + b가 11이 출력되게 되는 것이다.<br>
<br>

default 파라미터를 주고 싶으면 저렇게 파라미터 선언할 때 등호로 입력해주면 된다.<br>
그럼 파라미터가 정의되지 않았을 때 등호 오른쪽 값이 발동된다.<br>

```js
function 더하기(a, b = 2 * 5) {
  console.log(a + b);
}

더하기(1);
```

**수학 연산자**도 사용가능하다. b 자리에 파라미터가 없으면 2 \* 5라는 값을 할당해준다.<br>

```js
function 더하기(a, b = 2 * a) {
  console.log(a + b);
}

더하기(3); // 9가 출력된다.
```

다른 파라미터와 연산도 가능하다. <br>
<br>

심지어 default 파라미터엔 함수입력도 가능하다.

```js
function 임시함수() {
  return 10;
}

function 더하기(a, b = 임시함수()) {
  console.log(a + b);
}

더하기(3); // 13이 출련된다.
```

b자리에 파라미터가 들어오지 않으면 임시함수()를 실행한 값을 b 파라미터에 할당해준다.<br>
임시함수()를 실행하면 그 자리에 10이 남는다.<br>
(Return 10이 그 뜻이다.)<br>
그래서 console.log(3 + 10)을 실행해준다.<br>

# ⚡️ arguments

함수의 모든 파라미터들을 전부 한꺼번에 싸잡아서 다루고 싶은 경우가 있다 <br>
그럴 땐 arguments라는 키워드를 활용하면 된다. <br>
(함수 안에서 쓸 수 있는 미리 정의된 키워드 혹은 변수) <br>

```js
function 함수(a, b, c) {
  console.log(arguments);
}

함수(2, 3, 4);
```

그러면 콘솔창에 [2,3,4]를 담은 array 비슷한 자료가 출력된다. <br>
arguments는 즉, 모든 입력된 파라미터를 [] 안에 싸매주는 키워드이다. <br>
<br>

콘솔창에 모든 파라미터를 하나씩 출력해주고 싶은 경우

```js
function 함수(a, b, c) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}

함수(2, 3, 4);
```

조금 더 확장성 있게 반복문을 사용한다면 <br>

```js
function 함수(a, b, c) {
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

함수(2, 3, 4);
```
