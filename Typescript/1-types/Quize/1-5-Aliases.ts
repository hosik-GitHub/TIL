// Quiz 1. 다음 조건을 만족하는 타입을 만들어보자
// 이 타입은 object 자료형이어야한다.
// 이 타입은 color 라는 속성을 가질 수도 있으면 항상 문자가 들어와야한다.
// 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야한다.
// 이 타입은 position 이라는 변경 불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야한다.
// Type alias로 만들어보자
type MyType = {
    color? : string,
    size : number,
    readonly position : number []
}

let testFunction : MyType = {
    size : 123,
    position: [1,2,3]
}

// Quiz 2. 다음을 만족하는 type alias를 연습삼아 간단히 만들어보자
// { name : 'kim', phone : 123, email : 'abc@naver.com'} 이렇게 생긴 object 자료를 다룰 일이 많다.
// object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어보자
// 각 속성이 어떤 타입일지는 자유롭게 정해보자

type User = {
    name : string,
    phone : number,
    email? : string,
}

let UserInfo : User = {
    name : 'kim',
    phone : 123,
}

// Quiz 3. 다음을 만족하는 type alias를  만들어보자
// 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어보자
// 미성년자 여부 속성은 true/false만 들어올 수 있다
// 이전에 만들어둔 type alias를 재활용해서 만들어보자

type User2 = {
    name : string,
    phone : number,
    email? : string,
}

type Adult = { adult : boolean }

type NewUser = User2 & Adult;

let UserInfo2 : NewUser = {
    name : 'kim',
    adult : false,
    phone : 1234
}