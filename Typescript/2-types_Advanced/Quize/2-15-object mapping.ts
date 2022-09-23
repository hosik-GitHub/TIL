// Quiz 1. 다음 타입을 변환기 돌려보자.

// type Bus = {
//     color : string,
//     model : boolean,
//     price : number
// }

// 위는 잘못 만든 타입이다.
// color, model, price 속성은 전부 string 또는 number 타입이어야한다.
// 1. 변환기를 하나 만들고
// 2. 기존 Bus 타입을 변환기 돌려서 위 조건을 충족하는 새로운 타입을 만들어보자.

type Bus = {
    color : string,
    model : boolean,
    price : number
}

type TypeChanger <MyType> = {
    [key in keyof MyType]: string | number;
};

type NewBus = TypeChanger<Bus>

// Quiz 2. 이런 변환기는 어떻게 만들어야할까?

// object안에 들어있는 모든 속성을
// string, number 이렇게 고정된 타입으로 변환해주는게 아니라
// 내가 원하는 타입을 입력하면 그걸로 변환해주는 범용성 좋은 변환기를 만들어보자.

type Bus = {
    color : string,
    model : boolean,
    price : number
  }
  
  type TypeChanger <MyType, T> = {
    [key in keyof MyType]: T;
  };
  
  type NewBus = TypeChanger<Bus, boolean>;
  type NewBus2 = TypeChanger<Bus, string[]>

// 이러면 TypeChanger 쓸 때마다 타입파라미터를 T 자리에 하나 더 입력할 수 있게 된다.
// 그러면 이제 오브젝트 모든 속성은 T로 바뀜

