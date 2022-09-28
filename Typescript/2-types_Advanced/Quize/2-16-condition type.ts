// Quiz 1. 타입 파라미터로

// 1. array 타입을 입력하면
// 2. array의 첫 자료가 string이면 string 타입을 그대로 남겨주고
// 3. array의 첫 자료가 string이 아니면 unknown을 남겨주게 만들기

// (동작예시)

// let age1 :Age<[string, number]>;
// let age2 :Age<[boolean, number]>;

type Age<T> = T extends [string, ...any] ? T[0] : unknown;
let age1 :Age<[string, number]>;
let age2 :Age<[boolean, number]>;

// Quiz 2. 함수의 파라미터의 타입을 뽑아주는 기계를 만들어보십시오. 

// 타입뽑기<(x :number) => void> 이러면 number가 이 자리에 남음
// 타입뽑기<(x :string) => void> 이러면 string이 이 자리에 남음

type 타입뽑기<T> = T extends (x: infer R) => any ? R : any;
type a = 타입뽑기<(x :number) => void> 

// 참고로 함수만 들어올 수 있게 제한을 두고 싶으면
// 언제나 T 라는 함수 파라미터 만들 때 extends로 제한을 두면 된다. 


