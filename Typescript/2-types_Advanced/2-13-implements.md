interface는 object 타입지정할 때 쓴다고 배웠는데 </br>
하지만 용도가 하나 더 있는데 class 타입을 확인하고 싶을 대도 interface 문법을 사용할 수 있다. </br>
근데 implements 키워드도 필요하다. </br>
</br>

# ⚡️ implements 키워드

```ts
class Car {
  model: string;
  price: number = 1000;
  constructor(a: string) {
    this.model = a;
  }
}
let 자동차 = new Car("morning");
```

class Car로부터 생산되는 object들은 model과 price 속성을 가지게 된다. </br>
근데 class가 model, price 속성을 가지고 있는지 타입으로 확인하고 싶으면 어떻게 할까? </br>
그럴 경우 interface + implements 키워드로 확인하면 된다. </br>

```ts
interface CarType {
  model: string;
  price: number;
}

class Car implements CarType {
  model: string;
  price: number = 1000;
  constructor(a: string) {
    this.model = a;
  }
}
let 자동차 = new Car("morning");
```

class 이름 우측에 implements를 쓰고 interface 이름을 쓰면 </br>
"이 class가 이 interface에 있는 속성을 다 들고있냐"라고 확인이 가능하다. </br>
그래서 다 갖고 있으면 괜찮고 혹여나 빠진 속성이 있으면 에러로 알려준다. </br>
</br>

## implements는 타입지정문법이 아니다.

implements라는건 interface에 들어있는 속성을 가지고 있는지 확인만하라는 뜻이다. </br>
class에다가 타입을 할당하고 변형시키는 키워드는 아니다. </br>

```ts
interface CarType {
  model: string;
  tax: (price: number) => number;
}

class Car implements CarType {
  model; // any 타입됨
  tax(a) {
    // a 파라미터는 any 타입됨
    return a * 0.1;
  }
}
```

지금 CarType을 implements 했냐고 써봤다. </br>
근데 CarType에 있던 model : string 이런게 반영되는건 아니다. class 안에서의 model은 any 타입이다. </br>
class 함수도 마찬가지로 함수에 있던 number 타입이 전혀 반영되지 않는다. </br>
결론은 implements는 class의 타입을 체크하는 용도지 할당하는게 아님을 명심하는 것이 좋다. </br>
