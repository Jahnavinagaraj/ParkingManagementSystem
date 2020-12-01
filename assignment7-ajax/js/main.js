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
function getVehicleDetails(form) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		console.log(this.responseText)
     var members_list=JSON.parse(this.responseText).members;
     var isVehicleFound=false;
	 var veh_no= document.getElementById("vehicle_number").value;
     for(var i=0; i<members_list.length; i++)
     {
     	if(veh_no==members_list[i].vehicle_number)
     	{
     		document.getElementById("mem_details").innerHTML=members_list[i].name;
     		isVehicleFound=true;
     	}
     }
     if (isVehicleFound==false)
     {
     	document.getElementById("mem_details").innerHTML="No Vehicle details found";
     }
     
    }
  };
  xhttp.open("GET", "data/mem_details.json", true);
  xhttp.send();
  }