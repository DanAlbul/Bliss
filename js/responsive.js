function changeHeaderColor() {
var submit = document.getElementById("nav-btn");
submit.addEventListener("click", toggle);
};

function toggle() {
 var hc1 = document.getElementById('hc1');
 var hc2 = document.getElementById('hc2');
	var hc3 = document.getElementById('hc3');
	var hc4 = document.getElementById('hc4');
  hc1.classList.toggle('cHc');
  hc2.classList.toggle('cHc');
  hc3.classList.toggle('cHc');
  hc4.classList.toggle('subnone');
};

changeHeaderColor();
