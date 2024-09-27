//Arithmetic operators
	let x = 1397;
	let y = 7831;

	let sum = x+y;
	console.log(`Result of addition operator ${sum}`);

	let diff = x - y;
	console.log(`Result of subtraction operator${diff}`);

	let product = x * y;
	console.log(`Result of multiplication operator ${product}`);

	let quotient = x / y;
	console.log(`Result of division operator ${quotient}`);

	let remainder = y % x;
	console.log(`Result of the modulo operator ${remainder}`);

//Assignment operator
	//Basic Assignment operator ) -> the assignment operator adds the value of the right
	//operand to a variable and assigns the result to the variable

	let assignmentNumber = 8;

	//Addition assignment operator adds the value of the right operand to a variable and assigns the result to the variable

	assignmentNumber = assignmentNumber + 2
	console.log(`Result of addition assignment operator: ${assignmentNumber}`);

	//shorthand
	assignmentNumber += 2;
	console.log(`Result of addition assignment operator: ${assignmentNumber}`);

	//subtraction -= / Multiplication *= / division /=
	assignmentNumber -=2
	console.log	(`Result of subtraction assignment operator: ${assignmentNumber}`);

// Multiple operators and parethesis
/*
	-when multiple operators are applied in a single statement, it follows the PEMDAS(Parenthesis, Exponent,
	Multiplication, Division, Addition and Subtraction)
	-the operation were done in the following:
	ex. 1 + 2 - 3 * 4 / 5
		3*4 = 12
		12/5= 2.4
		1+2 = 3
		3-2.4=0.6


*/

let mdas = 1 + 2 - 3 * 4 / 5;
console.log(`Result of mdas operation: ${mdas}`);

let pemdas = 1 + (2 - 3) * (4 / 5); 


// post - pre increment
let z = 1; 


let preIncrement = ++z; 
console.log(`The pre increment is:  ${preIncrement}`);

// post increment 
myNum1 = 1; 
let postIncrement = myNum1++; 
console.log(`Post increment is: ${postIncrement}`);