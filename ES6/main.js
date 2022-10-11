

var num = 3; //변수 중복선언 가능

let str = "a"; //변수 중복선언 불가능

const constant = 10; //변수 중복선언 불가능, 재선언 불가능 초기값이외에 변경 불가, 변수라고 안하고 상수라고함.

/**
1.변수명은 카멜케이스 방법으로 작성.
2.변수명은  숫자,특수문자로 시작하면 안된다.
3.문자, $로 시작하는건 가능.
4.상수(const)는 대문자 혹은 스네이크케이스 방식으로 작성
5.예약어는 사용불가
*/

/**
 * 
 자료형 개념

원시타입 primitive type
숫자형
문자열형
논리형
null  (tpyeof는 object)
undefined
Symbol()


참조타입
배열array
객체object
함수 function


typeof는 자료형을 파악할때 사용함.

 */
console.log(typeof(1));



let IsInfinity = 10/0;   
let IsNan = 10/"칠";

console.log(IsInfinity, IsNan); 





// undefined는 자동으로 부여되지만 null은 사용자가 지정  let str = null

//배열형
let str1 = [];
let arr = [10,20];
let arr2 = [10,"abc", true, null, undefined, function(){},{}];

console.log(arr2);

//객체
let obj = {};
let student1 = {
    koreanScore: 90,
    math: 80,
    eng: 190
};

console.log(student1);

console.log(student1["koreanScore"]);

console.log(student1.eng);

//함수 선언식
function gugudan(){
    let n = 1;
    if(n<10){
        for(let i=1; i<10; i++){
            console.log(n*n+1);
        n++;
        }
    }
}

//함수 표현식   함수표현식은 변수의 이름으로만 호출 가능  함수 명이 없어도 되고 없으면 익명함수라고함.
const foo = function (){
    let n = 1;
    if(n<10){
        for(let i=1; i<10; i++){
            console.log(n*n+1);
        n++;
        }
    }
};

gugudan();

// let은 예약어/키워드라고함 (이미 정의되어 사용되고있는 단어)
//식별자 num  변수명이나 함수명처럼 어떤것 들의 이름을 지어주는것.주로 카멜케이스 작성법
// = , + - *  연산자라고 함
// 10+20  은 표현식이라고 함. 
 num= 10 + 20;


//화살표 함수
function sum(num1,num2){
    return num1 + num2
};

 sum = (num1,num2)=>{
    return num1 +num2;
}


const pow = x => x*x;
const result = pow(10);

//객체를 다룰 경우
const getObject = () =>({
    name: '철수',
    age: 20
})

//템플릿 문자열 백틱 "", '' 같이있는경우 백틱 ` 사용
let str2 = `"I'm fine thank you'"`;  

let name1 = '철수';
let name2 = '영희';

let string = `${name1}은 ${name2}를 좋아합니다.`;
console.log(string);


//동등 ==
let comparison1 = 10 === 10;

//일치 === 형식까지 맞춤
let comparison2 = 10 === 10;

//불일치 !=== 
let comparison3 = 10 === 10;