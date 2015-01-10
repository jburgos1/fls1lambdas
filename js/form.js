$(document).ready(function(){ 

	// Create input element for testing
    var input = document.createElement('input');
     
    // Create the supports object
    var supports = {};

    supports.autofocus = 'autofocus' in input;
    supports.required    = 'required' in input;
    supports.placeholder = 'placeholder' in input;
 
    // Fallback for autofocus attribute
    if(!supports.autofocus) {
    }
     
    // Fallback for required attribute
    if(!supports.required) {
    }
 
    // Fallback for placeholder attribute
    if(!supports.placeholder) {
    }

	var send = document.getElementById("btn-contact");

	if(send) {
        send.onclick = function () {
                this.value = '...Sending';
                this.css("border-color:#512D1E;")
			
				var check = checkForm();

				if (check == true){
					//Form is validated and can be sent
				}
				else{
					//don't send anything.
				}
        }
        this.value = 'Send message'
    }

    function checkForm(){
    	var name = document.getElementById("name");
    	var email = document.getElementById("email");
    	var phone = document.getElementById("phone");
    	var message = document.getElementById("message");

    	//Name Validation
    	if (name == "")
    	{
    		name.style.css("border-shadow:red;")
    	}

    	//Email Validation

    	//Phone Validation

    	//Message
    	

    	return false
    };




});

/*
	function validateForm() {
	  	var valid = 1;
	  	var email = document.getElementById('email');
	  	var email_validation = document.getElementById("email_validation");
	  	var name = document.getElementById('name');
	  	var name_validation = document.getElementById("name_validation");
	  	var message_validation = document.getElementById("message_validation");
	  	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	  
		if (name.value === "") {
	    	valid = 0;
	    	name.style.border = "red";
	    //name_validation.style.display = "block";
	    //name_validation.parentNode.style.backgroundColor = "#FFDFDF";
	  	} else {
	    //name_validation.style.display = "none";
	    //name_validation.parentNode.style.backgroundColor = "transparent";
	  	}
	  
	  	if (message.value === "") {
	    	valid = 0;
	    //message_validation.innerHTML = "Field Required";
	    //message_validation.style.display = "block";
	    //message_validation.parentNode.style.backgroundColor = "#FFDFDF";
	  	} else {
	    //message_validation.style.display = "none";
	    //message_validation.parentNode.style.backgroundColor = "transparent";
	  	}
	  
		if (email.value === "") {
	    	valid = 0;
	    //email_validation.innerHTML = "Field Required";
	    //email_validation.style.display = "block";
	    //email_validation.parentNode.style.backgroundColor = "#FFDFDF";
	  	} else {
	    //email_validation.style.display = "none";
	    //email_validation.parentNode.style.backgroundColor = "transparent";
	  	}
	  
	  	if(!filter.test(email.value)) {
	    	valid = 0;
	    //email_validation.innerHTML = "Invalid email address";
	    //email_validation.style.display = "block";
	    //email_validation.parentNode.style.backgroundColor = "#FFDFDF";
	  	} else {
	    //email_validation.style.display = "none";
	    //email_validation.parentNode.style.backgroundColor = "transparent";
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
			 hideAllErrors();
			 document.getElementById("nameError").style.display = "inline";
			 document.getElementById("name").select();
			 document.getElementById("name").focus();
			 return false;
		 }
		 else if (email == "")
		 {
			 hideAllErrors();
			 document.getElementById("emailError").style.display = "inline";
			 document.getElementById("email").select();
			 document.getElementById("email").focus();
			 return false;
		 }
		 else if (comment == "")
		 {
			 hideAllErrors();
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
	 
	function hideAllErrors() {
	 	document.getElementById("nameError").style.display = "none";
	 	document.getElementById("emailError").style.display = "none";
	 	document.getElementById("commentError").style.display = "none";
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
	 		hideAllErrors();
			document.getElementById("nameError").style.display = "inline";
			document.getElementById("name").select();
			document.getElementById("name").focus();
			return false;
	 	}
	 	else if (email == "")
	 	{
	 		hideAllErrors();
	 		document.getElementById("emailError").style.display = "inline";
	 		document.getElementById("email").select();
	 		document.getElementById("email").focus();
	 		return false;
	 	}
	 	else if (comment == "")
	 	{
	 		hideAllErrors();
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
	 
	function hideAllErrors() {
		 document.getElementById("nameError").style.display = "none";
		 document.getElementById("emailError").style.display = "none";
		 document.getElementById("commentError").style.display = "none";
	}
	 
	function checkEmail(inputvalue) {
	 	var pattern = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
	 	return pattern.test(inputvalue);
	}

*/