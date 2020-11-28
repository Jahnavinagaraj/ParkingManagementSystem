function validateName(){
	var name_js = document.getElementById("name");
    name_js.value = name_js.value.toUpperCase();
    var nameLength = name_js.value.length
    if(!/^[a-zA-Z ]+$/.test(name_js.value)){
		document.getElementById('nameerror').innerHTML= "Name should contain only alphabets and spaces";
	    document.getElementById("name").style.borderColor = "red";
		return false;
    }
    else if (nameLength < 3 ){
        document.getElementById('nameerror').innerHTML= "Name should be at least 3 characters length";
	    document.getElementById("name").style.borderColor = "red";
		return false;
    }
    else{
		document.getElementById('nameerror').innerHTML="";
        document.getElementById("name").style.borderColor = "green";
		return true;
    }
}

function validateVehicleNo(){
	var vehicalNumber = document.getElementById("vehical_number");
    vehicalNumber.value = vehicalNumber.value.toUpperCase();
    var vehicleLength = vehicalNumber.value.length
    
    if(!/^[a-zA-Z0-9 ]+$/.test(vehicalNumber.value)){
		document.getElementById('veherror').innerHTML= "Vehicle number should be alphanumeric only";
	    document.getElementById("vehical_number").style.borderColor = "red";
		return false;
    }
    else if (vehicleLength < 3){
		document.getElementById('veherror').innerHTML= "Vehicle Number should be at least 3 characters length";
	    document.getElementById("vehical_number").style.borderColor = "red";
		return false;
    }
    else{
		document.getElementById('veherror').innerHTML="";
        document.getElementById("vehical_number").style.borderColor = "green";
		return true;
    }
}

function setColorPhone(){
	var phn = document.getElementById("phone").value;
	var phnLength = phn.length
	if (isNaN(phn)){
		document.getElementById('phnerror').innerHTML= "Phone number should be numeric only.";
		document.getElementById("phone").style.borderColor = "red";
	}
	else if (phnLength!=10){
		document.getElementById('phnerror').innerHTML= "Phone number should be 10 numbers.";
		document.getElementById("phone").style.borderColor = "red";
	   return false;
	}
	else{
		document.getElementById('phnerror').innerHTML= "";
		document.getElementById("phone").style.borderColor = "green";
		return true;
   }
}

function validateEmail(){
   var emailField = document.getElementById("email");
   isValidEmail= emailField.checkValidity();
   if (!isValidEmail){
		document.getElementById('emailerror').innerHTML= "Not a valid email id.";
		document.getElementById("email").style.borderColor = "red";
	   return false;
   }
   else{
		document.getElementById('emailerror').innerHTML= "";
		document.getElementById("email").style.borderColor = "green";
		return true;
   }
}

function validateAddress(){
   var address = document.getElementById('address');

    var textArea = address.value.length;
    var charactersLeft = 200 - textArea;
	if (address.value.length<20){
		document.getElementById('remainingC').innerHTML="";
		document.getElementById('addresserror').innerHTML= " Address should be at least 20 characters length";
		return false;
	}
	else {
		document.getElementById('remainingC').innerHTML = "Characters left: " + charactersLeft;
		document.getElementById('addresserror').innerHTML= "";
		return true;
	}
}

function validateForm(){
	 if( !validateName()) {
		alert( "Please provide your name!, Name should have minimum 3 characters." );
		document.createmember.Name.focus() ;
		return false;
	 }
	 if( !validateEmail() ) {
		alert( "Please provide valid Email!" );
		document.createmember.EMail.focus() ;
		return false;
	 }
	 if( !setColorPhone() || isNaN( document.createmember.Phone.value ) ) {
		
		alert( "Please provide a valid phone number." );
		document.createmember.Phone.focus() ;
		return false;
	 }
	 if(!validateVehicleNo()) {
		alert( "Please provide a valid Vehicle Number!" );
		document.createmember.VehicleNo.focus() ;
		return false;
	 }
	 if( !validateAddress() ) {
		alert( "Please provide your Address!" );
		document.createmember.Address.focus() ;
		return false;
	 }
	 alert("Membership Created.");
	 return( true );
}
