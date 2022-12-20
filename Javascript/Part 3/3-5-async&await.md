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

연산 결과를 출력하거나 그러고 싶다면<br>
성공 함수에 파라미터를 담아주면 된다고 했다.<br>

```js
async function 더하기() {
  var 어려운연산 = new Promise((성공, 실패) => {
    var 결과 = 1 + 1;
    성공(결과);
  });
  var 결과 = await 어려운연산;
  console.log(결과);
}
더하기();
```

성공()함수 안에 있던 2라는 파라미터는 var결과라는 변수에 저장된다.<br>
그럼 Promise의 연산 결과를 출력해볼 수 있다.<br>
<br>
(주의) 비동기식처리되는 코드를 담는다면 await 기다리는 동안 브라우저가 잠깐 멈출 수 있다.<br>

### await은 실패하면 에러가 나고 코드가 멈춘다.

```js
async function 더하기() {
  var 어려운연산 = new Promise((성공, 실패) => {
    실패();
  });
  var 결과 = await 어려운연산;
  console.log(결과);
}
더하기();
```

어려운연산이라는 Promise가 실패할 경우 <br>
await 어려운연산이라는 코드는 에러가 나고 코드실행을 멈춘다.<br>
그럼 await 하단에 있는 코드들은 더 이상 실행이 되지 않는다.<br>
<br>

그래서 Promise가 실패할 경우<br>
코드실행을 멈추고 싶지 않으면 약간 특별한 방법이 필요하다.<br>

```js
async function 더하기(){
  var 어려운연산 = new Promise((성공, 실패)=>{
    실패();
  });
  try {  var 결과 = await 어려운연산 }
  catch { 어려운연산 Promise가 실패할 경우 실행할 코드 }
}
```

try catch라는 자바스크립트 문법인데,<br>
try {} 안의 코드가 에러가 나고 멈출 경우<br>
대신 catch {} 내부의 코드를 실행해준다.<br>
<br>
이렇게 에러처리를 할 수 있다.<br>
어려운연산이라는 Promise가 실패()가 안날거라고 자신하면 try/catch를 굳이 쓸 필요는 없으니<br>
코드가 더 간단해질 수도 있다.<br>
