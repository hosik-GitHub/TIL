// Quiz 1.변수를 마구 만들었는데
// a와 address와 number라는 변수는 각각 무슨 값을 가지고 있을까?

// var [number, address] = [ 30, 'seoul' ];
// var {address : a , number = 20 } = { address, number };

var {address : a , number = 20 } = { address : 'seoul', number : 30 };


// Quiz 2.다음과 같은 Object에서 데이터를 뽑아서 변수를 만들고 싶다.
// 여기서 키, 몸무게, 상의사이즈, 하의사이즈 정보를 각각 뽑아서 4개의 변수를 만드려면?

// let 신체정보 = {
//     body: {
//       height: 190,
//       weight: 70
//     },
//     size: ["상의 Large", "바지 30인치"],
//   };


let 신체정보 = {
    body: {
      height: 190,
      weight: 70
    },
    size: ["상의 Large", "바지 30인치"],
  };
  
  let {
    body: {
      height, 
      weight
    },
    size: [ 상의, 하의 ]
  } = 신체정보;