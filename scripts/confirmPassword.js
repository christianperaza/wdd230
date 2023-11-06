const pass1 = document.querySelector("#pwd");
const pass2 = document.querySelector("#pwd2");
const message = document.querySelector(".formmessage");

pass2.addEventListener("focusout", checkSame);


function checkSame() {
	if (pass1.value !== pass2.value) {
		message.textContent = "⚠️ Key Phrases DO NOT MATCH!";
		message.style.visibility = "show";
		message.classList.toggle("show");
		pass2.style.backgroundColor = "#fff0f3";
		pass2.value = "";
		pass2.focus();
	} else {
		message.style.display = "none";
		pass2.style.backgroundColor = "rgb(233, 233, 233)";
		pass2.style.color = "#000";
	}
}