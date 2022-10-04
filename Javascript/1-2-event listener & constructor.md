지난 정리글에 this의 의미를 정리를 하자면

1. 일반 함수에서 쓰는 window
2. 오브젝트 내의 함수(메소드)에서 쓰면 함수를 동작시키는 오브젝트
   가 출력된다고 정리했다.

## 3. constructor 안에서 쓰면 constructor로 새로 생성되는 오브젝트

자바스크립트에서 오브젝트를 비슷한걸 여러개 만들고 싶을 경우 <br>
오브젝트를 복사하는게 아니라 constructor라는걸 만들어서 사용한다. <br>
쉽게 말하면 constructor는 오브젝트 복사해서 생서해주는 기계다. <br>
기계를 어떻게 만드는지 알아보자. <br>

```js
function 기계() {
  this.이름 = "Kim";
}
```

함수 문법을 이요해서 만든 후, 안에 this.생략을 추가해주면된다. <br>
여기서의 this는 **기계로부터 새로 생성될 오브젝트**들을 의미한다. <br>
<br>
그럼 this.이름 = 'Kim' 이건 무슨 뜻일까?<br>
새로 생성되는 오브젝트의 이름 key값에 'Kim'이라는 value를 집어넣으라는 뜻이다.<br>

> 참고로 알아두면좋은 기계에서 오브젝트 뽑는 법

```js
function 기계() {
  this.이름 = "Kim";
}
var 오브젝트 = new 기계();
```

이렇게 new 키워드를 이용하면 새로운 오브젝트를 꺼낼 수 있다.<br>
그리고 새로운 오브젝트는 {이름:'Kim'}이라는 값을 가지고 있다<br>
(this라는 키워드 덕분에)<br>

## 4. eventlistener 안에서 쓰는 this는 e.currentTarget이라는 의미

```js
document.getElementById('버튼').addEventListener('click', fucntion(e){
	console.log(this)
})
```

여기서 this를 소환하면 이것은 바로 e.currentTarget이라는 뜻과 똑같은 의미이다.<br>
**e.currentTarget은 지금 이벤트가 동작하는 곳**을 뜻한다.<br>
매우 간단히 설명하면 지금 addEventListener 부착된 HTML 요소를 뜻한다고 보면된다.<br>
의심되면 **e.currentTarget, this, document.getElementById('버튼')** 세개를 각각 출력해보면된다.<br>
이게 this의 마지막 뜻이다.<br>

### case 1. 이벤트리스너 안에서 콜백함수를 쓴다면 this는?

아래와 같은 코드를 쓴다고 가정해보자

```js
document.getElementById("버튼").addEventListener("click", function (e) {
  var 어레이 = [1, 2, 3];
  어레이.forEach(function () {
    console.log(this);
  });
});
```

이벤트리스너 안에서 forEach()라는 반복문을 사용했다. <br>
forEach() 반복문을 사용할 땐 안에 fucntion(){} 콜백함수를 집어넣어서 사용하게 되어있다. <br>
**(콜백함수는 그냥 함수 안에 파라미터역할로 들어가는 함수를 뜻한다.)** <br>

#### Q.위의 코드에서 this를 출력하면 무엇이 나올까?

A. 4번뜻에 의하면 eventlistener 안에서 쓴 건 아니다. <br>
eventlistener내부는 맞지만 그 안에서 function을 하나 더 만났기 때문에 의미가 변한다. <br>
3번뜻에 의하면 constructor는 아니다. <br>
this의 1번이나 2번뜻이 맞다. <br>
저렇게 쌩으로 있는 콜백함수는 그냥 일반함수랑 똑같기 때문에 window가 출력된다. <br>
