/* HEADER MOBIL (virker med de andre)*/
const closebtn = document.getElementById('closebtn');
const openbtn = document.getElementById('main');

openbtn.addEventListener("click", openNav);
closebtn.addEventListener("click", closeNav);

function openNav() {
  document.getElementById("mySidenav").style.width = "75vw";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


/* BESTILLING - STEP 1 - VÆLT ANTAL PERSONER, MÅLTIDER OG SE PRIS 
(Virker med de andre)*/
let toPers = document.getElementById("toPersoner");
let trePers = document.getElementById('trePers');
let firePers = document.getElementById('firePers');
let output1 = document.getElementById('output1');
let udregnetPris = document.getElementById('udregnetPris');
let endeligPris = document.getElementById('endeligPris');
let toMaaltider = document.getElementById('toMaaltider');
let treMaaltider = document.getElementById('treMaaltider');
let fireMaaltider = document.getElementById('fireMaaltider');
let femMaaltider = document.getElementById('femMaaltider');
let output2 = document.getElementById('output2');

let rabat = 150 ;
let pris = 150 ;

toPers.addEventListener("click", visAntalPers);
trePers.addEventListener("click", visAntalPers1);
firePers.addEventListener("click", visAntalPers2);
toMaaltider.addEventListener("click", visAntalMaaltider);
treMaaltider.addEventListener("click", visAntalMaaltider1);
fireMaaltider.addEventListener("click", visAntalMaaltider2);
femMaaltider.addEventListener("click", visAntalMaaltider3);


function visAntalPers() {

  toPers.style.backgroundColor = "#ea6a6a";
  trePers.style.backgroundColor = "#fbfbfb";
  firePers.style.backgroundColor ="#fbfbfb";

  let resultat = 2 * pris; 
  let prisIAlt = resultat - rabat;
  output1.innerHTML = "2 Personer";
  udregnetPris.innerHTML = resultat + ",-";
  endeligPris.innerHTML = prisIAlt + ",-";

}

function visAntalPers1() {
  toPers.style.backgroundColor ="#fbfbfb";
  trePers.style.backgroundColor ="#ea6a6a";
  firePers.style.backgroundColor ="#fbfbfb";

  let resultat = 3 * pris; 
  let prisIAlt = resultat - rabat;
  output1.innerHTML = "3 Personer";
  udregnetPris.innerHTML = resultat + ",-";
  endeligPris.innerHTML = prisIAlt + ",-";
}

function visAntalPers2() {
  toPers.style.backgroundColor ="#fbfbfb";
  trePers.style.backgroundColor ="#fbfbfb";
  firePers.style.backgroundColor ="#ea6a6a";

  let resultat = 4 * pris; 
  let prisIAlt = resultat - rabat;
  output1.innerHTML = "3 Personer";
  udregnetPris.innerHTML = resultat + ",-";
  endeligPris.innerHTML = prisIAlt + ",-";
}

function visAntalMaaltider() {
  toMaaltider.style.backgroundColor = "#ea6a6a";
  treMaaltider.style.backgroundColor = "#fbfbfb";
  fireMaaltider.style.backgroundColor ="#fbfbfb";
  femMaaltider.style.backgroundColor ="#fbfbfb";

  output2.innerHTML = "2 Måltider";
}

function visAntalMaaltider1() {
  toMaaltider.style.backgroundColor = "#fbfbfb";
  treMaaltider.style.backgroundColor = "#ea6a6a";
  fireMaaltider.style.backgroundColor ="#fbfbfb";
  femMaaltider.style.backgroundColor ="#fbfbfb";

  output2.innerHTML = "3 Måltider";
}

function visAntalMaaltider2() {
  toMaaltider.style.backgroundColor = "#fbfbfb";
  treMaaltider.style.backgroundColor = "#fbfbfb";
  fireMaaltider.style.backgroundColor ="#ea6a6a";
  femMaaltider.style.backgroundColor ="#fbfbfb";

  output2.innerHTML = "4 Måltider";
}
function visAntalMaaltider3() {
  toMaaltider.style.backgroundColor = "#fbfbfb";
  treMaaltider.style.backgroundColor = "#fbfbfb";
  fireMaaltider.style.backgroundColor ="#fbfbfb";
  femMaaltider.style.backgroundColor ="#ea6a6a";

  output2.innerHTML = "5 Måltider";
}


 /*BESTILLING - STEP 2 - VÆLG RETTER 
  - vis info om Ramen med kylling
  (virker kun for sig selv)

  let ramenLink = document.getElementById('ramenLink');
  let ramenInfoBoks = document.getElementById('infoRamen');
  let closeRamen = document.getElementById('closeRamen');
  let vaelgRetter = document.getElementById('vaelgRetter');
  
  ramenLink.addEventListener("click", visRamen);
  closeRamen.addEventListener("click", lukRamen);
  
  function visRamen() {
    ramenInfoBoks.style.display = "block";
    vaelgRetter.style.opacity = "0.4";
  }
  
  function lukRamen() {
    ramenInfoBoks.style.display = "none";
    vaelgRetter.style.opacity = "1";
  }
  
  /* Dropdown i mobil navigation 
(virker kun for sig selv)
let voresretterDropdown = document.getElementById('voresretterDropdown');
let voresretterLinks = document.getElementById('voresretterLinks');

voresretterDropdown.addEventListener("click", visVoresretterLinks);

function visVoresretterLinks() {
  voresretterLinks.style.display = "block";
}*/