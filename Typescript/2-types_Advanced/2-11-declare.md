코드를 작성하다보면 외부 자바스크립트 파일을 이용하는 경우가 생길 것이다. </br>
import 문법으로 가져다가 쓰면 되는데 </br>
근데 안타깝게도 그 파일이 Typescript로 작성된게 아니라 **Javascript로 작성된 파일이면** </br>
무수한 에러가 발생할 것이다. </br>
그 이유는 당연히 타입지정이 안되어있기때문이다. </br>
</br>
예를 들어 data.js라는 파일이 있다고 가정해보자 </br>
그리고 index.ts 파일에서 저기 있던 a라는 변수를 쓰고 싶으면? </br>

```ts
data.js;

var a = 10;
var b = { name: "kim" };
```

```ts
index.ts;

console.log(a + 1);
```

간단한 html css js 개발시엔 index.html에 저 파일 두개를 첨부하면 된다. </br>

```ts
(index.html)

<script src="data.js"></script>
<script src="index.js"></script> // index.ts에서 변환된 js 파일
```

이게 원래 프론트엔드에서 import하는 방법이다. </br>
근데 타입스크립트 파일에선 a가 정의가 안되어 있다고 에러가 발생한다. </br>
</br>

왜냐하면 `<script>` 태그로 자바스크립트 파일 2개를 연결해서 쓰는건 html 입장이고</br>
ts 입장에서는 a라는 변수를 import 해온 적이 없기 때문에 에러가 나는 것이다.</br>

## declare 키워드로 재정의하기

declare 쓰면 이미 정의된 변수나 함수를 재정의 할 수 있다. </br>
물론 타입도 포함해서 재정의가 가능하다. </br>

```ts
data.js;

var a = 10;
var b = { name: "kim" };
```

```ts
index.js;

declare let a: number;
console.log(a + 1);
```

declare 우측에 lea a 같은 변수 정의 집어 넣으면 된다. </br>
"a 라는 변수를 이 파일에서 잠깐 정의해주세요" 라는 뜻이다. </br>
쉽게 이야기하자면 **"a 라는 변수는 분명 어딘가에 있습니다"**라는 뜻이 더 맞다 </br>
그래서 js파일 변수를 가져다 쓰는데 '타입에러나 변수없다는 에러'를 방지하고 싶으면 </br>
declare 키워드를 사용하면 된다. </br>
</br>
(특징)
declare 이게 붙은 코드들은 js로 변환되지 않는다. </br>
그냥 컴파일러에게 힌트를 주는 역할의 코드라서 그렇다. </br>
</br>
그래서 자바스크립트로만 작성된 외부 라이브러리들을 쓸 때도 나름 유용하다. </br>
타입스크립트 버전이 없다면 직접 declare로 타입작성하면 된다. </br>
ts 파일들은 변수 만들 때 타입까먹어도 자동으로 타입지정이 되어 있으니 굳이 쓸 이유는 없다. </br>
</br>
근데 tsconfig.json 안에 allowJs 옵션을 true로 켜두면</br>
js파일도 타입지정이 일아서 implicit 하게 된다.</br>
리액트 같은 프로젝트에서 유용하다.</br>

## TS의 이상한 특징: Ambient Module

타입스크립트가 제공하는 이상한 기능이 있다. </br>
바로 import export 없이도 타입들을 다른 파일에서 가져다 쓸 수 있다는 점인데 </br>
그러니까 a.ts에 있던 변수나 타입정의를 b.ts에서도 아무런 설정없이 그냥 가져다 쓸 수 있다. </br>

```ts
data.ts;

type Age = number;
let 나이: Age = 20;
```

```ts
index.ts;

console.log(나이 + 1); // 가능
let 철수: Age = 30; // 가능
```

지금 같은 폴더에 아무데나 data.ts 만들고 타입, 변수를 넣어보자 </br>
그럼 index.ts에서도 data.ts에 있던 변수와 타입을 자유롭게 사용 가능하다. </br>
import export 그런거 안해도 같은 폴더에 있는 ts 파일은 그냥 사용가능하다. </br>
왜냐하면 그냥 ts 파일에 입력한 변수와 타입들은 전부 global 변수 취급을 받는다 </br>
전역으로 쓸 수 있는 파일을 전문용어로 **ambient module**이라고 칭한다. </br>
(타입스크립트에서 let name 이라는 이름의 변수 생성이 안되는 이유를 여기서 찾을 수 있다. 어디선가 기본으로 let name을 이미 쓰고 있다) </br>
