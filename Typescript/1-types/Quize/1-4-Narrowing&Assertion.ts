// Quiz 1. 숫자 여러개를 array 자료에 저장해놨는데
// 가끔 '4','5' 이런 식의 문자타입의 숫자가 발견되고 있다.
// 이걸 클리닝해주는 함수가 필요하다.
// 클리닝함수(['1',2,'3']) 이렇게 숫자와 문자가 섞인 array를 입력하면
// [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어보고 타입지정까지 확실히 해보자.

function cleaning(a :(number|string)[]) {
    // cleaning 함수를 만들어 파라미터로 array를 집어 넣을 수 있다
    let cleaningComplete :number[] = [];
    // cleaningComplete된 array를 cleaningComplete라고 선언

    a.forEach((b)=> {
        // array를 반복하기 위해 forEach() 함수를 사용
        if (typeof b === 'string') {
            cleaningComplete.push(parseFloat(b))
            // 반복문을 돌리면 array 안에 있던 하나하나의 자료가 b라는 파라미터로 나오는데
            // 그게 string 타입이면 parseFloat(b)에 넣어 숫자로 바꾸고 array에 push(삽입)
        } else {
            cleaningComplete.push(b)
            // 만약 number 타입이면 바로 cleaningComplete 함수에 push(삽입)
        }
    })
    return cleaningComplete
}

console.log(cleaning([123, '3']))


// Quiz 2. 다음과 같은 함수를 만들어보자
// let hosikTeacher = { subject : 'math' }
// let chulsuTeacher = { subject : ['science', 'english'] }
// let minsuTeacher = { subject : ['science', 'art', 'korean'] }

// 지금 여러 변수에 선생님이 가르치고 있는 과목이 저장되어 있다.
// 과목 1개만 가르치는 선생님들은 문자 하나로 과목이 저장이 되어 있고
// 과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어 있다.

// 호식선생님 같은 경우 object 자료를 집어 넣으면
// 그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어보자
// 타입지정 또한 엄격하게!

//예시 
// teacherClass( { subject : 'math'} ) => 이 경우 'math'를 return
// teacherClass( { subject : ['science', 'art', 'korean' ] } ) => 이 경우 'korean'을 return
// teacherClass( { subject : 'hi' } ) => 이 경우 타입에러를 나타내면된다.

