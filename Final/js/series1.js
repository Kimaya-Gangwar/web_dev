function textchecker()
{
  var will =document.getElementById("kimaya")
  var percy=will.value

  if (percy=="Percy Jackson") {window.location.href="percy.html"}
  else if (percy=="Annabeth Chase") {window.location.href="annabeth.html"}
  else if (percy=="Nico Di Angelo") {window.location.href="nico.html"}
  else if (percy=="Grover Underwood") {window.location.href="grover.html"}
  else {alert("Please Select A Character");}


}
