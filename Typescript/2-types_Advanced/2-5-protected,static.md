# ⚡️ class 안에서 쓰는 protected 키워드

private랑 비슷한 키워드가 하나 있는데 ✏️`private인데 약간 보안을 해제하고 싶을 때 사용한다.`</br>
preotected를 달아놓으면</br>

1. private와 똑같은데
2. extends된 calss 안에서도 사용가능하게 약간 보안을 풀어준다.

```ts
class User {
  protected x = 10;
}
```

User 라는 class의 x 속성은 protected이다.</br>
그럼 private와 동일하게 class 안에서만 사용이 가능해지며</br>
User의 자식들도 함부로 사용이 불가능해진다.</br>

```ts
class User {
  protected x = 10;
}

class NewUser extends User {
  doThis() {
    this.x = 20;
  }
}
```

User를 extends하는 NewUser class를 만들었다.</br>
NewUser가 갑자기 this.x 이런 식으로 x를 가져다가 쓰려고 하면</br>
➡ x가 private 속성일 경우엔 에러가 발생하지만
➡ x가 protected 속성일 경우엔 에러가 나지 않는다.

그래서 class 여러개 만들 때 class 끼리 공유할 수 있는 속성을 만들고 싶으면 `protected,`</br>
class 하나 안에서만 쓸 수 있는 속성을 만들고 싶으면 `private`를 쓰도록 하자</br>

# class 안에서 쓰는 static 키워드

</br>
우리가 class{} 안에 집어넣는 변수, 함수 이런건 전부 class로 부터 새로 생성되는 object(일명 instance)에 부여된다.</br>
근데 class에 직접 변수나 함수를 부여하고 싶으면 static 키워드를 왼쪽에 붙여주면 된다.</br>

```ts
class User {
  x = 10;
  y = 20;
}

let john = new User();
john.x; // 가능
User.x; // 불가능
```

이런 x와 y같은 변수들은 User로 부터 생성된 object들만 사용가능하다.</br>
**근데 static 키워드를 붙이면?**</br>

```ts
class User {
  static x = 10;
  y = 20;
}

let john = new User();
john.x; // 불가능
User.x; // 가능
```

john은 사용 불가능하고, User는 직접 사용이 가능하다.</br>

- 함수도 static 붙이기 가능
- extends로 class를 복사할 경우 static 붙은 것들도 따라온다.

(참고) static은 private, protected, public 키워드와 동시 사용가능하다.

```ts
class User {
  private static x = 10;
}
```

### Q.static 이런걸 언제 사용할까?

주로 class 안에 간단한 메모를 하거나, 기본 설정값을 입력하거나</br>
class로 부터 생성되는 object가 사용할 필요가 없는 변수들을 만들어놓고 싶을 때 사용한다.</br>

#### 간단한 활용 예시

```ts
class User {
  static skill = "js";
  intro = User.skill + "전문가입니다";
}
var 철수 = new User();
console.log(철수);
```

1. User 클래스를 생성
2. 자식들에게 { intro: 'js 전문가입니다' } 이걸 복사해주고 싶다.
3. 여기서 js라는 단어가 중요할 것 같아서 static skill 이 곳에다가 메모해놓고 그걸 사용했다.
4. 이제 자식들은 철수.intro 이렇게 사용할 때 마다 'js 전문가입니다'를 출력해줄 것이다.

근데 갑자기 skill을 좀 변경하고 싶다</br>
철수 이후로 생산되는 자식들은 **'js 전문가입니다'**가 아니라 **'python 전문가입니다'**를 달고 나오게 하고싶다.</br>
그럴 대 class 내부를 직접 js => python 이렇게 수정해도 되지만</br>
class가 멀리 떨어져 있거나 다른 파일에 있을 경우 귀찮을 수 있다.</br>
다행히 static 키워드로 만들어놨기 때문에 그걸 수정해버려도 된다.</br>

```ts
class User {
  static skill = "js";
  intro = User.skill + "전문가입니다";
}
var 철수 = new User();
console.log(철수);

User.skill = "python";
var 민수 = new User();
console.log(민수);
```

User.skill을 저렇게 수정해버리면</br>
이제 민수부터는 'python 전문가입니다' 이걸 달고 등장할 것이다.</br>
하지만 실은 class 내부의 기본 변수 같은걸 저렇게 수정할 일은 별로 없다.</br>
`수정하고 싶으면 private 쓰고 그 다음에 수정함수를 만들어서 사용하는게 더 안전한 방법이다.`
