가끔 object를 다른 타입으로 변환하고 싶을 때가 있다. </br>
모든 속성들에 문자가 들어오는 타입을 갑자기 숫자가 들어오도록 바꾸고 싶을 때 </br>
그럴 땐 처음부터 타입을 다시 작성하는 것이 아니라 mapping을 이용하면 된다. </br>

# ⚡️ keyof 연산자

그 전에 간단히 keyof 연산자에 대해 알아보자 </br>
keyof는 object 타입에 사용하면 **object 타입이 가지고 있는 모든 key값을 union type으로 합쳐서 내보내준다.**</br>
object의 key를 뽑아서 새로운 타입을 만들고 싶을 때 사용하는 연산자이다.</br>

```ts
interface Person {
	age: number;
  	name: string;
}
type PersonKeys = keyof person; // "age" | "name" 타입된다.
let a :PersonKeys = 'age'; // 가능
ley b :PersonKeys = 'ageeee'; // 불가능
```

Person 타입은 age, name 이라는 key를 가지고 있었기 때문에 </br>
이제 PersonKeys는 정말 'age' | 'name' 타입이 된다. </br>
즉 literal type이다. </br>

```ts
interface Person {
	[key :string]: number;
}
type PersonKeys = keyof person; // string | number 타입된다.
let a :PersonKeys = 'age'; // 가능
ley b :PersonKeys = 'ageeee'; //가능
```

Person 타입은 모든 문자 key를 가질 수 있기 때문에 </br>
keyof Person 이렇게 string 타입이 된다. </br>
실은 **string | number** 타입이 된다. object key 값에 숫자 넣고 문자로 치환되어서 그렇다. </br>
[key :number] 이렇게 숫자만 들어올 수 있다고 해놓으면 keyof Person 이렇게 하면 **number** 타입이 된다. </br>
</br>
(참고) 자바스크립트는 .keys()를 붙이면 key 값을 array자료로 담아준다.</br>

# ⚡️ Mapped Types

가끔 object안에 있는 속성들을 다른 타입으로 한번에 변환하고 싶을 때가 있다. </br>
그럴 대 유용한 타입변환기를 만들어보자 </br>

```ts
type Car = {
  color: boolean;
  model: boolean;
  price: boolean | number;
};
```

모든 속성을 string 타입으로 바꾸고 싶다 </br>
속성이 3개면 직접 다시 만들어도 되겠지만 100개라면? </br>

```ts
type Car = {
  color: boolean;
  model: boolean;
  price: boolean | number;
};

type TypeChanger<MyType> = {
  [key in keyof MyType]: string;
};
```

그럴 땐 TypeChanger처럼 생긴 타입을 만들어보자. </br>
쓰는 법이 정해져 있는데 </br>
**[자유작명 in keyof 타입파라미터]: 원하는 타입** </br>
이렇게 입력하시면 object 타입을 입력했을 대 속성명은 그대로지만 다른 타입으로 변환해주는 변환기를 만들 수 있다. </br>
</br>

in 키워드는 왼쪽이 오른쪽에 들어있냐라는 뜻이고</br>
keyof 오브젝트 타입에서 key값만 union type으로 뽑아주는 역할이다.</br>

```ts
type Car = {
  color: boolean;
  model: boolean;
  price: boolean | number;
};

type TypeChanger<MyType> = {
  [key in keyof MyType]: string;
};

type 새로운타입 = TypeChanger<Car>;

let obj: 새로운타입 = {
  color: "red",
  model: "kia",
  price: "300",
};
```

위와 같이 작성하면 이제 새로운 타입은 color, model, price 속성을 가지고 있으며 전부 string 타입이 된다. </br>
key 값이 100개 있는 object 타입을 변경할 일이 있으면 쓰도록 하자. </br>
