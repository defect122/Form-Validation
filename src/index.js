import "./style.css";
import { validateForm } from "./formValidation";
import { validateEmail } from "./validateEmail";
import { validatePassword } from "./validatePassword";
import { validatePostalCode } from "./validatePostalCode";

if (process.env.NODE_ENV !== "production") {
	console.log("Looks like we are in development mode!");
}

validateEmail();
validatePostalCode();
validatePassword();
validateForm();
