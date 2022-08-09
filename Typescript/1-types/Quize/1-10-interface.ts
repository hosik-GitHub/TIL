// Quiz 1. interface 이용해서 간단하게 타입을 만들어보자
// let 상품 = { brand: "Samsung", serailNumber : 1360, model : ['TV', 'phone'] }

interface Product {
    brand : string,
    serailNumber : number,
    model : string[]
}

// Quiz 2. array 안에 object 여러개가 필요하다.
// 쇼핑몰 장바구니를 구현하려고 하는데
// let 장바구니 = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ]
// interface 문법 사용

interface Cart {
    product : string,
    price : number,
}
// array에 들어갈 수 있는 object 타입을 interface로 만들어봤다.

// Quiz 3. 위에서 만든 타입을 extends 해보자
// 갑자기 서비스가 업데이트되어서 일부 상품은 card 속서잉 들어가야한다.
// { product : '청소기', price : 7000, card : false }

interface Cart2 {
    product : string,
    price : number
}
interface NewCart extends Cart2 {
    card : boolean
}
// 만약 속성이 겹치지 않는다면 &연산자를 사용해도 된다. 

// Quiz 4. object 안에 함수를 2개 넣고싶다.
// 1. 이 object 자료는 plus()함수를 내부에 가지고 있으면 plus 함수는 파라미터 2개를 입력하면 더해서 return 해준다.
// 2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해준다.

interface MathObj {
    plus : (a:number, b:number) => number,
    minus : (a:number, b:number) => number
  }
  
  let object :MathObj = {
    plus(a,b){
      return a + b
    },
    minus(a,b){
      return a - b
    }
  } 