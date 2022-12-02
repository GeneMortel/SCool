var attempt = 3; //Variable to count number of attempts

//Below function Executes on click of login button
function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if ( username == "admin" && password == "root"){
		alert ("Login successfully");
		window.location = "success.html";							// Redirect page
		return false;
	}
	else{
		attempt --;													//decrement attempt by one
		alert("Incorrect Password !! You have left "+attempt+" attempt;");
		
			
		if( attempt == 0){											//Disabling inputs after 3 attempts
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
		}
	}
}