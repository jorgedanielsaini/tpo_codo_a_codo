/* Const */
const burger = document.querySelector(".burger");
const menu_links = document.querySelector(".menu-item");
const bars = document.querySelectorAll(".burger span");
const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");
const message_error = document.querySelectorAll("#formulario p");;

/* navigation bar */
function activate_nav(){
	menu_links.classList.toggle("activado");
	bars.forEach(child =>{
		child.classList.toggle("animado");
	})
}

/* Form Validation */

const expressions = {
	name: /^[a-zA-zÀ-ÿ\s]{1,40}$/
	
}

function form_validation(){
	if(expressions || inputs[0].value.length < 4 || inputs[0].value.length >40){
		message_error[0].classList.remove("valid-input");
		message_error[0].classList.add("invalid-input");
		console.log("Error")
	} else if (inputs[0].value.length > 4 && inputs[0].value.length < 40){
		message_error[0].classList.remove("invalid-input");
		message_error[0].classList.add("valid-input");
		console.log("ok")
	}
}