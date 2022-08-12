// Quiz 1. 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어보자 
// 1. 최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야한다. 
// 2. (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능하다.
// 3. (조건2) Math.max() 사용금지 반복문 사용

function 최대값(...x : number[]) {
    // 함수를 만들었는데 파라미터 하나를 입력 가능하게 만들었으나 rest파라미터라서 많이 입력이 가능하다.
    let result = 0;
    x.forEach((i) => {
        // 반복문을 써서 파라미터로 들어온 숫자를 계속 result와 비교한다.
        if(result < i) {
            // 숫자가 더 크면 result를 그 숫자로 바꾸고
            result = i
            // 그게 아니면 그대로 놔둔다.
        }
    })
    return result
}


// Quiz 2. 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 
// 함수( { user : 'kim', comment : [3,5,4], admin : false } )
// 1. 파라미터 destructuring 문법을 사용
// 2. 함수실행시 입력한 파라미터의 value들 (kim, [3,5,4] 이런거)을 전부 콘솔창에 출력

type UserType = {
    user : string,
    comment : number[],
    admin : boolean
}

function 함수({user, comment, admin} :UserType) :void {
    console.log(user, comment, admin)
}

함수({user : 'kim', comment : [3,5,4], admin : false })


// Quiz 2. 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어보자 
// 함수2( [40, 'wine', false] )
// 1. 파라미터 destructuring 문법을 사용
// 2. 함수실행시 입력한 파라미터들을 전부 콘솔창에 출력

type 어레이 = (number | string | boolean)[];

function 함수2([a,b,c]:어레이){
    console.log(a,b,c)
}
함수2( [40, 'wine', false] )