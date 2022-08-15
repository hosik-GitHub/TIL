# ⚡️ Narrowing 할 수 있는 방법 더 알아보기

Narrowing 하면서 코드짜는 것도 힘든데 특히나</br>

1. undefined 타입일 경우 처리하는거</br>
2. 복잡한 object자료들 narrowing 하는거</br>
   이게 가장 잦고 귀찮다고한다. 이걸 쉽게 하는 법을 알아보자</br>

## null & undefined 체크하는 법

실제로 개발할 때 어떤 변수나 함수 파라미터에 null, undefined가 들어올 경우 </br>
어떻게 대처할지 if문으로 코드를 짜는 경우가 매우 많을 것이다.</br>

```ts
if(저 변수가 undefined일 경우) 어쩌구~
```

이런 코드 많이 짤텐데 왜냐면 저런 상황을 미리 방어하는게 언제나 좋기 때문이다.</br>

근데 `&&`을 사용하면 저런 if문을 생략할 수 있다.</br>
그러기 위해서 `&&연산자`에 관련한 내용을 알아보자</br>

> **&& 연산자의 다른기능**
> 원래 && 이건 조건식 2개가 참이면 전부 참으로 판정해주세요~라는 논리 연산자인데</br>
> 여러개를 사용하면 이상한 현상이 있다</br>
> && 기호를 비교할 때 true와 false를 넣는게 아니라 자료형을 넣으면</br>
> && 사이에서 처음 등장하는 falsy 값을 찾아주고 그게 아니면 마지막 값을 남겨준다.</br>
> falsy 값은 false와 유사한 기능을 하는 null, undefined, NaN 이런 값들을 의미한다.</br>

```ts
1 && null && 3; // null이 남음
undefined && "안녕" && 100; // undefined 남음
```

이걸 약간 exploit하면 if문을 조금 더 간략하게 쓸 수 있다.</br>
</br>

그래서 && 기호를 이용해서</br>

```ts
if (변수 && typeof strs === "string") {
}
```

이렇게 사용하면 변수가 undefined라면 undefined가 남아서 if문이 실행되지 않고,</br>
(if문 조건식안에 falsy 값이 남으면 if문 실행되지 않습니다)</br>
변수가 string 타입이면 if문이 실행됩니다.</br>
변수가 null, undefined인 경우를 쉽게 거를 수 있는 문법이라고 보면 된다.</br>

```ts
function printAll(strs: string | undefined) {
  if (strs && typeof strs === "string") {
    console.log(s);
  }
}
```

근데 한 눈에 안들어온다면 안쓰는 것이 좋다.</br>
그냥 **if(저 변수가 undefined일 경우)어쩌구~** 이렇게 if하나 더 쓰는 것이 어떨까</br>

참고로 **if(변수 != null)** 이렇게 조건식을 써도 null, undefined 이거 두 개를 동시에 거를 수 있다.</br>
