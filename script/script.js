var inputForm ={
	generalForm: document.getElementById("form"),
	inputs: document.querySelectorAll(".form div input").forEach(inputCurrent => {inputCurrent.addEventListener("blur", validateEachInput); inputCurrent.addEventListener("keyup", validateEachInput);}),
	button: document.getElementById("sendForm").addEventListener("click", validateGeneral),
}
var outputForm ={
	iconError: document.querySelectorAll(".icon-error"),
	letterError:document.querySelectorAll(".letter-error"),
}
var regex = {
	firstName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	lastName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	password: /^.{4,20}$/
}

var forGeneralValidationInputs ={
	0: false, //firstName
	1: false, //lastName
	2: false, //email
	3: false, //password
}

function validateEachInput(e){
	switch (e.target.name) {
		case "firstName":
			validateRegex(regex.firstName, 0, e.target.value);
			break;
		case "lastName":
			validateRegex(regex.lastName, 1, e.target.value);
			break;
		case "email":
			validateRegex(regex.email, 2, e.target.value);
			break;
		case "password":
			validateRegex(regex.password, 3, e.target.value);
			break;
		default:
			break;
	}
}
function validateRegex(typeInput,i,target){
	if (typeInput.test(target)) {
		outputForm.iconError[i].style.opacity = "0";
		outputForm.letterError[i].style.opacity = "0";
		forGeneralValidationInputs[i] = true;
	}else{
		outputForm.iconError[i].style.opacity = "100";
		outputForm.letterError[i].style.opacity = "100";
		forGeneralValidationInputs[i] = false;
	}
}

function validateGeneral(e){
	e.preventDefault()
	if(forGeneralValidationInputs[0] && forGeneralValidationInputs[1] && forGeneralValidationInputs[2] && forGeneralValidationInputs[3]){
		inputForm.generalForm.reset();
		for(var j = 0; j <= 3; j ++ ){
			forGeneralValidationInputs[j] = false;
		}
	}else{
		for(var j = 0; j <= 3; j ++ ){
			(forGeneralValidationInputs[j]) ? "" : outputForm.iconError[j].style.opacity = "100";
			(forGeneralValidationInputs[j]) ? "" : outputForm.letterError[j].style.opacity = "100";
		}
	}
}
