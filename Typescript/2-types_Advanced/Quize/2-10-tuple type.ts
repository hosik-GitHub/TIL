// Quiz 1. 이렇게 생긴 자료는 타입지정 어떻게 해야할까?

// let arr = ['동서녹차', 4000, true, false, true, true, false, true]

type Arr = [string, number, ...boolean[]]
let arr :Arr = ['동서녹차', 4000, true, false, true, true, false, true]; 

// Quiz 2. 함수에 타입지정을 해보자.

// 1. 이 함수의 첫째 파라미터는 문자,
// 2. 둘째 파라미터는 boolean,
// 3. 셋째 파라미터부터는 숫자 또는 문자가 들어와야한다. 
// 그럼 함수에 파라미터를 어떻게 만들고 타입지정은 또 어떻게 해야할까? 

function tuple(...rest :[string, boolean, ...(number|string)[] ]){
}

tuple('a', true, 6, 3, '1', 4)

// Quiz 3. 다음과 같은 문자/숫자 분류기 함수를 만들어보자

// 파라미터 중 문자만 모아서 [] 에 담아주고, 숫자만 모아서 [] 에 담아주는 함수가 필요하다
// 문자 숫자 외의 자료는 입력불가능하고 파라미터 갯수 제한은 일단 없다

// (동작예시)
// 함수('b', 5, 6, 8, 'a') 이렇게 사용할 경우 이 자리에 [ ['b', 'a'], [5, 6, 8] ] 이 return 되어야한다.

function tuple2(...rest :(string|number)[]){

    let result :[string[], number[]] = [[],[]];
  
    rest.forEach((a)=>{
      if (typeof a === 'string') {
        result[0].push(a)
      } else {
        result[1].push(a)
      }
    })
  
    return result;  
  } 

// 1. 함수 만들고, 파라미터는 몇개가 들어올지 몰라서 rest parameter 썼다
// 2. 결과를 저장할 result라는 변수를 만들었고. 기본값은 [[], []] 이렇게 만들었고 그거 타입지정은 tuple type을 활용
// 3. rest 파라미터에 반복문 돌리고, 타입이 string이면 result[0]에 추가해주고 number면 result[1]에 추가
