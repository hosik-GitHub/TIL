// Quiz 1. 다음 자료의 타입을 지정해보자.

// let obj = {
//     model : 'k5',
//     brand : 'kia',
//     price : 6000,
//     year : 2030,
//     date : '6월',
//     percent : '5%',
//     dealer : '김차장',
// }
type Car = {
    [key :string] : number | string
  }
  
  let obj :Car = {
    model : 'k5',
    brand : 'kia',
    price : 6000,
    year : 2030,
    date : '6월',
    percent : '5%',
    dealer : '김차장',
  }


// Quiz 2. 다음 object 자료의 타입을 interfacef를 사용해서 만들어보자

// let obj = {
//     'font-size' : 10,
//     'secondary' : {
//       'font-size' : 12,
//       'third' : {
//         'font-size' : 14
//       }
//     }
//   }

interface MyType {
    'font-size' : number,
    [key :string] : number | MyType,
}

let obj2 = {
    'font-size' : 10,
    'secondary' : {
      'font-size' : 12,
      'third' : {
        'font-size' : 14
      }
    }
  }

// 1. MyType을 만들었는데 여기 안엔 'font-size' 속성, 그리고 모든 문자 속성이 들어갈 수 있다.
// 2. 모든 문자 속성이 들어오면 number | MyType을 가져야한다고 타입지정
