function customImage()
{
	checkSession();
	var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     loadImage(this);
    }
  };
  xmlhttp.open("GET", "custom_image.xml", true);
  xmlhttp.send();
}
function loadImage(xml)
{
	xmlDoc=xml.responseXML;
	
	var banner=xmlDoc.getElementsByTagName("banner");
	document.getElementById("banner").setAttribute("src",banner[0].childNodes[0].nodeValue);
	
	var sideImage = xmlDoc.getElementsByTagName("parkingimage");
	document.getElementById("secondimage").style.background = "url("+sideImage[0].childNodes[0].nodeValue+")";
	
	var introVideo = xmlDoc.getElementsByTagName("advideo");
	document.getElementById("advideo").setAttribute("data",introVideo[0].childNodes[0].nodeValue);
}

