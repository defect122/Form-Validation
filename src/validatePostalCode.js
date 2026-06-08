export const postalCode = document.getElementById("postalCode");
const postalCodeError = document.querySelector("#postalCode + span.error");

export function validatePostalCode() {
	postalCode.addEventListener("input", (event) => {
		if (postalCode.validity.valid) {
			postalCodeError.textContent = "";
			postalCodeError.className = "error";
		} else {
			showPostalCodeError();
		}
	});
}

export function showPostalCodeError() {
	if (postalCode.validity.valueMissing) {
		postalCodeError.textContent = "You need to add a postal code";
	} else if (postalCode.validity.tooShort) {
		postalCodeError.textContent = "Postal code is too short";
	} else if (postalCode.validity.patternMismatch) {
		postalCodeError.textContent = "Entered value must be a postal code";
	}
	postalCodeError.className = "error active";
}
