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

### (3) export와 export default 동시에 사용하면?

```js
(library.js)

var a = 10;
var b = 20;
var c = 30;
export {a, b};
export default c;

------------------------
(index.html)

<script type="module">
  import c, {a,b} from 'library.js';
  console.log(c);
</script>
```

위와 같이 import하면 된다. export default 한건 맨 왼쪽에 써주고<br>
그 다음부터 이제{} 중괄호 안에 export 했던 변수들을 적어주면 된다.<br>

### (4) 변수명이 마음에 안들면 as로 새로 짓기

import를 쓸 때 변수명 오른쪽에 as라는 키워드를 붙일 수 있다.<br>
변수명 as 새변수명 이렇게 import하는 변수의 변수명을 바꿀 수 있다.<br>

```js
(library.js)

var a = 10;
var c = 30;
export {a};
export default c;

------------------------
(index.html)

<script type="module">
  import c, {a as 폭발} from 'library.js';
  console.log(폭발);
</script>
```

### (5) import할 때 변수들이 많으면 \*기호 사용

export {} 했던 변수들이 100개면 import 오른쪽에 변수를 100개나 사용하는 것은 비효율적므로 \*기호를 사용하여 변수들을 한꺼번에 object에 담아서 import 할 수 있다.

```js
(library.js)

var a = 10;
var b = 20;
var c = 30;
export {a,b};
export default c;

------------------------
(index.html)

<script type="module">
  import c, * as 변수모음 from 'library.js';
  console.log(변수모음.a);
  console.log(c);
</script>
```

- 이라는 기호는 export {} 했던 애들을 그냥 다 import 해주세요~라는 뜻이다.<br>
  근데 그냥 사용하면 안되고 as로 별명을 꼭 지어주어야한다.<br>
  그럼 이제 별명에 export {} 했던 변수들이 다 들어간다.<br>

#### 이전엔 require, module, exports 라는게 있었다

Require.js 이상한 라이브러리를 쓰거나 Nodejs 개발시 자바스크립트를 모듈식으로 개발이 가능했었다.

```js
(export 하는 js파일)

module.exports.a = 10 ;

------------------------
(import 하는 js파일)

var 가져온거 = require('/library.js');
```

이러면 a를 사용할 수 있었다.<br>
근데 이제는 ES6 import/export를 쓰면 되기 때문에 <br>
위와 같은 코드를 사용했구나 라고만 알아두자<br>
<br>

그리고 import/export는 IE 호환성이 없기 때문에<br>
단순한 html css js 프론트엔드 개발시 JS파일을 HTML에 첨부하려면<br>
`<script src="경로"></script> `을 사용<br>
<br>

혹은 모던 브라우저에선 ` <script type="module" src="경로"></script>` 이렇게 하면<br>
import export 문법이 사용 가능해지는데 대부분은 리액트 뷰 nodejs 할 때 많이 사용한다.
