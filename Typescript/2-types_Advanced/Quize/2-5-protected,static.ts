// Quiz 1. 다음 x, y, z 속성의 특징을 설명해보자
class User {
    private static x = 10;
    public static y = 20;
    protected z = 30;
}

// 1. 필드값은 원래는 모든 User의 자식들에게 물려주는 속성이지만
// x와 y에는 static 키워드가 붙었기 때문에 User.x 이런식으로만 접근해서 쓸 수 있다.
// User의 자식들은 x와 y를 쓸 수 없다.

// 2. private static x는 class 내부에서만 수정이 가능하다.

// 3. public static y는 class 내부 외부 상관없이 수정이 가능하다.(public 키워드를 지워도 똑같이 동작)

// 4. protected z는 private 키워드와 유사하게 class 내부에서만 사용이 가능한데
// 약간 범위가 넓어서 extends로 복사한 class 내부에서도 사용할 수 있다.

// Quiz 2. x 속성에 숫자를 더해주는 함수가 필요
// private static x = 10; 이 코트 수정금지

// class User2 {
//     private static x = 10;
//     public static y = 20;
// }
// User.addOne(3) => 이렇게 하면 x가 3 더해져야함
// User.addOne(4) => 이렇게 하면 x가 4 더해져야함
// User.printX() => 이렇게 하면 콘솔창에 x값이 출력되어야한다.

class User2 { 
    private static x = 10; 
    public static y = 20;
  
    static addOne(파라미터 :number){
      User2.x += 파라미터
    }
    static printX(){
        console.log(User2.x)
    }
  }
  
  // 1. addOne() 함수를 만들어 static을 붙여줬다 User2.addOne()을 사용하기 위해서
  // 2. addOne(파라미터) 실행하면 x속성에 파라미터만큼 더해준다.
  // 3. printX()를 실행하면 콘솔창에 User.x를 출력