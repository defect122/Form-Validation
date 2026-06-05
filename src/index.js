import { createTodoList } from "./table";
import { openModal, pressedModal } from "./popup";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

createTodoList();
pressedModal();
