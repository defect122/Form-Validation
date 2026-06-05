import "./style.css";

export function createModal() {
  const modal = document.createElement("div");
  const content = document.querySelector("#content");
  const overlay = document.createElement("div");
  const modalHeader = document.createElement("div");
  const modalTitle = document.createElement("div");
  const modalBody = document.createElement("div");
  const modalClose = document.createElement("button");
  overlay.id = "overlay";
  modal.id = "modal";
  modal.className = "modal";
  modalHeader.className = "modal-header";
  modalBody.className = "modal-body";
  modalTitle.className = "title";
  modalClose.className = "close-button";
  modalClose.dataset.closeButton = "close-button";
  modalTitle.textContent = "Enter information";
  modalClose.textContent = "\u00d7";
  modalBody.textContent =
    "Macbeth’s Consequences soliloquy reveals the moral struggles that lead to his demise. In the speech, he thinks of every spiritual, social, and psychological danger that the murder will";
  modal.append(modalHeader);
  modalHeader.append(modalTitle);
  modalHeader.append(modalClose);
  modal.append(modalBody);
  content.append(modal);
  content.append(overlay);
}

export function pressedModal() {
  createModal();
  const openModalButtons = document.querySelectorAll("[data-modal-target]");
  const closeModalButtons = document.querySelectorAll("[data-close-button]");
  const overlay = document.getElementById("overlay");

  openModalButtons.forEach((element) => {
    element.addEventListener("click", () => {
      const modal = document.querySelector(element.dataset.modalTarget);
      openModal(modal);
    });
  });

  closeModalButtons.forEach((element) => {
    const modal = element.closest(".modal");
    element.addEventListener("click", () => {
      closeModal(modal);
    });
  });

  overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach((modal) => {
      closeModal(modal);
    });
  });

  function openModal(modal) {
    if (modal === null) return;
    modal.classList.add("active");
    overlay.classList.add("active");
  }

  function closeModal(modal) {
    if (modal === null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }
}
