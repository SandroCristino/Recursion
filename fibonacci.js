// Fibonacci with iteration 
function fibs(number) {
    let a = 0, b = 1, c;
    let result = [];
    while(number >= 1) {
        result.push(a);
        c = a + b;
        a = b;
        b = c;
        number--;
    }
    return result;
}
console.log(fibs(8))

// Fibonacci recursive
const fibsRec = (n) => {
	return n <= 0
		? "Invalid number"
		: n === 1
		? [0]
		: n === 2
		? [0, 1]
		: [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]];
};
console.log(fibsRec(8))