function customImage()
{
	var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     loadLang(this);
    }
  };
  xmlhttp.open("GET", "custom_image.xml", true);
  xmlhttp.send();
}
function loadImage(xml)
{
	xmlDoc=xml.responseXML;
	var banner=xmlDoc.getElementsByTagName("banner");
	documnet.getElementById("banner").innerHTML=banner[0].childNodes[0].nodeValue;
	
	var sideImage = xmlDoc.getElementsByTagName("parkingimage");
	document.getElementById("parkingimage").innerHTML = sideImage[0].childNodes[0].nodeValue;
	
	var introVideo = xmlDoc.getElementsByTagName("advideo");
	document.getElementById("advideo").innerHTML = introVideo[0].childnodes[0].nodeValue;
}
