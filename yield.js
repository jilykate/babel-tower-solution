'use strict'
const max = process.argv[2];

let FizzBuzz = function* (){
	let cur = 0;
	while(cur < max){
		cur ++;
		if(cur % 3 === 0 && cur % 5 === 0){
			yield 'FizzBuzz';
		}else if(cur % 3 === 0){
			yield 'Fizz';
		}else if(cur % 5 === 0){
			yield 'Buzz';
		}else{
			yield cur;
		}
	}
}();

for(var n of FizzBuzz){
	console.log(n);
}