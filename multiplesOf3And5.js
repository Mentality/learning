var multiple3 = 0;
var multiple5 = 0;
var totalSum =0;
for(var i=0;i<1000;i++) {
	if(i%3 === 0 || i%5 === 0) {
		totalSum += i;
	}
}
console.log(totalSum);
