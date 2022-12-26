// Quiz 1. key값 마지막 부분에 오타가 있다.

// var products = [
//     {
//       name1 : 'chair',
//       price1 : 7000,
//     },
//     {
//       name2 : 'sofa',
//       price : 5000,
//     },
//     {
//       name1 : 'desk',
//       price3 : 9000,
//     },
//   ]; 

// (예시)
// array안의 object안에 들어있는
// name1 : 'chair' 이게
// name : 'chair' 이렇게 술자만 깔끔하게 없어져야한다.

// isNaN(parseInt('123')) 

// 이걸 사용하면 대충 이게 숫자형 문자인지 판단이 가능하다.
// NaN은 문자에 숫자연산 하려고 하면 나오는 이상한 자료형이며 isNaN은 NaN인지 판정해준다. 
// 그래서 저기에 '123' 이걸 집어넣으면 false가 남는다. 
// 그래서 저기에 '가나다' 이걸 집어넣으면 true가 남는다. 






let 오브젝트 = {
    name1 : 'chair'
  }
  
  //마지막글자를 숫자로변환했을 때 NaN이 안나오면 (숫자면)
  if (isNaN(parseInt('name1'.slice(-1))) == false ) {
      let newValue = 오브젝트['name1'];
      let newKey = 'name1'.slice(0, -1);  //맨 뒷 문자 제거 방법
      오브젝트[newKey] = newValue;
  
      delete 오브젝트['name1']; //원래있던 key 제거
  }
  
  console.log(오브젝트)

// 1. name1 여기 가장 뒷자리 문자가 숫자인지 확인
// 2. 그게 숫자면 일단 newValue, newKey를 만들어준다.
// 3. newKey는 맨 뒷 문자를 제거해준다.
// 그리고 기존 오브젝트에 { newkey : newValue } 데이터를 추가해준다.
// 4. delete 키워드 쓰면 object에 있던 Property를 지울 수 있다.