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
function getVehicleDetails() {
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
     		var t= "<header><b>Member Details</b><header><br/><table><tr><td>Name</td><td>"+members_list[i].name+"</td></tr><tr><td>Phone No</td><td>"+members_list[i].pho_no+"</td></tr><tr><td>Email id</td><td>"+members_list[i].email+"</td></tr><tr><td>Address</td><td>"+members_list[i].address+"</td></tr><tr><td>Vehicle Number</td><td>"+members_list[i].vehicle_number+"</td></tr></table>"
     		document.getElementById("mem_details").innerHTML=t;
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