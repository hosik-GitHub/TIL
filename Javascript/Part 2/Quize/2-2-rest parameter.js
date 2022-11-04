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

// Quiz 5. array를 만들어주는 함수를 제작하고 싶습니다.

function 어레이(){
  // (??)
}

var newArray = 어레이(1,2,3,4,5);
console.log(newArray); 

// 이렇게 작성하면 [1,2,3,4,5]가 출력되어야한다.
// 함수에 숫자를 100개 집어넣으면 Array안에 숫자100개가 들어가야함.
// 어레이라는 함수를 어떻게 만들면 될까? (new 키워드 사용금지)

function 어레이(...rest){
  return rest
}

var newArray = 어레이(1,2,3,4,5);
console.log(newArray); 

// Quiz 6.최댓값 구하기

var numbers = [2,3,4,5,6,1,3,2,5,5,4,6,7];
// Math.max()에 집어넣어서 쓰고 싶은데 어떻게 하면 좋을까?

var numbers = [2,3,4,5,6,1,3,2,5,5,4,6,7];

console.log( Math.max(...numbers) );


// Quiz 7. 글자를 알파벳순으로 정렬해주는 함수를 만들고 싶습니다. 

function 정렬(){
  // (여기 어떤 코드가 들어가야할까요?)
}

정렬('bear'); 

// 우리는 array가 아니라 문자열에도 적용할 수 있는 알파벳순 정렬함수를 하나 만들고 싶다.
// 정렬('bear')라고 사용하면
// 콘솔창에 a b e r 이렇게 입력한 문자를 알파벳 순으로 출력되게 만들고 싶으면 어떻게 해야할까요? 
// (sort() 함수 사용가능)

function 정렬(글자){
  console.log( ...[...글자].sort() )
}

정렬('bear'); 

// [...글자] 이렇게 하시면 글자를 spread로 풀어헤쳤다가 다시 array안에 담아준다. 
// ['b', 'e', 'a', 'r'] 이렇게 해준다 
// 그럼 이걸 sort()로 정렬해버리면 끝
// 그리고 정렬한 데이터를 대괄호를 다시 벗기고 싶다면 
// 거기에 spread를 또 써주면 된다.