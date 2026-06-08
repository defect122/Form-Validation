export const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");

export function validateEmail() {
	email.addEventListener("input", (event) => {
		if (email.validity.valid) {
			emailError.textContent = "";
			emailError.className = "error";
		} else {
			showEmailError();
		}
	});
}

export function showEmailError() {
	if (email.validity.valueMissing) {
		emailError.textContent = "You need to enter an email address.";
	} else if (email.validity.typeMismatch) {
		emailError.textContent = "Entered value needs to be an email address.";
	} else if (email.validity.tooShort) {
		emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.;`;
	}
	emailError.className = "error active";
}
