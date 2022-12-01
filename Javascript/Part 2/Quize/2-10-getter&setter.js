// Quiz 1.직접 class 구조 만들어보기

var 강아지1 = { type : '말티즈', color : 'white' };
var 강아지2 = { type : '진돗개', color : 'brown' }; 

// class를 만들어 강아지 오브젝트들을 뽑고 싶은데 class를 어떻게 만드는게 좋을까?

class Dog {
    constructor(타입, 칼라){
      this.type = 타입;
      this.color = 칼라;
    }
  }
  var 강아지1 = new Dog('똥개', 'black');

// Quiz 2.고양이관련 object들을 만들기

var 고양이1 = { type : '코숏', color : 'white', age : 5 };
var 고양이2 = { type : '러시안블루', color : 'brown', age : 2 }; 

// type, color는 이전에 만든 강아지 object와 유사한데
// 고양이들만 특별하게 age라는 속성을 하나 더 추가하고 싶다. 
// 1번 문제에서 만들었던 강아지 class와 유사하기 때문에 extends라는 문법을 사용

class Dog {
    constructor(타입, 칼라){
      this.type = 타입;
      this.color = 칼라;
    }
  }
  
  class Cat extends Dog {
    constructor(타입, 칼라, 나이){
      super(타입, 칼라);
      this.age = 나이;
    }
  }

// Quiz 3.고양이와 강아지 object들에게 기능 추가

// 모든 고양이와 강아지 object들은 .한살먹기()라는 함수를 사용할 수 있다.
// (1) 한살먹기 함수는 강아지 class로부터 생성된 오브젝트가 사용하면 콘솔창에 에러를 출력
// (2) 한살먹기 함수는 고양이 class로부터 생성된 오브젝트가 사용하면 현재 가지고있는 age속성에
// 1을 더해주는 기능을 실행해야한다.

class Dog {
    constructor(타입, 칼라){
      this.type = 타입;
      this.color = 칼라;
    }
    한살먹기(){
      if( this instanceof Cat) {
      this.age++
      }
    }
  }
  
  class Cat extends Dog {
    constructor(타입, 칼라, 나이){
      super(타입, 칼라);
      this.age = 나이;
    }
  }

// a ubstabceif b 이렇게 쓰면 a가 b로부터 생성된 오브젝트인지 아닌지를 true/false로 알려주는 연산자이다.
// 그래서 한살먹기()라는 함수를 만들고 this.age++를 해주는 기능을 넣었는데 이 기능은 this가 instanceof Cat인 경우에만
// 실행하도록 if문을 추가했다.
// 그럼 이제 Cat으로부터 생성된 오브젝트들만 한살먹기() 내부 기능을 사용가능하다.


// Quiz 4. get/set을 이용해보기

// (1) 모든 Unit의 인스터스는 공격력, 체력 속성이 있으며 기본 공격력은 5, 기본 체력은 100으로 설정
// (2) 모든 Unit의 인스턴스는 전투력을 측정해주는 battlePoint라는 getter가 있다.
// console.log(인스턴스.battlePoint) 이렇게 사용하면 현재 공격력과 체력을 더한 값을 콘솔창에 출력
// (3) 모든 Unit의 인스턴스는 heal이라는 stter가 있다.
// 인스턴스.heal = 50 이렇게 사용하면 체력 속성이 50 증가

class Unit {
  constructor(){
    this.체력 = 100;
    this.공격력 = 5;
  }
  get battlePoint(){
    return this.체력 + this.공격력;
  }
  set heal(a){
    this.체력 = this.체력 + a; 
  }
};

var 쎈애 = new Unit();

console.log(쎈애.battlePoint);
쎈애.heal = 50;

// 1. Unit이라는 class를 만들고 constructor에는 체력과 공격력을 기본으로 부여
// 2. battlePoint() 라는 함수를 만들고 이건 체력과 공격력을 합해서 출력하는 기능
// get을 붙여서 소괄호 없이도 이용하게 만듬
// 3. heal() 이라는 함수를 만들었고 파라미터로 숫자를 입력하면 체력이 그만큼 증가
// set을 붙여서 소괄호없이도 이용 가능