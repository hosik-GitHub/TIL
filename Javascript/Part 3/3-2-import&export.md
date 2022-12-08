**ES6 import/export를 사용하면 내가 원하는 변수, 함수, class만 다른 파일로 보낼 수 있다.**

### 파일 만들기

index.html과 library.js를 만들어서 <br>
library.js 파일에 있는 내용을 index.html`<script>` 태그 내에서 가져다 쓴다.<br>
(.js파일 간에도 가능하다.)<br>

```html
(index.html)

<script type="module"></script>
```

▲ HTML 파일 안에서 ES6 import 문법을 사용하려면 script 태그 안에 type을 module로 설정해야한다.<br>

### (1) export default / import를 쓰면

다른 파일에 있는 변수 등을 가져다 쓸 수 있다.<br>
변수, 함수, class 전부 가능하다.<br>

```html
(library.js) var a = 10; export default a; ---------------------- (index.html)

<script type="module">
  import a from "library.js";
  console.log(a);
</script>
```

JS 파일에서는 특정 변수를 다른 파일에서 이용할 수 있게 내보내고 싶으면<br>
**export default 변수명** 이라고 하면 된다.<br>
<br>
그리고 그 변수를 가져다 쓰고 싶다면<br>
다른 파일에서 **import 어쩌구 from '경로'** 해주면 된다.<br>

### (2) 여러개를 export 할 수도 있다.

JS파일에서 변수를 여러개 만들고 그걸 다 내보내고 싶으면 export라는 키워드를 여러번 쓰면 된다.

```html
library.js) var a = 10; var b = 20; export {a, b}; ------------------------
(index.html)

<script type="module">
  import { a, b } from "library.js";
  console.log(a);
</script>
```

근데 export라고 쓸 땐 **export {변수명1, 변수명2...}** 이렇게 담아줘야한다.<br>
혹은 **export var a = 10;** 이렇게 사용해도 된다.<br>
<br>
export 키워드로 내보낸 것들을 import 할 땐<br>
**import{변수명1, 변수명2...}from'경로'**이렇게 가져와야한다.<br>

#### export default와의 차이점

- export default는 한번만 쓸 수 있고 import시엔 변수명을 새롭게 작명가능하다
- export는 {변수명1, 변수명2 ...} 이렇게 담아야하고 import 할 때도 정확히 변수명을 써줘야한다
  라는 특징이 있다.
