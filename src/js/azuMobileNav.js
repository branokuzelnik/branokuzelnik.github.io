function mobileNavToggle() {
	var x = document.getElementById("nav");
	if (x.className === "nav") {
		x.className += " toggleOn";
	} else {
		x.className = "nav";
	}
} 
function mobileNavOff() {
	var x = document.getElementById("nav");
	x.className = "nav";
} 