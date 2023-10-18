//test4.js
'use strict';

class Member {
  // name;   
  // age;
  
  //생성자
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color; 
    
    // name;
    // age;
    // color; 
  }

  // getter 생성
  get name() {
    return this._name;
  }

  get age() {
    // return this._age -1;
    return this._age;
  }

  get color() {
    return this._color;
  }

  // setter 생성
  set name(name) {
    this._name = name;
  }

  set age(age) {
    if(age < 1) age = 1;
    this._age = age;
  }

  set color(color) {
    
    if(color == '검정' || color == '깜정' || color == '흑색') color = '검정';
    //else color = color;
    this._color = color;
  }
}