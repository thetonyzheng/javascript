//Loops
/*
result = 1;

for (counter = 0; counter < 10; counter = counter + 1) {
	result = result + 1;
}
console.log(result)
*/

//Loop to print a tree of #
/*
results = "#";

for (counter = 0; counter < 7; counter = counter + 1) {
	console.log(results);
	results += "#";
}
*/

//Loop to print all numbers 1 - 100 but counts for divisibility by 3 and 5
/*
for (counter = 0; counter < 100; counter = counter + 1) {
	if (counter % 3 == 0 && counter % 5 == 0){
		console.log("Fizz Buzz")
	}
	else if (counter % 3 == 0){
		console.log("Fizz")
	}
	else if(counter % 5 == 0){
		console.log("Buzz")
	}
	else{
		console.log(counter)
	}
}
*/

//prints a checkerboard pattern
/*
for (counter = 0; counter < 8; counter = counter + 1) {
	if (counter % 2 == 0){
		console.log("# # # #");
	}
	else {
		console.log(" # # # #");
	}
}	
*/

function greet(who) { 
	console.log("Hello " + who);
}

greet("Harry");
console.log("Bye");