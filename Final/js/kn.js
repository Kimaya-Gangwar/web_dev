function textchecker()
{
  var will =document.getElementById("kimaya")
  var percy=will.value

  if (percy=="Carter Kane") {window.location.href="carter.html"}
  else if (percy=="Sadie Kane") {window.location.href="sadie.html"}
  else if (percy=="Walt Stone") {window.location.href="walt.html"}
  else if (percy=="Zia Rashid") {window.location.href="zia.html"}
  else {alert("Please Select A Character");}

}
