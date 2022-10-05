# ⚡️ this

this 키워드는 뜻이 매우 다양하다. <br>
사용하는 환겨에 따라서 4개 이상의 각각 다른 뜻을 가지고 있다.<br>

## 1-1 그냥 쓰거나 함수 안에서 쓰면 this는 window를 뜻한다.

그냥 HTML 파일 아무거나 하나 만들고 중간에 `<script>`태그를 열어서 <br>
this라는 키워드를 콘솔창에 출력해보도록 하자 <br>

```js
console.log(this);
```

그러면 this 키워드는 그냥 window{어쩌구} 이런 값이 나온다. <br>
<br>

비슷하게 일반 함수 내에서 this라는 값을 불러보면

```js
function 간지나는함수() {
  console.log(this);
}
간지나는함수();
```

똑같이 this라는 값은 window 라고 출력된다. <br>
이것이 this의 첫번째 뜻이다. <br>
<br>

### Q. window가 무엇인가?

**A. window는 모든 전역변수, 함수, DOM을 보관하고 관리하는 전역객체이다.** <br>
좀더 쉽게 비유해보자면 우리가 사용하는 자바스크립트 함수들 <br>
document.getElementById(), alert(), console.log() <br>
이런 함수들을 보관하는 보관소이다. 특별한건 아니고 그냥 큰 {오브젝트}일 뿐이다. <br>
<br>

또한 전역변수를 만들었을 때도 이 값을 보관해준다.

```js
<script>var x = 300;</script>
```

이렇게 변수를 큰 공간에 만들면 x라는 변수는 window라는 큰 오브젝트안에 자동적으로 생성된다.<br>
(함수도 마찬가지)
<br>

**\*전역벽수 : 코드 내 모든 곳에서 참조해서 쓸 수 있는 범용적인, 범위가 넓은 변수이다. 그냥 script 태그 내에 쌩으로 var 변수 하나 만들면 그건 자연스레 전역변수가 된다.**<br>

### 1-2 strict mode일 때 함수 안에서 쓰는 this는 undefined

```js
<script>
  'use strict'; function 간지나는함수(){console.log(this)}
  간지나는함수();
</script>
```

IE 10버전 이상에선 'use strict'라는 키워드를 페이지 최상단에 추가하면 <br>
strict mode로 자바스크립트를 작성가능하다. <br>
strict mode에선 var 키워드 없이 변수를 선언하거나, <br>
변수를 arguments 키워드로 선언하거나 그런 실수를 방지해준다. <br>
strict mode에선 this 키워드를 일반함수 안에서 불렀을 때 undefined라는 값으로 강제로 지정해준다. <br>

### 2 object 자료형 내에 함수들이 있을 수 있는데 거기서 this값은 '주인님'을 뜻한다.

```js
var 오브젝트1 = {
  data: "Kim",
  간지함수: function () {
    console.log("간지");
  },
};
```

글자나 숫자를 집어넣듯이 오브젝트 내에도 위와 같이 함수를 집어 넣을 수 있다. <br>
그럼 함수를 어떻게 꺼내쓰냐면 <br>

```js
var 오브젝트1 = {
  data: "Kim",
  간지함수: function () {
    console.log("간지");
  },
};

오브젝트1.간지함수();
```

오브젝트에 들어가는 함수들을 메소드 method라고 한다. <br>

<br>

근데 메소드 안에서 this를 쓰면 신기한 값이 나오는데

```js
var 오브젝트1 = {
  data: "Kim",
  간지함수: function () {
    console.log(this);
  },
};

오브젝트1.간지함수();
```

간지라는 단어 대신 this라는 키워드를 출력시키면? <br>
콘솔창에 {data: 'Kim', 간지함수: f} 이런 값이 출력된다. <br>
이게 뭐냐면 방금 만든 오브젝트1이다. <br>
그래서 메소드안에서 this를 쓰면 **this는 메소드를 가지고 있는 오브젝트**를 뜻한다. <br>

그럼 밑에 예제의 this는 무슨 값이 출력될까?

```js
var 오브젝트2 = {
  data: {
    간지함수: function () {
      console.log(this);
    },
  },
};
오브젝트2.data.간지함수();
```

오브젝트의 메소드안에서 썼을때 this는 메도스드를 담고 있다는 뜻이기 때문에 <br>
간지함수()를 담고 있는 오브젝트2.data 라는게 위의 this랑 동일한 뜻이다. <br>

#### this라는 뜻은 2번만 알면된다.

1번, 즉 \_*"일반 함수내에서 썼을 때 this는 window입니다"*라는 정의는 굳이 외울 필요가 없다. <br>
왜냐하면 1번은 자연스럽게 유추가 가능하기 때문이다. <br>

```js
<script>function 간지나는함수(){console.log()}</script>
```

간지나는함수()는 전역변수나 전역함수를 관리하기 위한 window라는 오브젝트에 자동으로 추가가 된다. <br>

그래서 코드(1) 코드(2) 둘다 자바스크립트 입장에서 보면 똑같다. <br>

```js
<script>
  (1) function 간지나는함수(){console.log(this)}
  (2) window.간지나는함수 = function(){console.log()};
</script>
```

(2)문법은 window라는 오브젝트에 함수 자료를 추가하는 문법일 뿐이다. <br>
결혼은 전역함수 만들거나 전연벽수 만들면 저렇게 window {오브젝트} 안에 담긴다는 소리다. <br>
일부러 하지 않아도 변수나 함수 쌩으로 만들면 자바스크립트가 자동으로 알아서 window안에 담는다. <br>

```js
<script>function 간지나는함수(){console.log(this)}</script>
```

여기서 this는 무슨 값이 나올까? <br>
this는 아까 2번에 의하면 내 메소드를 포함하고 있는 주인님 오브젝트를 출력시켜준다고 했다. <br>
Q. **간지나는함수()**를 포함하고 있는 주인님 오브젝트가 무엇일까? <br>
A. undefined <br>

**this는 오브젝트 내의 메소드(함수)에서 사용했을 때 메소드의 주인님 오브젝트를 출력해준다**
