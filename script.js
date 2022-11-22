//JavaScript
function quiz() {
	var score = 0;   
	var  totalQuestions  = 3;  
    alert("Welcome to my trivia game!");
    alert("Make sure you answer all the questions.");
    
    var q1 = prompt("Hope you doing good ?");    
	if(q1 == "yeah"    ) {
		score = score + 1;   
		alert("Correct!");  

	} else {
		alert("Incorrect!");  

	}
    
     var q2 = prompt(" Do you like dancing?");       
	if( q2 == "yes"   ) {
		score = score + 1;  
		 alert("Correct!"); 

	} else {
		  alert("Incorrect!");

	}
   
     var q3 = prompt("May i know your good name?");       
	if( q3 == "sure"   ) {
		 score = score + 1; 
		alert("Correct!");  

	} else {
		alert("Incorrect!");  

	}

	alert("You got " + score + " questions out of " + totalQuestions + " correct.");  
}
// bsd-disable infinite-loop-detection               