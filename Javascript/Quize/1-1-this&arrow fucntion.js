// Quiz 1. 간단한 메소드 만들기

// 사람이라는 오브젝트가 하나 있다.
// 이 오브젝트에 sayHi라는 함수를 (메소드를) 하나 추가하고싶다.

// var = 사람 = {
//     name: '손흥민'
// }
// 사람.sayHi(); => 안녕 나는 손흥민

// 위의 코드처럼 사람.sayHi()라고 작성하면 '안녕 나는 손흥민' 이라는 글자가 나와야한다.
// '손흥민'이라고 이름을 하드코딩해서 출력하기보다는 실제 내 오브젝트에 있는 name에 해당하는 값이 출력되게 하자

var 사람 = {
    name: '손흥민',
    sayHi : function() {
        console.log('안녕 나는 ' + this.name)
    }
}

// Quiz 2. 오브젝트 내의 데이터를 전부 더해주는 메소드 만들기

// var 자료 = { 
//     data : [1,2,3,4,5] 
//   }
//   자료.전부더하기();

// 위처럼 자료.전부더하기()라고 쓰면 자료.data 안에 있는 모든 숫자를 더해서 콘솔창에 출력
// 조건) 위에있는 자료라는 object 중괄호 {} 내에 코드 작성 금지 

var 자료 = { 
    data : [1,2,3,4,5] 
  };
  
  자료.전부더하기 = function(){
    var 합 = 0;
    this.data.forEach(function(a){
      합 = 합 + a;
    });
    console.log(합);
  }
  자료.전부더하기();

// Quiz 3. setTimeout 이용해보기

{/* <button id="버튼">버튼이에요</button>

<script>

  document.getElementById('버튼').addEventListener('click', function(){
    console.log(this.innerHTML)
  });

</script> */}

// 그럼 setTimeout을 이용해서 1초 후에 this.innerHTML을 콘솔창에 출력하고 싶으면 어떻게 코드를 수정해야할까?
// 1초 후에 '버튼이에요'라는 글자가 콘솔창에 등장하면 성공

<button id="버튼">버튼이에요</button>

<script>

  document.getElementById('버튼').addEventListener('click', function(){
    setTimeout(()=>{ console.log(this.innerHTML) }, 1000); 
  });

</script>