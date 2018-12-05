
//document.getElementById("firstNumber").value; //to get value of html element//

//to display value//
//document.getElementById("result").value="";//



function calculate() {
    var first_number;
    var second_number;
    var total;
    var operator;

    first_number=document.getElementById("firstNumber").value;
    second_number=document.getElementById("secondNumber").value;
    operator=document.getElementById("operator").value;
    if(operator=="+"){
        total=parseInt(first_number) + parseInt(second_number); 
    }
    else if(operator=="-"){
        total=parseInt(first_number) - parseInt(second_number);
    }
    
    else if(operator=="/"){

        total=parseInt(first_number) / parseInt(second_number);
    }
    
    else if(operator=="*") {
        total=parseInt(first_number) * parseInt(second_number);
    }
    
       
        document.getElementById("result").value=total;
            
   
}




//morning
//afternoon
//evening
var greet;

greet="afternoon";



if(greet=="morning") {
    console.log("This is morning");

}
else if(greet=="afternoon") {
console.log("This is afternoon");

}
else if(greet=="evening") {
console.log("This is evening");

}

else{
    console.log("Night time"); //default condition if the varibale is not defined as greet=afternoon//
}

//arrays//

var greetings=["morning", "afternoon", "evening"];
console.log(greetings);

console.log(greetings.length);
console.log(greetings[1]);
console.log(greetings[2]);

var primeNumber=[1, 3, 5, 7, 9, 12, 15];
console.log(primeNumber[primeNumber.length - 1]);

var step=0;
while(step<primeNumber.length){
    console.log(step); //console.log(primeNumber[step]); will bring out the value of the array
    step=step + 1;
}

var numbers=[1,2,3,4,5,6,7,8,9,10];
//if even number, print "even number"
// if not then "not ven number"

step=0;
while(step<numbers.length){
    var isEven=numbers[step] % 2;

    if (isEven==0){
        console.log(numbers[step]+ " is even number");
    }
else {
    console.log(numbers[step]+ " is not even number");
}
step=step+1;
}


