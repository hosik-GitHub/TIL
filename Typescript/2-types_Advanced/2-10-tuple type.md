# ⚡️ tuple type

array 자료에 타입을 지정하고 싶으면 **string[]** 이렇게 기입을 하라고 했다. </br>
하지만 보다 구체적으로 타입지정 하고 싶을 때가 있다. </br>
"첫 자료는 무조건 string, 둘째 자료는 무조건 number인 array" </br>
tuple 타입을 사용하면 이런 것도 가능하다. </br>

## Tuple

- tuple type은 array에 붙일 수 있는 타입인데 자료의 위치까지 </br>
  정확히 지정할 수 있는 타입이다. </br>

```ts
let 멍멍이: [string, boolean];
멍멍이 = ["dog", true];
```

[ ] 괄호 안에 타입 적으면 tuple type이 된다. </br>
[ ] 안에 차례로 세부 타입을 기입하면 된다. </br>
그럼 정말 첫 자료는 무조건 string, 둘째 자료는 무조건 boolean만 허용해주고 다른게 </br>
들어오면 에러로 잡아준다.

## Tuple 응용 : rest parameter

```ts
function 함수(...x: string[]) {
  console.log(x);
}
```

함수 정의할 때 파라미터 왼쪽에 점 3개를 부티면 rest parameter라고 부른다. </br>
"여기에 파라미터가 몇 개 들어올지 아직 몰라요~" 라는 뜻으로 사용하는 파라미터이다. </br>
x 자리에 입력한 파라미터들은 array에 담겨오기 때문에 array 처럼 타입지정을 해주는게 일반적이다. </br>
근데 tuple을 이용해서 타입 지정을 해줄 수 있다. </br>

```ts
function 함수(...x: [string, number]) {
  console.log(x);
}
함수("kim", 123); // 가능
함수("kim", 123, 456); // 에러
함수("kim", "park"); // 에러
```

rest parameter를 엄격하게 사용 가능하다. </br>
일반 파라미터 2개 넣는 것과 기능상 다를 바는 없는데 </br>
**차이는 rest parameter 쓰면 파라미터가 전부 array에 담겨서 오는게 차이다.** </br>

## tuple 안에도 옵션 가능

```ts
type Num = [number, number?, number?];
let 변수1: Num = [10];
let 변수2: Num = [10, 20];
let 변수3: Num = [10, 20, 10];
```

물음표 넣어서 옵션이라고 표현가능하다. </br>
그렇다면 이 코드는 어떨까? </br>

```ts
type Num = [number, number?, number];
```

array 중간에 있는 자료는 옵션이다? </br>
중간을 빼고 만들 수도 없고 뭔가 논리적으로 이상하다. </br>
</br>

그래서 **? 옵션기호는 뒤에만** 붙일 수 있다.</br>
물을표 2개쓰고 싶으면 뒤에서 2개만 붙일 수 있다는 이야기다.</br>

## array 두개를 spread 연산자로 합치는 경우 타입지정은?

```ts
let arr = [1, 2, 3];
let arr2 = [4, 5, ...arr];
```

점 3개 spread 연산자를 사용하면 array의 괄호를 벗겨준다. </br>
그래서 위 예제처럼 쓰면 array 두개를 합칠 수 있다.</br>
그렇다면 arr2 타입 지정은 tuple 타입으로 어떻게 해야할까?</br>

```ts
let arr = [1, 2, 3];
let arr2: [number, number, ...number[]] = [4, 5, ...arr];
```

tuple 타입에 spread 연산자를 사용하면된다.</br>
점 3개 붙이면 아직 여기에 몇 개의 자료가 들어올지 모른다는</br>
rest parameter 같은 느낌으로 활용 가능하다.</br>

```ts
let arr2: [number, number, ...number[]] = [4, 5, 6, 7, 8, 9, 10];
```

rest parameter 처럼 마음껏 집어넣을 수 있다.
