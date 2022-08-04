// Quiz 1. Car 클래스를 만들어보자
// 1. { model: '소나타', price:3000 } 이렇게 생긴 object를 복사해주는 class
// 2. 그리고 복사된 object 자료들은 .tax()라는 함수르르 사용 가능한데 현재 object에 저장된 price의 10분의 1을 출력
// 3. model과 price 속성의 타입지정과 tax() 함수의 return까지

// (동작예시)

// let car1 = new Car('소나타', 3000)
// console.log(car1) => 콘솔창 출력결과는 { model: '소나타', price: 3000 }
// console.log(car1.tax()) => 콘솔창 출력결과는 300

class Car {
    model : string;
    price : number;
    constructor(a: string, b: number) {
        this.model = a;
        this.price = b; 
    }
    tax() : number {
        return this.price * 0.1
    }
}

// Quiz 2. class인데 파라미터가 잔뜩 들어가는 class Word를 만들어보자
// 1. object 만들때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면
// 2. 숫자는 전부 object 안의 num 속성 안에 array 형태로 저장되고
// 3. 문자는 전부 object 안의 str 속성 안에 array 형태로 저장되는 class를 만들어보자
// 4. class 만들 때 넣을 수 있는 숫자와 문자 갯수는 일단 제한은 없다. 

// (동작 예시)

// let obj = new Word('kim', 3, 5, 'park');
// console.log(obj.num) => [3, 5]
// console.log(obj.str) => ['kim', 'park']

class Word {
    num;
    str;
// class Word를 만들고 constructor를 생성
    constructor(...param){
        // rest parameter가 들어올 수 있도록 만들고
        // 이제 new Word() 할 때 파라미터를 많이 입력 가능하다.
        let numbers : number[] = [];
        let words : string[] = [];

        param.forEach((i)=> {
            // rest parameter는 array로 들어오기 때문에 반복문을 활용하여 검사
            if(typeof i === 'string') {
                words.push(i)
                // 파라미터 타입이 문자면 words[]에 추가
            } else {
                numbers.push(i)
                // 파라미터 타입이 넘버면 numbers[]에 추가
            }
        })
        this.num = numbers;
        this.str = words;
    }
}