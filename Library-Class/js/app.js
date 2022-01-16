console.log("welcome to Library app");
//constructor
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

//display constructor
function Display() {}
//Add methods to display prototype
Display.prototype.add = function (book) {
  console.log("Adding to UI");
  let tableBody = document.getElementById("tableBody");
  let displayString = ` <tr>
<td>${book.name}</td>
<td>${book.author}</td>
<td>${book.type}</td>
</tr>`;
  tableBody.innerHTML += displayString;
};
Display.prototype.clear = function () {
  let libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
};

Display.prototype.validate = function (book) {
  if (book.name.length < 2 || book.name.type < 2 || book.name.author < 2) {
    //alert(`name, type and author's name should be more than 2 characters`)
    return false;
  } else {
    return true;
  }
};
Display.prototype.show = function (string) {
  let message = document.getElementById("message");
  if (string === "success") {
    message.innerHTML = `<div class="alert alert-success d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
         Your book is successfully added 
        </div>
      </div>`;
  } else if (string === "error") {
    message.innerHTML = `<div class="alert alert-danger d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
        name, type and author's name should be more than 2 characters
        </div>
      </div>`;
  }
  setTimeout(() => {
    message.innerHTML = ``;
  }, 2000);
};

//Add submit event listener to form
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  e.preventDefault();

  let name = document.getElementById("BookName").value;
  let author = document.getElementById("Author").value;
  let type = document.getElementById("Genre").value;
  let book = new Book(name, author, type);
  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("success");
  } else {
    display.show("error");
  }

  console.log(book);
}
