# ⚡️ import export

---

✏️`만든 타입변수를 다른파일에서 사용하고 싶은 경우 자바스크립트 import export문법 그대로 사용 가능하다.` </br>

#### import export 문법을 간략하게 설명하자면

a.ts -> b.ts 이렇게 변수나 함수를 가져다쓰고 싶은 경우

```ts
a.ts;

export var 이름 = "kim";
export var 나이 = 30;
```

```ts
b.ts;

import { 이름, 나이 } from "./a";
console.log(이름);
```

위와 같이 사용하면된다.

1. 우선 변수를 다른 파일에서 쓰이게 내보내고 싶으면 **export 문법으로 내보내야**하고
2. export된 변수를 가져와서 쓰고 싶으면 **import 문법으로 가져와야**한다. </br>
   export하고 싶으면 벼눗나 함수 정의부분 왼쪽에 export 키워드를 붙이면 되고 </br>
   import 하고 싶으면 import {변수명} from 파일경로 </br>
   이렇게 쓰면 된다. 경로는 ./ 부터 시작해야한다. 현재경로라는 뜻이고 ts 파일 확장자는 안붙여야한다.
   </br>

```ts
import * from './a';
console.log(이름);
console.log(나이);
```

변수명 사용이 번거롭다면 import \* 해도된다. 그 파일에서 export된 변수를 전부 import 해오는 문법이다.</br>
(참고로 export default도 있다)</br>
</br>
a.ts -> b.ts 이렇게 정의된 타입을 가져다 쓰고 싶은경우</br>

```ts
a.ts;

export type Name = string | boolean;
export type Age = (a: number) => number;
```

```ts
b.ts;

import { Name, Age } from "./a";
let 이름: Name = "kim";
let 함수: Age = (a) => {
  return a + 10;
};
```

타입도 똑같이 사용하면 된다.</br>
</br>

**Q. 다른 파일에서 쓰지 못하는 a.ts에서만 쓰고 싶은 일종의 로컬 타입은 어떻게 만들까?**</br>
A. expor를 붙이지 않으면 a.ts에서만 쓸 수 있는 타입이다.</br>

# ⚡️ namespace

---

타입스크립트 1.5버전 이하때는 자바스크립트 import / export 문법이 없었다. </br>
그냥 `<script src="">` 이걸 여러개 써서 파일들을 첨부해서 썼는데 그 문법의 문제는 </br>
파일이 많아질수록 변수명이 겹치는 위험이 발생하는 점이다. </br>
그래서 외부 파일에서 사용하지 않을 변수들은 함수로 감싸거나 그랬는데
타입 변수들은 namespace 문법으로 숨겼다.

```ts
a.ts;

namespace MyNamespace {
  export interface PersonInterface {
    age: number;
  }
  export type NameType = number | string;
}
```

중요한 타입정의들을 다른 파일들에서 쓰고 싶으면 안전하게 namespace 안에 써서 export 해줬다.

```ts
b.ts;

// <reference path="./a.ts" />

let 이름: MyNamespace.NameType = "민수";
let 나이: MyNamespace.PersonInterface = { age: 10 };
```

그러면 ts 파일은 이상한 `<reference/>` 라는 태그를 이용해서 다른 파일을 import 해올 수 있는데 </br>
그럼 이제 그 파일에 있던 namespace를 사용 가능하다. </br>
**네임스페이스명.타입명** 이렇게 쓰면 다른 파일에 있던 타입 변수를 자유롭게 쓸 수 있다. </br>

```ts
b.ts;

// <reference path="./a.ts" />

let 이름: MyNamespace.NameType = "민수";
let 나이: MyNamespace.PersonInterface = { age: 10 };

type NameType = boolean; // 사용 가능
interface PersonInterface {} // 사용 가능
```

점 찍어서 써야하기 때문에 다른 변수명을 오염시키지 않아서 </br>
변수명 중복선언문제를 방지할 수 있어서 유용하다. </br>
근데 자바스크립트 es6 버전이 나온 이후로 impoert as 키워드로 나름 namespace와 유사하게 중복 문제를 해결가능해서 namespace는 그렇게 많이 쓰이진 않는다.
