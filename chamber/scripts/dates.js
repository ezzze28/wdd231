//Current Date (Year)
const currentYear = document.getElementById("currentYear");
date = new Date();
currentYear.innerText = date.getFullYear();

//Last update
const lastMod = document.getElementById("lastMod");

lastMod.innerText = `Last Modification: ${document.lastModified}`;
