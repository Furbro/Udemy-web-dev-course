/* First try: */
var name = prompt();
nameC = name.slice(0,1).toUpperCase();
alert("Hi " + nameC + name.slice(1) + "." );

/* Udemy solution */

var name = prompt("What is your name?");
var firstChar = name.slice(0,1);
var upperCaseFirstChar = firstChar.toUpperCase();
var restOfName = name.slice(1, name.length).toLowerCase();
var capitalizedName = upperCaseFirstChar + restOfName + ".";
alert("Hello, " + capitalizedName);

/* Secound Try */
var name = prompt();
var nameC = name.slice(0,1).toUpperCase();
var restOfName = name.slice(1, name.length).toLowerCase();
alert("Hi " + nameC + restOfName + "." );