//test8.js
//배열처리에 대한 사용예
'use strict';

let arr1 = [
'문자자료',
5,
[2,4,6,8],
{tel : '010-1234-5678'}, // {}-객체
function() {console.log('안녕하세요');} //배열 안에 함수-익명객체로 올 수 있음
];

console.log("arr1 : ", arr1);
console.log("1. : ", arr1[2]);
console.log("2. : ", arr1[4]);
console.log("=======================================");

let arr2 = new Array();
arr2[0] = '감자',
arr2[1] = 15, 
arr2[2] = [1,3,5,7], 
arr2[3] = {name : '홍길동'}, 
arr2[4] = function(){console.log("방가방가");};
console.log("arr2 : ", arr2); 

arr2.push(25);
console.log("arr2 : ", arr2); 
console.clear();

let str1 = arr2.join("-"); //원하는 구분 기호를 넣을 수 있음
console.log("str1 : ", str1); //나머지 그대로 값 들어감, 객체만 object로 들어감..
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

arr2.forEach(function(data, idx) {
  console.log(data, " : " , idx);
});

arr2.forEach((data, idx) => console.log(data, " : " , idx));  //function을 지우고 괄호 뒤에 => 쓰기. 한줄일 경우엔 {} 중괄호 지울 수 있음.
console.log("===================================");

arr2.map((data,idx) => console.log(data," : ", idx)); 

console.log("/////////////////////////////////////////////////////");

// 수식으로 걸러내기 : filter
arr2.filter(function(data, idx) {console.log(data, " : ", idx);});
arr2.filter((data, idx) => console.log(data, " : ", idx)); 

console.log("/////////////////////////////////////////////////////");
let res1 = arr2.filter((data, idx) => idx % 2 == 0);
console.log("res1 : ", res1);

//map은 체이닝 기법을 사용할 수 있다.
arr2.filter((data, idx) => idx % 2 == 0)
              .map((data,idx) => console.log("연습", data, " : " , idx));
console.log("%%%%%%%%%%%%%%%%%%%%");
let res2 = new Array(); // 'use strict'
res2 = arr2.filter((data, idx) => idx == 2)
              //.map((data,idx) => console.log("연습2", data, " : " , idx));
              // .map((data) => res2.push(data));
              .map((data) => data);
console.log("res2 :", res2);


const arr3 = [10,8,20,15,11,17];  
console.log("arr3 : ", arr3);

// 오름차순 정렬 : sort() ==> 문자형식으로 정렬한다.
let res3 = arr3.sort(); //오름차순 정렬 (제일 큰 값이 제일 끝)
console.log("res3 : ", res3); //화살표 바로 옆에 값 보기..

// 내림차순 정렬 : reverse() ==> 문자열 형식으로 거꾸로 정렬한다.
let res4 = arr3.reverse(); //내림차순 정렬 
console.log("res4 : ", res4);

console.log("arr3 : ", arr3); //처음 넣었던 데이터 값 순서와 바뀜. 원본 데이터가 바뀐다.. 
arr3.forEach((data, idx) => console.log(data, " : " , idx)); //문자형식으로 비교하기 때문에, 8과 20 비교하면 8이 더 크다.
console.clear();

//최대 최소값
let max = Math.max(10,8,20,15,11,17); //수학 클래스 안의 max함수... 숫자로 비교한다.
console.log("arr3 : ", arr3);
console.log("max : ", max);
let min = Math.min(10,8,20,15,11,17);
console.log("min : ", min);

let max2 = Math.max(arr3);
console.log("max2 : ", max2); //Nan = 숫자가 아니다. arr3=[] 배열 각괄호가 있기때문에..

max2 = Math.max(...arr3); //배열의 '요소'를 보기 위해서 '...' 적기
console.log("max2 : ", max2);

let min2 = Math.min(...arr3);
console.log("min2 : ", min2);