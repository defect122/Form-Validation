import { email, showEmailError } from "./validateEmail";
import {
	password,
	showConfirmPasswordError,
	showPasswordError,
} from "./validatePassword";
import { postalCode, showPostalCodeError } from "./validatePostalCode";

const congrats = document.querySelector("span.congrats");

export function validateForm() {
	const form = document.querySelector("form");

	form.addEventListener("submit", (event) => {
		if (
			!email.validity.valid &&
			!postalCode.validity.valid &&
			!password.validity.valid
		) {
			congrats.textContent = "";
			congrats.className = "congrats";
			showEmailError();
			showPostalCodeError();
			showPasswordError();
			showConfirmPasswordError();
			event.preventDefault();
		} else {
			congrats.textContent = "Congrats";
			congrats.className = "congrats active";
			event.preventDefault();
		}
	});
}
