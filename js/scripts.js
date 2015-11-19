//JAVASCRIPT CHEAT SHEET
/*
// 1)VARIABLES
	var name = "Dave" 
	var x = 5
	var y //undefined

// 2)DEBUGGING (ALERTS, COMMENTS, THE CONSOLE)
	
	//ALERTS
	//this is an alert
	
		alert("I AM AN ALERT");

	//COMMENTS
	//this is a single line comment
*/	
	/*This is
	a multi-line
	comment*/
/*
	//CONSOLE
	//you can find the output of your javascript code
	//in the console in your browser
	console.log("OPEN THE CONSOLE TO FIND THIS TEXT")	
	
// 3)DATA TYPES
	//numbers
	5
	10.5
	1000000
	//strings (text)
	"this is a string"
	"must be in quotes"
	//boolean
	true //or
	false
	//undefined
		//no value
	var x
	//arrays
		//groups of any data type
		//see below
	//objects
		//variables which are made up of multiple values
	var person = {firstName:"Dave", 
				  lastName:"Noriega", 
				  age:36, 
				  eyeColor:"hazel"
	};


// 4)ARRAYS
	//groups of any data type
	["M","T","W","Th","F"] //array of strings
	[2,4,6,8,10,12] //array of numbers
	[1,2,3,"Monday"] //arrays can also hold multiple data types
	//array items can be retrieved by index number
	//first item always has the index of 0
	//["M","T","W","Th","F"] array
	//["0","1","2","3","4"] corresponding index for above array

// 5)TESTING
	//any test returns a boolean true or false
	
	1==1
	//true
	(1+1)==2
	//true

	//using three equal signs also checks the data type
	1===2
	//false
	1==="1"
	//false	

// 6)LOGIC
	//Logic Operators

	== //equal
	!= //not equal
	=== //equal(also checks data type)

	< //less than
	<= //less than or equal to
	> //greater than
	>= //greater than or equal to

	&& //and: both need to be true
	|| //or: only one needs to be true

// 7)FUNCTIONS
//declare function

function myFunction(no1, no2){
	return no1 + 5 + no2;
}
//call function
console.log(myFunction(1, 2));

*/

function button1(){
	alert("This is what I do");
}

function button2(){
	document.getElementById("body").style.backgroundColor = "black";
}

function button3(){
	document.getElementById("body").style.backgroundColor = "white";
	document.getElementById("b3").style.width = "500px";
	document.getElementById("b3").innerHTML = "This is what I do";
}


