const typeInput = document.querySelector(".input");
const addButton = document.querySelector(".add-note");
const mainContainer = document.querySelector(".container");

let notes = JSON.parse(localStorage.getItem("notes")) || [];



// Function to render all notes to the screen
function renderNotes() {

  mainContainer.innerHTML = "";

  notes.forEach((note, index) => {

    const noteCard = document.createElement("div");
    noteCard.classList.add("note-area");

    noteCard.innerHTML = `
      <p class="added-text">${note.text}</p>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    `;

    const deleteBtn = noteCard.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
      notes.splice(index, 1); // Remove from array
      saveAndRender();        // Update storage and screen
    });

    const editBtn = noteCard.querySelector(".edit-btn");
    editBtn.addEventListener("click", () => {
      const updatedText = prompt("Edit your note:", note.text);
      if (updatedText !== null && updatedText.trim() !== "") {
        notes[index].text = updatedText.trim();
        saveAndRender();
      }
    });

    mainContainer.appendChild(noteCard);
  });
}
