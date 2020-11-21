function changeLang()
{
	var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     loadLang(this);
    }
  };
  xmlhttp.open("GET", "spanish.xml", true);
  xmlhttp.send();
}
function loadLang(xml)
{
	xmlDoc=xml.responseXML;
	var header1=xmlDoc.getElementsByTagName("h1");
	documnet.getElementById("h1").innerHTML=header1[0].childNodes[0].nodeValue;
	
	var sideContent = xmlDoc.getElementsByTagName("aside");
	document.getElementById("aside").innerHTML = sideContent[0].childNodes[0].nodeValue;
	
	var mainContent = xmlDoc.getElementsByTagName("mainpara");
	document.getElementById("mainpara").innerHTML = mainContent[0].childnodes[0].nodeValue;
}
