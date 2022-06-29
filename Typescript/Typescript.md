# ⚡️ Typescript(타입스크립트)란?

---

> 타입스크립트(Typescript)는 <span style="color:CornflowerBlue">마이크로소프트(MS)에서 개발한 오픈소스 프로그래밍 언어이며</span>, <span style="color:DarkOrange">Javascript의 단점을 보완</span>하기 위해 만들어졌다.

- 모든 브라우저, 호스트, 운영처제에서 동작한다.

## 🤜🏼 🤛🏼 Typescript vs Javascript

자바스크립트(Javascirpt)는 **동적 타입 언어(dynamic type language)**이기 때문에 런타임 속도는 빠르지만 **\*타입** 안정성이 보장되지 않는다.

```js
//Javascript
funciton add(n1, n2) {
	if(typeof n1 !== 'number' || typeof n2 !== 'number') {
    	throw new Error('Incorrect Input);
    }
  return n1 + n2;
}
  const result = add(39, 28);
```

```ts
// Typescript
function add(n1: number, n2: number) {
  return n1 + n2;
}
const result = add(39, 28);
```

**\*타입** 이란 프로그램에서 다룰 수 있는 값의 종류를 의미(string, number, boolean, bigint, null, undefined,[], {} 등)하는데
타입 안정성이 보장되지 않는다는 것은 이러한 값의 종류가 잘못 전달될 경우(버그)를 잡기 어렵다는 것을 의미한다.

따라서 Typescript의 경우 타입을 선언하여 자바스크립트에서 모호하게 사용되던 타입을 제어할 수 있게되어 훨씬 더 간편하게
에러를 잡을 수 있다.

## ⚡️Typescript(타입스크립트)의 특징

---

![](https://velog.velcdn.com/images/hosickk/post/9aec6083-a39c-4ce5-a5a8-04e3d7e49f33/image.png)

### 1. ES6 모듈 및 네임스페이스

- 타입스크립트는 \***ES6**에서 제공하는 모듈 선언과 모듈 호출 방식을 지원하여 클래스가 커지고 개수가 많아지면 윶사한 기능의 클래스들을
  그룹으로 구분지어야 할때 **라이브러리 단위의 모듈 구성에 유리**하다.
  > ES6 는 ECMAScript의 약자이다. 그리고 숫자는 버전을 의미한다.
  > \*ECMAScript란 (European Computer Manufacturers Association) Script의 약자로 자바스크립트를 이루는 코어 스크립트
  > 언어이다. ECMA 인터네셔널의 ECMA-262 기술 규격에 정의된 표준화된 스크립트 프로그래밍 언어로 자바스크립트 표준 규격을 의미한다.

### 2. 클래스와 인터페이스

- 타입스크립트는 ES6의 클래스 특징을 받아들인다.
- **인터페이스** 특징을 지원함으로서 **완전한 객체지향 프로그래밍 환경**을 제공한다.
- Class, Interface, Extends처럼 전통적인 객체지향 언어에서 사용하던 키워드를 그래도 사용할 수 있다.

### 3. 타입 시스템

- 타입스크립트는 타입 시스템을 지원한다.
- 타입 시스템은 자바스크립트의 타입을 확장하고 타입 어노테이션을 이용해 **변수에 타입을 선언**할 수 있게 한다.
  > \*어노테이션이란 타입스크립트가 가진 고유의 기능이고, 자바스크립트랑 가장 차별되는 기능이다. Type이라는 요소가 코드안에 나타내어진다.

```js
let a: string;
// 이렇게 특정한 변수 혹은 특정한 개체 등에 어떤 타입이라고 지정해주는 일을 Type Annotation이라고 한다.
```

- 타입이 지정되면 변수는 엄격한 타이핑이 적용돼 **타입 안정성을 확보**한다.

### 참고자료

---

https://medium.com/@wonjong_oh/typescript-1-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80-f4b02f54009c

https://ssungkang.tistory.com/entry/ES6-ES%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80-%EC%99%9C-ES6%EC%9D%B8%EA%B0%80
