function textchecker()
{
  var will =document.getElementById("kimaya")
  var percy=will.value

  if (percy=="Magnus Chase") {window.location.href="magnus.html"}
  else if (percy=="Alex Fierro") {window.location.href="alex.html"}
  else if (percy=="Mallory Keen") {window.location.href="mallory.html"}
  else if (percy=="Halfborn Gunnerson") {window.location.href="halfborn.html"}
  else if (percy=="Samairah Al Abhas") {window.location.href="samairah.html"}
  else {alert("Please Select A Character");}

}
