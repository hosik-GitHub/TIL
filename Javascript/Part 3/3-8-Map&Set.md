### 매핑을 할 수 있는 Map 자료형

Object자료형과 똑같이 key, value 형태로 자료를 저장할 수 있는 자료형이다. <br>

```js
var person = new Map();
person.set("name", "Kim");
person.set("age", 20);
```

이렇게 만들고 자료를 저장할 수 있다.<br>
그럼 name은 kim, age는 20이라는 자료가 저장된다.<br>
근데 출력해보면 Object와는 약간 다르다.<br>
![](https://velog.velcdn.com/images/hosickk/post/54f720a4-cedd-4503-91de-83ba7e77c0a0/image.png)

화살표로 나타내준다. 왜냐하면 Map 자료형은 자료의 연관성을 표현하기 위해 쓰기 때문이다.<br>
key, value형식으로 저장하려면 Object를 쓰면 되고, <br>
name이 Kim과 연관되어있다~라고 저장하고 싶으면 Map을 쓰면 된다.<br>
**자료들 간의 연관성을 표현하기 위해 쓰는 자료형이 바로 Map**

### Map 자료형은 key, value값에 모든 자료를 집어넣을 수 있다.

key값란에 다 집어넣을 수 있다.

```js
var person = new Map();
person.set([1, 2, 3], "Kim");
person.set("age", 20);
```

자료의 이름으로 array도 되고 obejct도 된다. 단순하게 자료의 이름이라기보다는<br>
Map은 이 값이 저 값과 연관되어있다 라는걸 표현하기 위함이기 때문이다.<br>

### Map 다루는법

```js
var person = new Map();
person.set("age", 20);

person.get("age"); // 자료 꺼내기
person.delete("age"); // 자료 삭제
person.size; // 자료 갯수 파악

// Map자료 반복문 돌리기
for (var key of person.keys()) {
  console.log(key);
}

// 자료를 직접 집어넣고 싶으면

var person = new Map([
  ["age", 20],
  ["name", "kim"],
]);
```

알고리즘 공부를 하게 된다면 Map 자료형을 사용하게 된다.<br>
array 같은 곳에 자료를 저장할 때 자료가 천만개 1억개 이상으로 많으면 Hash Map, Hash Table을 사용한다<br>
왜냐면 1억개 자료가 저장된 array에서 원하는 것만 뽑고 싶으면 반복문을 돌려서 1억개를 전부 들춰와야하기때문이다.<br>

```js
var array = [1, 5, 34, 67, 43, 2, 213, 8];
```

이런 자료에서 2라는 자료가 어딨는지 찾고싶을때 몇번째인지 모르니까 반복문을 돌려서 하나하나<br>
출력해봐야하는 것이기 때문에 속도가 늦다.<br>
<br>
근데 Hash Table을 쓰면 자료를 미리 abc 순으로 정돈이 가능한데<br>
abc 순으로 정돈된 자료는 매우 찾기 빠르다.<br>
그래서 자료가 무수히 많고 거기서 원하는 걸 찾을 일이 많으면 Hash Table을 사용한다.<br>
자료에 Key값을 부여해놓고 정렬하면 그게 Hash Table 만들기 끝이다.<br>
