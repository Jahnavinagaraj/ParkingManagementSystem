function checkLogin(form)
{
	if(form.userid.value == "admin" && form.pwd.value == "password")
	{
		isSessionCreated = createSession();
		
		if (isSessionCreated){
			window.location.href = "home.html";
			return false;
		}
		else{
			alert("Cookie NOT set. Please make sure your browser is accepting cookies.");
			return false;
		}	
		
	}
	else
	{
		alert("Either Password or Username is wrong");
		return false;
	}
}

function checkSession(){
	if (document.cookie && document.cookie.indexOf('SessionAlive=1') != -1) {
	    createSession();
		return true;
	}
	else {
	 window.location.href = "inactive.html";
	}

}

function createSession(){
	var secs = 120;
	var now = new Date();
    var exp = new Date(now.getTime() + secs*1000);
    document.cookie = 'SessionAlive=1; expires='+exp.toUTCString();
	if (document.cookie && document.cookie.indexOf('SessionAlive=1') != -1) {
        return true;
    } else {
        return false;
    }
}