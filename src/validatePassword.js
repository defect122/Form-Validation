export const password = document.getElementById("password");
const passwordError = document.querySelector("#password + span.error");

export function validatePassword() {
	password.addEventListener("input", (event) => {
		if (password.validity.valid) {
			passwordError.textContent = "";
			passwordError.className = "error";
		} else {
			showPasswordError();
		}
	});
}

export function showPasswordError() {
	const lowerCaseLetters = /[a-z]/g;
	const upperCaseLetters = /[A-Z]/g;
	const numbers = /[0-9]/g;
	if (!password.value.match(lowerCaseLetters)) {
		passwordError.textContent = "Password is missing a lowercase";
	} else if (!password.value.match(upperCaseLetters)) {
		passwordError.textContent = "Password is missing an uppercase";
	} else if (!password.value.match(numbers)) {
		passwordError.textContent = "Password is missing a number";
	} else if (password.validity.tooShort) {
		passwordError.textContent = "Password is too short";
	}
	passwordError.className = "error active";
}

export function showConfirmPasswordError() {
	const confirmPassword = document.getElementById("passwordConfirm");
	const confirmPasswordError = document.querySelector(
		"#passwordConfirm + span.error",
	);
	confirmPassword.addEventListener("input", () => {
		if (confirmPassword.value !== password.value && password.validity.valid) {
			confirmPasswordError.textContent = "Passwords do not match!";
			confirmPasswordError.className = "error active";
		} else {
			confirmPasswordError.textContent = "";
			confirmPasswordError.className = "error";
		}
	});
}

//Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters
