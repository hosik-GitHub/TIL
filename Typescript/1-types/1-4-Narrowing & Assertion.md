# ⚡️ Narrowing

---

이전에 만들었던 함수에 숫자 또는 문자를 집어넣으면 + 1 해주는 함수이다.

```ts
function 내함수(x: string | number) {
  return x + 1; // 에러남
}
```

근데 이런 에러를 나타낸다.
`Operator '+' cannot be applied to types 'string | number' and 'number'`
string | number 같은 union type에는 일반적으로 조작을 못하게 막아둬서 생기는 에러이다.

이런 메세지를 보면 1. 타입을 하나로 Narrowing 해주거나 2. Assert 해주거나 둘 중 하나 해주면 된다.

## Type Narrowing

✏️ `if문 등으로 타입을 하나로 정해주는 것을 뜻한다.`

```ts
function 내함수(x: string | number) {
  if (typeof x === "number") {
    return x + 1;
  } else if (typeof x === "string") {
    return x + 1;
  } else {
    return 0;
  }
}
```

if문과 typeof 키워드로 현재 파라미터의 타입을 검사해서

> "이게 'number' 타입일 경우 이렇게 해주세요~"
> "이게 'string' 타입일 경우 이렇게 해주세요~"

이렇게 코드를 짜야 정상적으로 사용이 가능하다.
