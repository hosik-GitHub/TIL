# ⚡️ type alias (타입변수)

---

✏️`타입 정의가 너무 길면 Type Aliases(별칭)`
코드를 열심히 짜다보면

```ts
let 동물: string | number | undefined;
```

매우 길고 복잡하게 타입을 나열하는 경우가 많다.

- 이게 길고 보기 싫거나
- 나중에 또 사용하고 싶으면

변수에 담아쓰면된다. 변수를 만드는 것 처럼 `type` 이라는 키워드를 쓰면된다.
❗️type 키워드를 쓰는걸 **type alias**라고 한다.
alias를 번역하자면 별칭인데 여기선 쉽게 변수라고 부르겠다.

```ts
type Animal = string | number | undefined;
let 동물: Animal;
```

**type 타입 변수명 = 타입종류**
타입을 변수처럼 만들어서 쓰는 alias 문법이다. 관습적으로 대문자로 시작한다.
일반 자바스크립트 변수랑 차별을 두기 위해 `AnimalType` 이런 식으로 작명하는 것이 좋다.

> object 타입도 저장가능하다.

```ts
type 사람 = {
  name: string;
  age: number;
};
let teacher: 사람 = { name: "john", age: 20 };
// object에 타입을 지정할때 자주 활용할 수 있다.
```

type 키워드를 안쓰면 이렇게 만들어야한다.

```ts
let teacher: {
  name: string;
  age: number;
} = { name: "john", age: 20 };
```

### readonly로 잠그기

---

```ts
const 출생지역 = "seoul";
출생지역 = "busan"; // const 변수는 여기서 에러가 발생한다.
```

const 변수는 값이 변하지 않는 변수를 만들고 싶을 때 const를 쓰면 된다.
재할당시 에러가 나기 때문에 값이 변하는걸 미리 감지하고 차단할 수 있다.

```ts
const 여친 = {
  name: "엠버",
};
여친.name = "유라"; // const 변수지만 에러가 안난다.
```

하지만 object 자료를 const에 집어넣어도 object 내부는 마음대로 변경 가능하다.
const 변수는 재할당만 막아줄 뿐이지 그 안에 있는 object 속성 바꾸는 것 까지 관여하지 않기 때문이다.
object 속성을 바뀌지 않게 막고 싶다면 타입스크립트 문법을 사용하면 된다.
➡ readonly 키워드는 속성 왼족에 붙일 수 있으며 특정 속성을 변경불가능하게 잠궈준다.

```ts
type Girlfriend = {
  readonly name: string;
};

let 여친: Girlfriend = {
  name: "엠버",
};

여친.name = "유라";
// 한번 부여된 후엔 앞으로 바뀌면 안될 속성들을 readonly로 잠굴 수 있다.
// 물론 readonly 컴파일시 에러를 내는 것일 뿐 변환된 js 파일을 보면 잘바뀌긴 한다.
```
