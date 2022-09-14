/* navigation bar */
const burger = document.querySelector(".burger");
const menu_links = document.querySelector(".menu-item");
const bars = document.querySelectorAll(".burger span")

function activate_nav(){
	menu_links.classList.toggle("activado");
	bars.forEach(child =>{
		child.classList.toggle("animado");
	})
}

