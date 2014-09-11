(function(){

var flyout = document.getElementById("flyout");
var filters = document.getElementById("filters");

function toggle(element) {
	var id = element.srcElement.getAttribute("id");
	console.log(id);
	if (id === "filters") {
		if (flyout.classList.contains('slideleft')) {
			flyout.removeAttribute("class","slideleft");	
			flyout.setAttribute("class","slideright");	
			filters.innerHTML = "Hide tumor selection";
		} else {
			flyout.removeAttribute("class","slideright");	
			flyout.setAttribute("class","slideleft");
			filters.innerHTML = "Change tumor selection";
		}
	}
}

filters.addEventListener("click", toggle, false);

})();