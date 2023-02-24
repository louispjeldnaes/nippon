function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

/*BESTILLING STEP 1*/

let toPers = document.getElementById("toPers");
let antalPers = document.getElementById("antalPers");

toPers.addEventlistener("click", visAntal);

function visAntal() {
  alert("Hej med dig ekstern");
}
