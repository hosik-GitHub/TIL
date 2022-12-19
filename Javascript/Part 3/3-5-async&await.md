### async 키워드를 쓰면 Promise 오브젝트가 생성된다.

new Promise() 어쩌구 할 필요가 없다<br>
근데 이 키워드는 function 선언 앞에만 붙일 수 있다.<br>

```js
async function 어려운연산() {
  1 + 1;
}
```

그럼 이 함수 자체가 Promise가 되어버린다.<br>
그래서 ** 이 함수를 실행할 때 뒤에 then을 붙일 수 있다. Promise이기 때문**<br>
(함수를 실행하면 그 자리에 Promise 인스턴스 (new Promise()로 만든 오브젝트)가 남는다.)<br>

```js
async function 더하기() {
  1 + 1;
}

더하기().then(function () {
  console.log("더하기 성공했어요");
});
```

그럼 이제 Promise 만들 때 했던거처럼 then을 붙여서 더하기()함수가 성공한 뒤에 뭔가를 실행시킬 수 있다.<br>

함수안에서 연산한 결과를 then 안에서 사용하고 싶다면

```js
async function 더하기() {
  return 1 + 1;
}

더하기().then(function (결과) {
  console.log(결과);
});
```

return 오른쪽에 결과를 적어주면 된다. 그럼 then함숙가지 전해진다.

### then() 함수가 귀찮다면 await 키워드를 쓸 수 있다.

async 키워드를 쓴 함수 안에서는 await을 사용가능하다.<br>
await은 그냥 프로미스.then()대체품으로 생각하면 된다.<br>
하지만 then보다 훨씬 문법이 간단하다.<br>
<br>

어떤 function 안에서 어려운 연산을 실행한 뒤에 성공/실패를 판정해주는 Promise를 만들고싶다

```js
async function 더하기() {
  var 어려운연산 = new Promise((성공, 실패) => {
    var 결과 = 1 + 1;
    성공();
  });
  어려운연산.then();
}
더하기();
```

(Promise 만들기 귀찮으면 어려운연산을 함수로 만든 후 async를 쓰면 된다.)<br>
<br>

그럼 이제 어려운연산.then() 이렇게 성공시 특정 코드를 실행할 수 있다.<br>
근데 .then()이게 너무 복잡해서 보기 싫으면<br>
await이라는 키워드를 이용 가능하다.<br>

```js
async function 더하기() {
  var 어려운연산 = new Promise((성공, 실패) => {
    var 결과 = 1 + 1;
    성공();
  });
  var 결과 = await 어려운연산;
}
더하기();
```

어려운연산.then()과 매우 유사한 문법이다.<br>
정확한 뜻은 **어려운연산 Promise를 기다린 다음에 완료되면 결과를 변수에 담아주세요**라는 뜻이다.<br>
