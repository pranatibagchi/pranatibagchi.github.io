//this is invisible//
/* this is also invisible*/

function calculate(myLocation, myLocation2, myLocation3) { //passing multiple values//

    var myName="This is stackup, at " + myLocation + " " + myLocation2 + " " + myLocation3;
    console.log(myName);


}
calculate("One North", "JTC Launch Pad", "at Ayer Rajah"); //this is procedure. Not returning value//
calculate ("test", "test", "test");

function getMyFullName() {

var firstName="Pranati";
var lastName="Bagchi";
var fullName=firstName + " " + lastName;

return fullName; //this is return value//

}

var myFullName = getMyFullName();

console.log(myFullName);




//first way//
function greeting(firstName, secondName, thirdName) {
var hello="Hello, " + firstName + " " + secondName + " " + thirdName;
console.log(hello);

}
greeting("Michael Jordan,", "Mauro Icardi,", "Lionel Messi.");

//second way//
function greetings(mySportsPerson) { 

    var myName="Hello, " + mySportsPerson;
    console.log(myName);

}
greetings("Michael Jordan"); 
greetings("Mauro Icardi");
greetings("Lionel Messi");

//third way//
function greet(firstName, lastName) {
var greetings="Hello," + firstName + lastName;
console.log(greetings);

}
greet("michael", "jordan");
greet("Mauro", "Icardi");
greet("Lionel", "Messi");


function greet(firstName, lastName, myAge) {
    var age=2018 - myAge;
        var greetings="Hello," + firstName + lastName + " " + age;
    console.log(greetings);
    
}
greet("Pranati","Bagchi", 1988);

function testMe() {
    alert("Hi you hit the button"); //alert is the default function defined by the browser//
}


