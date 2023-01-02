Web Component 문법

- `<div>` 태그들을 하나의 단어로 축약할 수 있는 문법
- 브러우저 기본 기능중 하나이다.

### 커스텀 html 태그 만드는 법

예를 들어서 `<custom-input>` 이라고 입력하면 <br>
`<label><input> `이렇게 2개의 태그가 안에 출현하게 만들고 싶어진 것이다.<br>
<br>

`<custom-input>` 같은 커스텀 태그를 이제부터 컴포넌트라고 칭하고<br>
컴포넌트를 만들고 싶으면 이런 형식에 따라서 그대로 타이핑만 하면 된다.<br>

```js
class 클래스 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "<label>이름을 입력하쇼</label><input>";
  }
}

customElements.define("custom-input", 클래스);
```

```html
<custom-input></custom-input>
```

#### 1. 컴포넌트에 어떤 html들을 집어넣을지 맘대로 설정 가능하다.

class와 extend 문법 그대로 쓰면된다 (class명 작명가능)<br>
안에는 connectedCallback()이라는 함수안에 커스텀 html을 꾸미면 된다.<br>
(참고) connectedCallback() 함수는 컴포넌트가 html에 장착될 때 실행된다.<br>

#### 2. html 만들고 싶으면 자바스크립트로 html 만드는 분법 가져다 쓰면 된다.

#### 3. customElements.define()처럼 써주면 컴포넌트 등록 가능

(컴포넌트 이름 작명시 보통 대시기호 넣는게 관습이다.)<br>
![](https://velog.velcdn.com/images/hosickk/post/ff17dfeb-ff50-45a0-bf0e-ed5d3ffbbef3/image.png)
▲ 브라우저에서 개발자도구로 검사해보면<br>
`<custom-input>`이라고 쓸 때마다 `<label> <input>`이 남는다.<br>
이것이 html을 컴포넌트로 축약해서 쓸 수 있는 Web Component 문법이다.<br>
