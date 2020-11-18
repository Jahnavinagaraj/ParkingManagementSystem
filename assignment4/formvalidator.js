function validateName(){
	var name_js = document.getElementById("name");
    name_js.value = name_js.value.toUpperCase();
    var nameLength = name_js.value.length
    if (nameLength < 3){
	    document.getElementById("name").style.borderColor = "red";
		return false;
    }
    else{
        document.getElementById("name").style.borderColor = "green";
		return true;
    }
}

function validateVehicleNo(){
	var vehicalNumber = document.getElementById("vehical_number");
    vehicalNumber.value = vehicalNumber.value.toUpperCase();
    var vehicleLength = vehicalNumber.value.length
    if (vehicleLength < 3){
	    document.getElementById("vehical_number").style.borderColor = "red";
		return false;
    }
    else{
        document.getElementById("vehical_number").style.borderColor = "green";
		return true;
    }
}

function setColorPhone(){
   var phn = document.getElementById("phone").value;
   var phnLength = phn.length
   if (phnLength!=10){
	   document.getElementById("phone").style.borderColor = "red";
	   return false;
   }
   else{
   document.getElementById("phone").style.borderColor = "green";
   return true;
   }
}

function validateEmail(){
   var emailField = document.getElementById("email");
   isValidEmail= emailField.checkValidity();
   if (!isValidEmail){
	   document.getElementById("email").style.borderColor = "red";
	   return false;
   }
   else{
       document.getElementById("email").style.borderColor = "green";
	   return true;
   }
}

function validateAddress(){
   var address = document.getElementById('address');

    var textArea = address.value.length;
    var charactersLeft = 200 - textArea;
    var count = document.getElementById('remainingC');
    count.innerHTML = "Characters left: " + charactersLeft;
	if (address.value.length=0){
	  return false;
	}
	else {
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
