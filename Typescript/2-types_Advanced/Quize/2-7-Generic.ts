// Quiz 1. 문를 집어넣으면 문자의 갯수, array를 집어넣으면 array안의 자료 갯수를 콘솔창에 
// 출력해주는 함수는 어떻게 만들까?

// (동작예시)
// 함수<string>('hello') 이렇게 사용하면 콘솔창에 5가 나와야한다.
// 함수<string[]>( ['kim', 'park'] ) 이렇게 사용하면 콘솔창에 2가 나와야한다.

function 함수<MyType extends string | string[]>(x: MyType) {
    console.log(x.length)
}

// 1. <>에 집어넣은 타입은 extends를 이용해서 string 또는 string[]의 특성을 가지고 있는지 확인

// Quiz 2. Animal 이라는 타입이 있다.

// interface Animal {
//     name : string;
//     age : number
// }
// let data = '{"name" : "dog", "age" : 1}'

// 그리고 data라는 변수도 있다. object처럼 생겼지만 따옴표 쳐진 JSON 자료이다.
// data라는 JSON 자료를 object{} 자료로 변환을 해서 return 해주는 함수를 만들어보자
// 근데 변환된 object의 타입은 Animal이 되었으면 좋겠는데 어떻게 코드를 짜면 될까?
// Generic을 이용해서 구현해보자.

// (동작예시) 함수<Animal>(data) 이렇게 쓰면 이 자리에 { name : 'dog' , age : 1 } 이런 object 자료가 남아야합니다. 근데 타입은 Animal

interface Animal {
    name : string;
    age : number
}

let data = '{ "name" : "dog" , "age" : 1 }';

function function2<Type>(x :string) :Type {
    return JSON.parse(x);
}

let result = function2<Animal>(data)
console.log(result)


// Quiz 3. class를 수정해보자

// class Person {
//     name;
//     constructor(a){
//         this.name = a;
//     }
// }
// let a = new Person('어쩌구'); 
// a.name => 여기선 any 타입

// string[]을 집어넣으면 string[] 타입이 되게하려면 위 코드를 어떻게 수정해야할까?
// Generic을 이용해보자

class Person <T> {
    name;
    constructor(a :T){
        this.name = a;
    }
}
let a = new Person<string>('어쩌구');
a.name // string 타입

// 이제 new Person 할 때마다 타입 파라미터를 입력할 수 있게되며 내마음대로 타입지정이 가능하다.