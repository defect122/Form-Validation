import "./style.css";

export function createTodoList() {
  const content = document.querySelector("#default");
  const table = document.createElement("table");
  const tableHeader = document.createElement("thead");
  const tableRow = document.createElement("tr");
  const title = document.createElement("th");
  const description = document.createElement("th");
  const dueDate = document.createElement("th");
  const priority = document.createElement("th");
  const notes = document.createElement("th");
  const checkList = document.createElement("th");
  title.textContent = "Title";
  description.textContent = "Description";
  dueDate.textContent = "Due Date";
  priority.textContent = "Priority";
  notes.textContent = "Notes";
  checkList.textContent = "Check List";
  content.append(table);
  table.append(tableHeader);
  tableHeader.append(tableRow);
  tableRow.append(title);
  tableRow.append(description);
  tableRow.append(dueDate);
  tableRow.append(priority);
  tableRow.append(notes);
  tableRow.append(checkList);
}
