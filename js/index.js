// Const 
const burger = document.querySelector(".burger");
const menu_links = document.querySelector(".menu-item");
const bars = document.querySelectorAll(".burger span");
const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");
const coment = document.getElementById("coment");
const message_error = document.querySelectorAll("#formulario p");;

// navigation bar
function activate_nav(){
	menu_links.classList.toggle("activado");
	bars.forEach(child =>{
		child.classList.toggle("animado");
	})
}

// Cuenta y muestra los cáracteres del texarea "coment"
function countCharacters() {
	document.getElementById("counter").textContent = coment.value.length;
}

// Form Validation

var resName = false;
var resMail = false;
var resWhatsApp = false;
var resComent = false;

function input_validation(expression, input, indexMessage){
	if(expression.test(input.value)){
		message_error[indexMessage].classList.remove("invalid-input");
		message_error[indexMessage].classList.add("valid-input");
		return true;
	} else {
		message_error[indexMessage].classList.remove("valid-input");
		message_error[indexMessage].classList.add("invalid-input");
		return false;
	}
}

function form_validation(e){
	//Expresiones regulares para realizar las validaciones
	const expressions = {
		name_valid: /^[a-zA-zÀ-ÿ\s]{4,40}$/,
		mail_valid: /^[a-zA-z0-9_.+-]+@[a-zA-z0-9-]+\.[a-zA-z0-9.]+$/,
		whatsApp_valid:/^\d{7,12}$/,
		comment_valid: /^.{10,400}$/
	}

	switch(e.target.name){
		case "nameForm":
			resName = input_validation(expressions.name_valid, e.target, 0);
		break;
		case "mail": //el input mail no es obligatorio
			if(e.target.value){
				resMail = input_validation(expressions.mail_valid, e.target, 1);
			} else {
				message_error[1].classList.remove("invalid-input");
				message_error[1].classList.add("valid-input");
				resMail = true;
			}
		break;
		case "whatsApp":
			resWhatsApp = input_validation(expressions.whatsApp_valid, e.target, 2);
		break;
		case "coment":
			resComent = input_validation(expressions.comment_valid, e.target, 4);
		break;
	}
}

inputs.forEach((input) =>{
	input.addEventListener("blur", form_validation);
	coment.addEventListener("blur", form_validation);
});

// Envia el formulario
function enviar(){
	if(resName && resMail && resWhatsApp && resComent){
		formulario.reset();
		swal("Formulario enviado!", "Gracias por escribirnos, nos comunicaremos a la brevedad", "success")
	} else {
		inputs.forEach((input) =>{
			input.focus();
		});
		coment.focus();
		coment.blur();
	}
}

//API
let url = "https://randomuser.me/api/";
	
fetch(url)
	.then(res => res.json())
	.then(data =>{
	let name =  data.results[0].name.first;
	let lastName =  data.results[0].name.last;
	let photo = data.results[0].picture.medium;
	document.getElementById("api-conect").innerHTML = `
	<div class="imgBx"><img src=${photo} alt="Foto de perfil de ${name} ${lastName}"></div><div class="contentBx"><h3>${name.toUpperCase()} ${lastName.toUpperCase()}</h3><br></div>`;
	})
	.catch(error => {
		console.log(error)
	})



