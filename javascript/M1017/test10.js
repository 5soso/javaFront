//test10.js
//숫자함수

'use strict';

let su1 = 10;
let su2 = -20;
let su3 = 3.11;
let su4 = -3.14; 
let su5 = 31.5;
let num = 0;

num = Math.max(su1,su2,su3,su4,su5);
num = Math.min(su1,su2,su3,su4,su5);
num = Math.ceil(su3); //반올림이 안 되도 무조건 올림.
num = Math.ceil(su4);
num = Math.floor(su3); //무조건 내림.
num = Math.floor(su4);

num = Math.trunc(su3); //소수점 무조건 버림
num = Math.trunc(su4); //소수점 무조건 버림

num = Math.pow(2,5); //2의 5승 값
num = Math.abs(su2); //절대값 양수
num = Math.sqrt(16); //루트값.

num = su3.toFixed(1);  //매개변수로 지정된 소수이하 자리수까지 출력시켜준다.(반올림처리 한다.)
num = su5.toFixed(0); //toFixed 메소드.. round 사용 안 하고 이거 써도 됨..

num = Math.round(su3); //math에 들어있는 round함수 

num = Math.random(); // 0 <= 난수 < 1 실수형 난수
num = Math.random() * 10; // 
num = parseInt(Math.random() * 10); // 0~9 실수형 난수
num = parseInt(Math.random() * 10)+1; // 1~10 정수형 난수
num = parseInt(Math.random() * (14-5+1))+5; // 5~14까지의 난수

demo.innerHTML = num;