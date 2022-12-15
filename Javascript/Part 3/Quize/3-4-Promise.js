// Quiz 1. <img> 이미지 로딩 성공시 특정 코드를 실행

// HTML 안에 있는 이미지 로딩이 끝나면 무언가 코드를 실행하고 싶다.
// <img id="test" src="https://codingapple1.github.io/kona.jpg"> 

// 이 이미지가 로드가 되면 콘솔창에 성공, 로드가 실패하면 콘솔창에 실패를 출력하게 만들어라
// Promise 문법의 then, catch 함수를 사용

var img = document.querySelector('#test');

img.addEventListener('load', function(){
    로딩성공시 실행할 코드
});
img.addEventListener('error', function(){
    로딩실패시 실행할 코드
});


var 이미지로딩 = new Promise(function(성공, 실패){
    var img = document.querySelector('#test');
    img.addEventListener('load', function(){
        성공();
    });
    img.addEventListener('error', function(){
        실패();
    });
    
  });
  
  
  이미지로딩.then(function(){
    console.log('성공했어요')
  }).catch(function(){
    console.log('실패했어요')
  })

// Quiz 2. Ajax 요청이 성공하면 무언가 코드를 실행하고 싶다.

// https://codingapple1.github.io/hello.txt 라는 경로로 GET 요청을 하면 인삿말이 하나 딸려온다
// 여기로 GET 요청을 해서 성공하면 Promise의 then 함수를 이용해서 Ajax로 받아온 인삿말을 콘솔창에 출력

{/* <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>  */}

$.get('https://codingapple1.github.io/hello.txt').done(function(결과){
  console.log(결과)
});

var 프로미스 = new Promise(function(성공, 실패) {
    $.get('https://codingapple1.github.io/hello.txt').done(function(결과){
      성공(결과)
    });
});

프로미스.then(function(결과) {
  console.log(결과);
})

