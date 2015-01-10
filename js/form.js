$(document).ready(function(){ 

	// Create input element for testing
    var input = document.createElement('input');
     
    // Create the supports object
    var supports = {};
    supports.autofocus = 'autofocus' in input;
    supports.required    = 'required' in input;
    supports.placeholder = 'placeholder' in input;
 
    // Fallback for attributes
    if(!supports.autofocus) {}   
    if(!supports.required) {}
    if(!supports.placeholder) {}

 }

//Validation of all inputs
function Validation(){

    //Querying the DOM for input tags
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var message = document.getElementById("message");
    var error = document.getElementById("error");

    if (IsAlphaNumeric(name, 'There was an error with your name')){
    	if(IsEmail(email, 'Please enter a valid e-mail address')){
    		if(IsNumeric(phone, 'Please enter only number for your phone number')){
    			if(MinLength(message,'The message must be at least 100 characters')){
    				return true;
    			}
    		}
    	}
    }
    return false;
}


//Sending the form
var send = document.getElementById("btn-contact");

if(send) {
    send.onclick = function () {
            this.value = '...Sending';
            this.style("border-color:#512D1E;");
			sendMessage();
	this.value = 'Send message';
	}
}


function IsEmail(email, error){
	return true;
};

function IsNumeric(phone, error){
	var phoneExpression = /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
	if(input.value.match(phoneExpression)){
		return true;
	}
	else{
		document.getElementById('error').innerHTML = error;
		phone.focus();
		phone.style.border = "red";
		return false;
	}
}

function IsAlphaNumeric(name, error){
	return true;
}

function MinLength(message, error){
	return true;
}

function sendForm(){
	error.style("color:green;");
	error.innerHTML("Your message was sent");
}
});

/*
function validateForm() {
  	var valid = 1;
  	var email = document.getElementById('email');
  	var name = document.getElementById('name');
  	var error = document.getElementById('error');
  	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
	if (name.value === "") {
    	valid = 0;
    	name.style.border = "red";
  	} else {
 		error.style.display = "none";
  	}
  
  	if (message.value === "") {
    	valid = 0;
		message.style.border = "red";
  	} else {
		error.style.display= "none";
  	}
  
	if (email.value === "") {
    	valid = 0;
    	email.style.border = "red";
  	} else {
    	error.style.display = "none";
  	}
  
  	if(!filter.test(email.value)) {
    	valid = 0;
    	
  	} else {
    
  	}

  	if (!valid)
    	return false;
}

function checkForm() {
	 name = document.getElementById("name").value;
	 email = document.getElementById("email").value;
	 comment = document.getElementById("comment").value;
 
	 if (name == "")
	 {
	
		 document.getElementById("nameError").style.display = "inline";
		 document.getElementById("name").select();
		 document.getElementById("name").focus();
		 return false;
	 }
	 else if (email == "")
	 {
		 
		 document.getElementById("emailError").style.display = "inline";
		 document.getElementById("email").select();
		 document.getElementById("email").focus();
		 return false;
	 }
	 else if (comment == "")
	 {
		
		 document.getElementById("commentError").style.display = "inline";
		 document.getElementById("comment").select();
		 document.getElementById("comment").focus();
		 return false;
	 }
	 if (!checkEmail(email))
	 {
	 	alert('Email address is invalid');
	 	return false;
	 }
	 return true;
}
 
function checkEmail(inputvalue) {
 	var pattern = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
 	return pattern.test(inputvalue);
}

function checkForm() {
 	name = document.getElementById("name").value;
 	email = document.getElementById("email").value;
 	comment = document.getElementById("comment").value;
 
	if (name == "")
 	{
		document.getElementById("name").select();
		document.getElementById("name").focus();
		return false;
 	}
 	else if (email == "")
 	{
 		document.getElementById("email").select();
 		document.getElementById("email").focus();
 		return false;
 	}
 	else if (comment == "")
 	{
 		document.getElementById("comment").select();
 		document.getElementById("comment").focus();
 		return false;
 	}
 	
 	if (!checkEmail(email))
 	{
 		alert('Email address is invalid');
 		return false;
 	}
 return true;
}

function checkEmail(inputvalue) {
 	var pattern = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
 	return pattern.test(inputvalue);
}
*/

////////////////////////////////////////////////////
function formValidation(){

	// Make quick references to our fields
	var firstname =  document.getElementById('firstname');
	var addr =  document.getElementById('addr');
	var zip =  document.getElementById('zip');
	var state =  document.getElementById('state');
	var username =  document.getElementById('username');
	var email =  document.getElementById('email');

	//  to check empty form fields.

	if(firstname.value.length == 0){
		document.getElementById('head').innerText = "* All fields are mandatory *"; //this segment displays the validation rule for all fields
		firstname.focus();
		return false;
	} 

	// Check each input in the order that it appears in the form!
	 if(inputAlphabet(firstname, "* For your name please use alphabets only *")){
		
		if(lengthDefine(username, 6, 8)){
		    if(emailValidation(email, "* Please enter a valid email address *")){
		        if(trueSelection(state, "* Please Choose any one option")){
	                if(textAlphanumeric(addr, "* For Address please use numbers and letters *")){
						if(textNumeric(zip, "* Please enter a valid zip code *")){
						  return true;
						}
					}
				}
			}
		}
	}


	return false;

}

//function that checks whether input text is numeric or not.

function textNumeric(inputtext, alertMsg){
var numericExpression = /^[0-9]+$/;
if(inputtext.value.match(numericExpression)){
	return true;
}else{
	document.getElementById('p6').innerText = alertMsg;  //this segment displays the validation rule for zip
	inputtext.focus();
	return false;
}
}


//function that checks whether input text is an alphabetic character or not.

function inputAlphabet(inputtext, alertMsg){
var alphaExp = /^[a-zA-Z]+$/;
if(inputtext.value.match(alphaExp)){
	return true;
}else{
	document.getElementById('p1').innerText = alertMsg;  //this segment displays the validation rule for name
	//alert(alertMsg);
	inputtext.focus();
	return false;
}
}


//function that checks whether input text includes alphabetic and numeric characters.

function textAlphanumeric(inputtext, alertMsg){
var alphaExp = /^[0-9a-zA-Z]+$/;
if(inputtext.value.match(alphaExp)){
	return true;
}else{
	document.getElementById('p5').innerText = alertMsg; //this segment displays the validation rule for address
	inputtext.focus();
	return false;
}
}

// Function that checks whether the input characters are restricted according to defined by user.

function lengthDefine(inputtext, min, max){
var uInput = inputtext.value;
if(uInput.length >= min && uInput.length <= max){
	return true;
}else{
	
	document.getElementById('p2').innerText = "* Please enter between " +min+ " and " +max+ " characters *"; //this segment displays the validation rule for username
	inputtext.focus();
	return false;
}
}

// Function that checks whether a option is selected from the selector and if it's not it displays an alert message.

function trueSelection(inputtext, alertMsg){
if(inputtext.value == "Please Choose"){
	document.getElementById('p4').innerText = alertMsg; //this segment displays the validation rule for selection
	inputtext.focus();
	return false;
}else{
	return true;
}
}

// Function that checks whether an user entered valid email address or not and displays alert message on wrong email address format.

function emailValidation(inputtext, alertMsg){
var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
if(inputtext.value.match(emailExp)){
	return true;
}else{
	document.getElementById('p3').innerText = alertMsg; //this segment displays the validation rule for email
	inputtext.focus();
	return false;
}
}
*/