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

## in 연산자로 object 자료 narrowing

예를 들어서 파라미터로 object가 2개 들어올 수 있다고 타입지정을 해놓은 것이다.</br>
하나는 {a: 'kim'}</br>
다른 하나는 {b: 'park'}</br>
이렇게 서로 다른 유니크한 속성들을 가지고 있다면</br>
</br>

**if(이 파라미터가 a라는 속성을 안에 가지고 있냐)**</br>
이런 if문을 써도 narrowing이 가능하다는 뜻이다.</br>
if(키값 in object자료형) 이렇게 쓰면 된다.</br>
타입스크립트 컴파일러는 똑똑한 편이라 이런 것들도 narrowing으로 판정해준다.</br>

```ts
type Fish = { swim: string };
type Bird = { fly: string };
function 함수(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim;
  }
  return animal.fly;
}
```

서로 배타적인 속성을 가져와야 narrowing이 가능하다.</br>
예를 들어서 Fish와 Bird 타입이 둘 다 swim 속성을 가지고 있고 Bird만 fly 속성을 추가로 가지고 있으면?</br>

## class로부터 생산된 object라면 instanceof로 narrowing

어떤 클래스로부터 new 키워드로 생산된 object들이 있다.</br>
그런 object 들은 instanceof 키워드를 붙여서 부모 클래스가 누군지 검사할 수 있는데</br>
이것도 narrowing 역할을 할 수 있다.</br>
</br>

가장 쉽게 new 키워드로 object 생산할 수 있는게 바로 날짜인데</br>
자바스크립트에선 new Data() 이렇게 하면 date object라는게 생성된다.</br>
그래서 instanceof로 부모 클래스가 누군지 검사할 수 있다.</br>

```ts
let 날짜 = new Data();
if (날짜 instanceof Data) {
  console.log("참이에요");
}
```

이렇게 쓸 수 있고 이런 문법도 narrowing 역할을 할 수 있다.</br>
이 변수가 Date()로 부터 생성된 object 자료인지, 아니면 다른 애로부터 생성된 자료인지 이런걸 구분 가능하기 때문이다.</br>
</br>

## literal type이 있으면 narrowing이 쉽다.

```ts
type Car = {
	wheel : '4개',
  	color : string
}
type Biek = {
	wheel : '2개',
  	color : string
}

function 함수(x : Car | Bike) {
	if(x가 Car타입이면요) {
    	console.log('이 차는 ' + x.color)
    } else {
    	console.log('이 바이크는 ' + x.color)
    }
}
```

지금 Car, Bike 타입을 각각 만들었는데 object 자료가 들어올 수 있다.</br>
</br>
함수 Car 타입을 입력할 경우 뭔가 실행하고 싶은데</br>
근데 if문 안에서 narrowing 어떻게 할까?</br>
</br>
typeof 연산자 써도 그냥 object입니다~라고만 나온다 왜냐하면 typeof 연산자는 string, number, object 이런 것만 구분해주기 때문이다.</br>
위에서 배웠던 in 문법 이런걸로 narrowing 하기엔 힘들다. Car, Bike 둘 다 배타적인 속성이 없기 때문이다.</br>
</br>

**실은 object들 구분할 일이 많을 때 literal type을 만들어두면 편리한데**</br>
그럼 서로 비슷한 object들이 들어와도 literal type으로 narrowing 가능하기 때문이다.</br>

```ts
type Car = {
  wheel: "4개";
  color: string;
};
type Bike = {
  wheel: "2개";
  color: string;
};

function 함수(x: Car | Bike) {
  if (x.wheel === "4개") {
    console.log("the car is " + x.color);
  } else {
    console.log("the bike is " + x.color);
  }
}
```

literal type으로 선언된 속성이 뭔지 찾았을 뿐이다. 그러면 narrowing이 가능하다.</br>
그래서 결론은 object 자료 비슷한걸 많이 다룰 땐</br>
literal type으로 object 안에 각각 유니크한 자료를 달아두거나 그러면 나중에 구분하기 편리할 수 있다.
