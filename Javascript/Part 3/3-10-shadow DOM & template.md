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
