 /*BESTILLING - STEP 2 - VÆLG RETTER 
  - vis info om Ramen med kylling
  (virker kun for sig selv)
  */


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