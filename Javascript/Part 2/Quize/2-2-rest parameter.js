// Quiz 1. spread 문제 1

var a = [1,2,3];
var b = '김밥';
var c = [...b, ...a];
console.log(c);
// 위 코드의 출력 결과는?

// ['김', '밥', 1, 2, 3 ] 이라는 array가 출력. 
// 글자를 spread하면 한글자씩 콤마로 분열이 되고 
// array를 spread 하면 대괄호를 제거한다. 

// Quiz 2. spread 문제 2

var a = [1,2,3];
var b = ['you', 'are'];
var c = function(a,b){
  console.log( [[...a], ...[...b]][1] )
}
c(a,b);
// 위 코드의 출력 결과는?

// [ [...a], ...[...b] ][1] 여기서 a와 b를 집어넣어보면
// [ [1,2,3], ...['you', 'are'] ][1] 이렇게 되고 spread를 해치워버리면 
// [ [1,2,3], 'you', 'are' ][1] 이렇게 되고 [1]이라는건 1번째 자료라는 뜻이니까 출력해보면
// 'you'라는 글자가 콘솔창 출력된다. 

// Quiz 3. default 파라미터 문제 1

function 함수(a = 5, b = a * 2 ){
    console.log(a + b);
    return 10
  }
  함수(3);
// 위 코드의 출력 결과는?

// 함수는 두개의 파라미터를 입력할 수 있는데 3만 집어넣어서 실행하고 있다. 
// a자리에 파라미터 하나만 집어넣었다는 이야기이다.
// 그럼 b라는 파라미터는 default 파라미터가 발동해서 a * 2 라는 값을 가지게 된다. 
// 그래서 a는 3, b는 6
// 9가 출력된다.

// Quiz 4. default 파라미터 문제 2

function 함수(a = 5, b = a * 2 ){
    console.log(a + b);
  }
  함수(undefined, undefined);
// 위 코드의 출력 결과는?

// 일부러 파라미터로 undefined를 입력하면?
// 그냥 파라미터를 입력하지 않은 것과 동일하다.  
// 그래서 default 파라미터가 발동되어 15라는 결과를 출력된다. 



