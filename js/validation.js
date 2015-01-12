$(document).ready(function(){ 

	// Create input element for testing
    var input = document.createElement('input');
    var errorSpan = document.getElementById('error');

    // Create the supports object
    var supports = {};
    supports.autofocus = 'autofocus' in input;
    supports.required    = 'required' in input;
    supports.placeholder = 'placeholder' in input;
 
    // Fallback for attributes
    if(!supports.autofocus) {}   
    if(!supports.required) {}
    if(!supports.placeholder) {}

 });

//Validation of all inputs
function Validation(){

    //Querying the DOM for input tags
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var message = document.getElementById("message");

    if (isName(name,5,30, 'Your name must be between 5 and 30 characters')){
    	if(isEmail(email, 'Please enter a valid e-mail address')){
    		if(isPhone(phone, 'Please enter only number for your phone number')){
    			if(minLength(message, 100, 'The message must be at least 100 characters')){
    				return true;
    			}
    		}
    	}
    }
    return false;
}

function isName(name, min, max, error){
	var nameExpression = /^[a-zA-Z ]{2,30}$/;

	if(name.length >= min && name.length <= max){
		return true;
	}else if(name.value.match(nameExpression)){
		return true;
	}else{
		errorSpan.innerHTML = error;
		name.focus();
		name.style.border = "1px solid red";
		return false;
	}
}

function isEmail(email, error){
	var emailExpression = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

	if(email.value.match(emailExpression)){
		return true;
	} else{
		errorSpan.innerHTML = error;
		email.focus();
		email.style.border= "1px solid red";
	}
}

function isPhone(phone, error){
	var phoneExpression = /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

	if(phone.value.match(phoneExpression)){
		return true;
	} else{
		//document.getElementById('error').innerHTML = error;
		errorSpan.innerHTML = error;
		phone.focus();
		phone.style.border = "1px solid red";
		return false;
	}
}

function minLength(message, min, error){
	if(message.length <= max && message.length >= min){
		return	true;
	}else{
		errorSpan.innerHTML = error;
		message.focus();
		message.style.border= "1px solid red";
	}
}

/* Using XMLHTTPRequest

//Sending the form
var send = document.getElementById("btn-contact");
var errorSpan = document.getElementById("error");

if(send) {
    send.onclick = function () {
            this.value = '...Sending';
            this.style("border-color:#512D1E;");
			sendMessage();
	}
this.value = 'Send message';
}

function sendForm(){
	var request = new XMLHttpRequest();



	request.open("POST","submit.php",true);
	request.onload = function(ev){
		if(request.status == 200){
			errorSpan.style.color = "green";
			errorSpan.innerHTML = "Sent!";
		}else{
			errorSpan.style.color="red";
			errorSpan.innerHTML = "Error" + request.status + " occurred while sending your information.";
		}
	};
	request.send()
	document.forms[0].reset();
}
*/