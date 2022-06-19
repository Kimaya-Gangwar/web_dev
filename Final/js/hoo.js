function textchecker()
{
  var will =document.getElementById("kimaya")
  var percy=will.value

  if (percy=="Percy Jackson") {window.location.href="percy.html"}
  else if (percy=="Annabeth Chase") {window.location.href="annabeth.html"}
  else if (percy=="Nico Di Angelo") {window.location.href="nico.html"}
  else if (percy=="Hazel Levesque") {window.location.href="hazel.html"}
  else if (percy=="Jason Grace") {window.location.href="jason.html"}
  else if (percy=="Piper Mclean") {window.location.href="piper.html"}
  else if (percy=="Coach Hedge") {window.location.href="coach.html"}
  else {alert("Please Select A Character");}


}
