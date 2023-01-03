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

### attrubute를 추가하면 각각 다른 내용을 보여줄 수도 있다.

`<custom-input>` 쓸 때마다 같은 코드만 나오니 쓸모 없어 보일 수 있다.<br>
그러면 attribute를 추가해서 쓸 때마다 각각 다른 내용을 보여줄 수도 있다.<br>

```js
class 클래스 extends HTMLElement {
  connectedCallback() {
    let name = this.getAttribute("name");
    this.innerHTML = "<label>${name}을 입력하세요</label><input>";
  }
}

customElements.define("custom-input", 클래스);
```

```html
<custom-input name="이메일"></custom-input>
<custom-input name="비번"></custom-input>
```

getAttribute(X)를 쓰면 현재 요소의 X라고 정의된 attribute를 가져올 수 있다.<br>
그래서 name attribute가 있으면 그걸 가져와서 `<label>`안에 넣으라고 코드를 짰다.<br>
그랬더니 `<custom-input name="비번"></custom-input>` 이렇게 쓰면 "비번을 입력하세요"<br>
`<custom-input name="이메일"></custom-input>` 이렇게 쓰면 "이메일을 입력하세요" 라고 출력된다.<br>
attribute 활용하면 각각 다른 내용을 보여줄 수 있다.<br>

### attribute가 변경될 때 특정 코드 실행도 가능하다.

```js
class 클래스 extends HTMLElement {

   connectedCallback() {
      let name = this.getAttribute('name');
      this.innerHTML = '<label>${name}을 입력하쇼</label><input>'
   }

   static get observedAttributes() {
       return ['name']
   }
   attributeChangedCallback() {
       (attribute 변경시 실행할 코드)
   }
}

customElements.define("custom-input", 클래스);
```

static get observedAttributes() 안에 감시할 attribute들을 array로 적으면 된다.<br>
그럼 그게 변경되는 순간 밑에 있는 attributeChangedCallback() 함수를 실행<br>
<br>
그럼 React, Vue에서 제공하는 자동 html 재렌더링 기능도 자바스크립트만으로 구현할 수 있다.

### React, Vue와 다른 점은

React, Vue도 똑같은 기능을 제공한다.<br>
React도 html을 하나로 묶어서 component로 만들어서 재사용이 가능하다.<br>
<br>
하지만 React는 웹앱을 만드는 라이브러리라 용도가 약간 다르다.<br>
React는 state가 변할 경우 자동으로 html 재렌더링해주는 기능도 제공하고 <br>
React는 virtual DOM을 이용해서 재렌더링을 매우 빠르고 효율적으로 도와준다.<br>
