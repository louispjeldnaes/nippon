let closebtn = document.getElementsByClassName("closebtn");
let openbtn = document.getElementById("main");

openbtn.addEventListener("click", openNav);
closebtn.addEventlistener("click", closeNav);

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

/*BESTILLING STEP 1*/

let toPers = document.getElementById("toPers");
let output = document.getElementById("output");

toPers.addEventlistener("click", visAntalPers);

function visAntalPers() {
  output.innerHTML = "Hello World";
}
