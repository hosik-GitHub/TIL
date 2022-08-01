// Q.1 코드에서 회원정보라는 변수에 타입 지정을 해보자
// 1. plusOne이라는 속성은 함수여야하고, 숫자를 넣어서 숫자를 뱉는 함수여야한다.
// 2. changeName이라는 속성은 함수여야하고, 아무것도 return하면 안된다.

type Member = {
    name : string,
    age : number,
    plusOne : ( x :number ) => number,
    changeName : () => void
  }

// Q.2 다음 함수2개를 만들어보고 타입까지 정의해보자
// 1. cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 
// 2. removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 
// 3. 함수에 타입지정시 type alias
type CutType = (x :string) => string

let cutZero :CutType = function (x){
    let result = x.replace(/^0+/, "");
    // cutZero는 파라미터 입력하면 첫 글자 0을 제거해주고 return
    return result
}
function removeDash(x :string) :number{
    let result = x.replace(/-/g, "");
    // removeDash는 파라미터 입력하면 - 대시제거해주고 return 
    // 그리고 removeDash는 return 하기 전에 숫자로 변경
    return parseFloat(result)
}