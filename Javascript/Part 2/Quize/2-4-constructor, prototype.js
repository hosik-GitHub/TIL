// Quiz 1. 오브젝트 자료 만들기

var 학생1 = { name : 'Kim', age : 20 }
var 학생2 = { name : 'Park', age : 21 }
var 학생3 = { name : 'Lee', age : 22 }

// 하드코딩해서 3개를 만들었는데 만들일이 더 많이 생길 것 같아서 constructor를 제작하려고한다.
// constructor문법을 사용해서 위의 오브젝트와 똑같은 오브젝트 3개를 한번 뽑아보자.
// 여기에 학생1.sayHi()라고 사용하면 "안녕 나는 Kim이야" 라는 글자가 콘솔창에 나오도록
// sayHi()라는 함수도 constructor안에 추가

function Student(이름, 나이){
    this.name = 이름;
    this.age = 나이;
    this.sayHi = function(){
      console.log('안녕 나는 ' + this.name + '이야');
    }
  }
  
  var 학생1 = new Student('Kim', 20);
  var 학생2 = new Student('Park', 21);
  var 학생3 = new Student('Lee', 22);

// Quiz 2. 다음 코드의 출력 결과는?

function Parent(){
    this.name = 'Kim';
  }
  var a = new Parent();
  
  a.__proto__.name = 'Park';
  console.log(a.name)

// 'Kim'이 출력된다.
// 첫 4줄에 의해서 a = { name: 'Kim' }이 되고
// a.__proto__.name='Park'; 이건 부모 prototype에 { name:'Park' } 이걸 추가라하는 뜻이다.
// 그럼 이제 a.name이라고 사용했을 때
// 내가 직접 가지고 있는 { name: 'Kim' }을 우선 출력해준다.

// Quiz 3. 함수가 들어가지 않는 이유는?

// 위에 0번 문제에서 Student라는 부모에 sayHi라는 함수를 하나 추가하라고했다.
// 그래서 sayHi()라고 사용하면 "안녕 나는 ~~이야" 라고 내 이름을 출력해주는 함수를 prototype에 추가했다.
// 하단처럼 만들었는데 의도한대로 이름이 출력되지 않고 있다.
// 그 이유는 무엇일까?

function Student(이름, 나이){
    this.name = 이름;
    this.age = 나이;
  }
  
  Student.prototype.sayHi = () => {
      console.log('안녕 나는 ' + this.name + '이야');
    }
  var 학생1 = new Student('Kim', 20);
  
  학생1.sayHi(); //왜 이 코드가 제대로 안나올까?

// arrow function은 this를 바깥에 있는 this를 그대로 사용하고 싶을 때 쓰는 함수라고 했다.
// 그런데 sayHi() 함수를 만들때 arrow function을 사용해서
// 내부에 있던 this라는 값이 이상해진 것이다.

Student.prototype.sayHi = () => {
    console.log(this);
}

// sayHi 함수에 그냥 this 하나만 출력해보면 window 같은게 출력된다 (strict mode에선 undefined)
// 이전 강의내용에 따르면 arrow function을 사용하면 그냥 바깥 아무데나 있던 값을 가져와서 사용한다.
// 바깥 this 값은 window이며, 그 window를 그대로 함수 안에다가 적용했기 때문이다.

// Quiz 4. 모든 array에 적용할 수 있는 함수를 직접 새로 만들려면 어떻게 해야할까?

// 모든 array에 붙일 수 있는,
// array 내에 있는 3이라는 값을 제거해주는 유용한 함수를 하나 만들고싶다.

var arr = [1,2,3];
arr.remove3();

console.log(arr); //[1,2]

// 이렇게 array뒤에 붙이기만 하면 array 내의 3이라는 모든 숫자 자료들이 삭제된다.
// remove3()함수는 어떻게, 어디에 만들어야 모든 array에 쓸 수 있을까?

Array.prototype.remove3 = function(){
    for (var i = 0; i < this.length; i++) {
      if ( this[i] === 3 ) {
        this.splice(i,1);
      }
    }
  };
  
  var arr = [1,2,3,4];
  arr.remove3();
  
  console.log(arr); //[1,2,4]

// remove3()함수는
// 1. this라는 array의 길이만큼 반복문을 돌리는데, 돌리는 과정에서 this[i]라고 쓰면서 this 안에 있는 모든 데이터를 출력해본다.
// 2. 만약에 this[i]가 3이면
// 3. this라는 array에서 i번째 자료를 제거해주세요
// 4. 라고 썼다.(splice라는 함수는 array안에 뭘 제거할때 사용한다.)
