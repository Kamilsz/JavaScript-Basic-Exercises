
//http://projecteuler.net/problem=3
//Solution to problem 1

var sum=0;
for(var i=1; i<1000; i++){
    if (i%3===0 || i%5===0){
        sum+=i;
    }
}
console.log(sum);


//Solution to problem 3

function greatestFactor(num){
	var num2=num-1;
	while(num2>){
		if (num1 % num2 === 0 && isPrime(num2)) {
			return num2;
		};
		num2 -=1;
	}
}

function isPrime(num){
	num2=num-1;
	while(num2>1){
		if(num%num2===0){
			return false;
		}
		num2-=1;
	}
	return true;
}