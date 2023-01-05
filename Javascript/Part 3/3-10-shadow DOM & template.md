가끔 보면 복잡한 HTML 태그가 있는데

```html
<input type="range" />
```

위와 같이 쓰면 되게 복잡한 레이아웃이 나온다. <br>
실제로 내부적으로도 여러개의 `<div>`를 이용해서 만들어진 것인데<br>
크롬 개발자도구 - 설정 - show user agent shadow DOM 켜기을 체그하면 확인할 수 있다.<br>
![](https://velog.velcdn.com/images/hosickk/post/ab84cacd-2734-49f0-972d-f30890e5a547/image.png)
▲ `<input type="range">` 안에 진짜로 `<div>` 3개가 숨어있다<br>
<br>
이걸 shadow DOm 이라고 하는데<br>
"일반적으로는 볼 수 없는 숨겨진 HTML"을 의미한다.<br>

### shadow DOM 만드는 법

```html
<div class="mordor"></div>
<script>
  document.querySelector("mordor").attachShadow({ mode: "open" });
  document.querySelector("mordor").shadowRoot.innerHTML =
    "<p>심연에서왔도다</p>";
</script>
```

이러면 `<div>` 안에 몰래 `<p>`를 숨길 수 있다.<br>

1. 우선 attachShadow()라는걸 써서 shadowRoot 라는 공간을 만든다.<br>
2. shadowRoot 여기에 원하는 html을 넣으면 숨겨진다.<br>
   <br>

거의 모든 <태그>는 shadowRoot를 오픈할 수 있고<br>
shadowRoot안에 넣은걸 전부 shadow DOM 이라고 칭하는데<br>
web component 문법과 합하면 더욱 진가를 발휘한다.<br>

### Web Component의 단점: 스타일 오염

Web Component 쓰면 html 함수처럼 묶어서 재사용할 수 있다고 했는데<br>
여기에 스타일을 넣고 싶을 경우 약간 문제가 생길 수 있다.<br>

```js
class 클래스 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<label>이름을 입력하세요</label><input>
      <style> label { color : red } </style>`;
  }
}

customElements.define("custom-input", 클래스);
```

```html
<custom-input></custom-input> <label>왜 나까지 빨개짐?</label>
```

스타일까지 함께 컴포넌트화하고 싶으면 컴포넌트 안에 `<style>`을 집어넣는게 좋다.<br>
근데 이렇게 label 태그를 빨간색으로 스타일링 해놨는데<br>
이럴 경우 컴포넌트와 관계없는 다른 태그까지 오염이 발생할 수 있다.<br>
<br>
그렇다고 CSS 적으로 class를 만들어서 해결한다고 해도<br>
다른 곳과 class가 겹치면 문제가 생긴다<br>
그럴 땐 스타일을 shadow DOM 열어서 거기에 집어넣으면 된다.<br>
왜냐면 shadow DOM에 있는 스타일은 밖에 영향을 끼치지 않아서 그렇다.<br>

```js
class 클래스 extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `<label>이름을 입력하세요</label><input>
      <style> label { color : red } </style>`;
  }
}

customElements.define("custom-input", 클래스);
```

```html
<custom-input></custom-input> <label>오 이제 바깥건 안빨개짐</label>
```

스타일과 태그들을 전부 shadow DOM으로 집어넣어놨더니<br>
진짜 다른 태그들 스타일을 오염시키지 않는다.<br>
그래서 대부분 Web Component 만들 때 shadow DOM을 활용한다.<br>
이래야 진정한 의미의 html 모듈화 개발이 가능하다.<br>
다른 모듈들이 서로 영향을 끼치는걸 막을 수 있기 때문.<br>
