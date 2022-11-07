# ⚡️ Primitive data type

자바스크립트의 자료형(문자, 숫자, array, object 등)은 자료형을 크게 2개로 분류한다. <br>
Primitive & reference라고 분류하는데 <br>
Primitive data type들은 자료 자체가 변수에 저장되는 자료들이다. <br>
문자, 숫자 자료형들이 대표적인 Primitive data type들이다. <br>

```js
var name = "john";
var age = 20;
```

이렇게 문자나 숫자 자료형은 문자나 숫자가 변수에 직접 저장된다는 소리다. <br>

## Reference data type

Array, Object 자료형은 referenece data type에 속한다. <br>
referenece data type은 자료를 변수에 직접 저장하는게 아닌, <br>
자료가 저쪽에 있습니다 라는 화살표(레퍼런스)를 변수에 저장한다.<br>

```js
var 사람 = { name: "Kim" };
```

방금 { name : 'Kim' } 이라는 자료를 변수에 저장했다 <br>
하지만 변수에 저장된건 { name : 'Kim' } 이게 아니다.<br>
"{ name : 'Kim' }이 저기 저장되어있습니다"라는<br>
**{ name : 'Kim' } 값을 가리키는 화살표**가 저장이 되어있을 뿐이다<br>
Kim이라는 데이터가 변수에 저장된게 아니고, Kim이란느게 저기 있습니다~ 라는 정보만 저장할 뿐이다.<br>
그래서 이런 reference만 저장되는 array, object 자료형을 referenece data type이라고 한다.<br>

#### Q.화살표가 가리키는 저기가 어디?

A. 컴퓨터 메모리 상의 어떤 곳이다.그냥 우리는 컨트롤할 수 없는 미지의 공간이라고 생각하면 된다.

### 예제 1. 복사하면 이상한 일이 일어난다.

한번 아주 직관적이고 간단한 Primitive 자료형부터 복사해보자

```js
var 이름1 = "김";
var 이름2 = 이름1;
이름1 = "박";
```

(1) 이름1은 '김'이라는 문자를 집어넣었고<br>
(2) 이름2는 이름1에 있던 자료를 복사해서 집어넣는다.<br>
(3) 셋재줄에서 이름1을 심심해서 박으로 변경했다.<br>
**그럼 이름1, 이름2를 출력하면?**
<br>
이름1은 변경했으니 '박'이고, 이름2는 복사만했지 변경하진 않았으니 '김'이다.<br>
근데 똑같은 일을 reference data type으로 진행하면 이상한 일이 일어난다.<br>
<br>

Reference 타입 자료형인 **object를 이용해 똑같이 해보자**

```js
var 이름1 = { name: "김" };
var 이름2 = 이름1;
이름1.name = "박";
```

(1) 이름1은 { name : '김' } 이라는 object자료형을 집어넣었고<br>
(2) 이름2는 이름1에 있던 자료를 복사해서 집어넣었다. <br>
(3) 셋째줄에서 이름1 object 안의 name을 박으로 변경다. <br>
**그럼 이름1, 이름2를 출력하면?**<br>
<br>

이름1은 변경했으니 { name : '박' }이고, 이름2는 복사만했지 변경하진 않았으니 { name : '김' }이다.<br>
그런데 콘솔창에서 출력해보면 이상한 점이 있다.<br>

![](https://velog.velcdn.com/images/hosickk/post/e51dde80-6a46-40f8-83ea-40cb42dc44b1/image.png)
분명 코드를 보면

```js
var 이름1 = { name: "김" };
var 이름2 = 이름1;
이름1.name = "박";
```

**이름2는 우리가 값을 전혀 수정한 적이 없는데 바뀌어 있다.** <br>
왜 그러냐면 두번째줄이 문제이다.<br>
이름2에 이름1을 복사해서 집어넣을 때가 문제이다.<br>
이 때, 이름1에 있던 { name : '김' }이라는 데이터가 복사된게 아니다.<br>
왜냐면 이름1에는 {} 이게 저장된게 아니라 **reference(화살표)가 저장**되어 있다고 했으니<br>
**이름1의 화살표를 이름2에 복사한 것이다.**<br>
이제 이름1과 이름2는 같은 화살표를 가지고 있다.<br>

![](https://velog.velcdn.com/images/hosickk/post/15daeae6-5f27-41c0-9c1f-ce71df6785a3/image.png)
이름1과 이름2는 같은 화살표(reference)를 가지게 된 것이고<br>
그 화살표는 { name : '김' }이라는 같은 값을 가리키고 있는 것일 뿐이다.<br>
