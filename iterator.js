'use strict'
const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    // here belongs the FizzBuzz logic
    // Hint：
    // When it's finished you have to return an object
    // with the property `done: true` but before you
    // have to set `done: false`
    let cur = 0;
    return{
        next(){
            cur ++;
            let result = '';
            if(cur > max){
                return{done: true};
            }else if(cur % 3 === 0){
                result += 'Fizz';
            }if(cur % 5 === 0){
                result += 'Buzz'; 
            }
            if(cur % 3 !== 0 && cur % 5 !== 0){
                return {done: false,value:cur};
            }
            return {done:false, value: result};
        }
    }

  }
}

for (var n of FizzBuzz) {
  console.log(n);
}
    // 1
    // 2
    // Fizz
    // 4
    // Buzz
    // Fizz
    // 7
    // 8
    // Fizz
    // Buzz
    // 11
    // Fizz