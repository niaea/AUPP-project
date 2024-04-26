// var text='';
// var i;
// for(i=0;i<=15;i++){
//     console.log(i);
// }

// var text='';
// var i=0;
// while(i<5){
// text += "The number"+i+'';
//     i++;
// }
// console.log(text);

// var text='';
// var i=0;
// while(i<15){
//     text += "The number is"+i+'';
//    i= i+2;
// }
// console.log(text);


// do while loop

// var text='';
// var i=0;
// do{
//     text+=  'The number is'+i +' ';
//     i++ ;
// }while(i<5) 
// console.log(text);

// var text='';
// var i=0;
// do{
//     text+= "The num is"+i +'';
//    i=i+3;
// }while(i<20);
// console.log(text);

// var text='';
// var i=0;
//  do{
//     text += i +'';
//     i++;
//  }while(i>5);
//  console.log(text);
 

// function

function fun1(x,y){
    var x;
    var y;
    x=2;y=4;
    return (x+y);
}

// function fun2(){

// }

// let currentDay = 3;
// let dayName ;
// switch (currentDay) {
//     case 0: 
//     dayName ='Sunday';
//     break;
//     case 1:
//     dayName ='Monday' ;
//     break;
//     case 2:
//     dayName ='Tuesday';
//     break;
//     case 3:
//     dayName ='Wednesday';
//     break;
//     case 4:
//     dayName ='Thursday' ;
//     break;
//     case 5:
//     dayName ='Friday' ;
//     break;
//     case 6:
//     dayName ='Sarturday' ;
//     break;
//     default:
//     dayName = 'Invalid day';
// }

// //   let message_1 = "Today is = "+dayName; // Unknown
// console.log(dayName);

// let currentDay =3;
// let dayName;
// switch(currentDay){
//     case 0 :dayName='Sunday';break;
//     case 1 : dayName= 'Monday';break;
//     case 2 : dayName='Tuesday';break;
//     case 3 : dayName='Wednesday';break;
//     case 4 : dayName='Thursday';break;
//     case 5 : dayName='Friday';break;
//     case 6 : dayName='Saturday';break;
//     default : dayName= 'Invalid Day!';
// }console.log(dayName);

let person=['head','hand','leg'];
// person.length;
// person.push('skin');
// person.pop(2);
// person.shift(2);
// person.unshift('eye');
person.splice(3,4,'nose');
console.log(person);
// console.log(person.length)   ;