# ⚡️ 함수 rest 파라미터, destructuring 할 때 타입지정

---

> rest 파라미터 개념설명

- 함수에 어떤 파라미터가 몇 개 들어올지 미리 정의가 불가능한 경우가 있다.
  3개일지 4개일지 100개일지 모른다면 점3개로 `...` rest 파라미터를 만들어주면 된다.

```ts
function 전부더하기(...a) {
  console.log(a);
}
전부더하기(1, 2, 3, 4, 5);
```

함수 파라미터 작명할 때 점 3개 붙여주면 여기엔 파라미터 잔뜩 들어올 수 있습니다~라고 정의가 가능하다.

위와 같은 것을 rest 파라미터라고 부른다.

- rest 파라미터는 다른 일반 파라미터 뒤에만 올 수 있다.
- rest 파라미터 자리에 집어 넣은 값들은 전부 [ ] 안에 담겨있다.

## rest 파라미터 타입지정은

```ts
function 전부더하기(...a: number[]) {
  console.log(a);
}

전부더하기(1, 2, 3, 4, 5);
```

rest 파라미터는 항상 [ ] 안에 담겨오기 때문에 타입지정도 array처럼 해주시면된다.

## Spread operator와는 다르다

코드짜다보면 점 3개를 붙이는 경우가 또 있는데</br>
array 혹은 object 괄호 벗기고 싶을 때 왼쪽에 사용한다.</br>

```ts
let arr = [3, 4, 5];
let arr2 = [1, 2, ...arr];
console.log(arr2);
```

array 혹은 object 왼쪽에 점 3개를 붙이면 괄호를 벗겨주세요~라는 뜻이다.</br>
그래서 arr2를 출력해보면 [1,2,3,4,5]가 나온다.</br>
</br>
괄호 벗겨주는 ...spread는 array, object 자료 왼쪽에,</br>
여러개의 파라미터를 의미하는 ...rest는 함수선언할 때 소괄호 안에 나타난다.</br>

## Destructuring 문법

✏️ `자바스크립트에서 array, object 안에 있는 데이터를 빼서 변수로 만들고 싶을때 쓰는 문법`

```ts
let 사람 = { student: true, age: 20 };
let student = 사람.student;
let age = 사람.age;
```

위와 같은 코드를 작성하기 번거롭기 때문에 새로운 문법을 만들어냈다.</br>
Destructuring 이라는 것인데 변수로 빠르고 쉽게 뺄 수 있도록 도와주는 문법이다.</br>

```ts
let { student, age } = { student: true, age: 20 };
```

이렇게 쓰면 똑같이 변수로 뺄 수 있다.</br>

```ts
let [a, b] = ["안녕", 100];
```

array 자료도 왼쪽 오른쪽 똑같아보이게 변수 작명해주면 변수로 쉽게 뺄 수 있다.</br>
다만 특징은 object destructuring 할 땐 **변수 이름을 속성 이름과 맞춰주는게 편리하고**(안맞추면 더 복잡하다)</br>
array destructuring 할 땐 변수 이름 맘대로 작명 가능하다.</br>

## Destructuring 문법도 함수 파라미터에 사용가능

✏️ `함수 파라미터 작명하는 것도 변수 만드는 문법과 똑같기 때문이다.`</br>
변수 만들 때 기존 object에 있던 자료를 파라미터로 집어 넣고 싶으면

```ts
let person = { student: true, age: 20 };

function 함수(a, b) {
  console.log(a, b);
}
함수(person.student, person.age);
```

기존 object에 있던걸 person.student 이렇게 각각 집어 넣으면 되긴 되는데</br>
destructuring 문법을 이용하면 약간 더 쉽게 사용 가능하다.</br>

```ts
let person = { student: true, age: 20 };

function 함수({ student, age }) {
  console.log(student, age);
}
함수({ student: true, age: 20 });
```

파라미터 변수 만들 때 {student,age}라고 쓰면</br>
파라미터로 들어오는 {student: 생략}는 student 라는 변수에 저장해주세요~</br>
파라미터로 들어오는 {age: 생략}는 age 라는 변수에 저장해주세요~</br>
라는 뜻이다.(object 자료니까 변수 작명할 때 object 속성명으로 잘 작명해야한다.)</br>
항상 같은 모습의 object,array 자료가 들어올 대 쓰는 문법이라고 보면 된다.</br>

Q. 위의 함수 파라미터에 타입지정해보도록 하자 어떻게 할까?

```ts
let person = { student: true, age: 20 };

function 함수({ student, age }: { student: boolean; age: number }) {
  console.log(student, age);
}
함수({ student: true, age: 20 });
```
